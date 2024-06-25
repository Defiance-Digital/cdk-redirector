import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import { RedirectType, Redirector, RedirectorProps } from '../src';

describe('Redirector', () => {
  function createTestStack(props?: Partial<RedirectorProps>) {
    const app = new App();
    const stack = new Stack(app, 'Stack');
    new Redirector(stack, 'Redirector', {
      certificate: new Certificate(stack, 'Certificate', {
        domainName: 'someolddomain.com',
      }),
      domainName: 'someolddomain.com',
      redirectUrl: 'somenewdomain.com',
      ...props,
    });

    const template = Template.fromStack(stack);
    return template;
  }

  describe('snapshots', () => {
    it('with default props', () => {
      const template = createTestStack();
      expect(template.toJSON()).toMatchSnapshot();
    });
  });
  describe('restApiName', () => {
    it('Uses default name with restApiName not provided', () => {
      const template = createTestStack();
      template.hasResourceProperties('AWS::ApiGateway::RestApi', {
        EndpointConfiguration: {
          Types: [
            'REGIONAL',
          ],
        },
        Name: 'Redirector',
      });
    });

    it('Uses given name with restApiName provided', () => {
      const template = createTestStack({
        restApiName: 'MyRedirector',
      });
      template.hasResourceProperties('AWS::ApiGateway::RestApi', {
        EndpointConfiguration: {
          Types: [
            'REGIONAL',
          ],
        },
        Name: 'MyRedirector',
      });
    });

  });

  it('Custom Domain is correct', () => {
    const template = createTestStack();
    template.hasResourceProperties('AWS::ApiGateway::DomainName', {
      DomainName: 'someolddomain.com',
      EndpointConfiguration: {
        Types: [
          'REGIONAL',
        ],
      },
    });
  });
  describe('GET Method', () => {
    it('with 302 temp redirect', () => {
      const template = createTestStack();
      template.hasResourceProperties('AWS::ApiGateway::Method', {
        AuthorizationType: 'NONE',
        HttpMethod: 'GET',
        Integration: {
          IntegrationResponses: [
            {
              ResponseParameters: {
                'method.response.header.Location': "'somenewdomain.com'",
              },
              StatusCode: '302',
            },
          ],
          PassthroughBehavior: 'NEVER',
          RequestTemplates: {
            'application/json': '{"statusCode": 302}',
          },
          Type: 'MOCK',
        },
        MethodResponses: [
          {
            ResponseParameters: {
              'method.response.header.Location': true,
            },
            StatusCode: '302',
          },
        ],

      });
    });
    it('with 301 perm redirect', () => {
      const template = createTestStack({
        redirectType: RedirectType.PERMANENT,
      });
      template.hasResourceProperties('AWS::ApiGateway::Method', {
        AuthorizationType: 'NONE',
        HttpMethod: 'GET',
        Integration: {
          IntegrationResponses: [
            {
              ResponseParameters: {
                'method.response.header.Location': "'somenewdomain.com'",
              },
              StatusCode: '301',
            },
          ],
          PassthroughBehavior: 'NEVER',
          RequestTemplates: {
            'application/json': '{"statusCode": 301}',
          },
          Type: 'MOCK',
        },
        MethodResponses: [
          {
            ResponseParameters: {
              'method.response.header.Location': true,
            },
            StatusCode: '301',
          },
        ],
      });
    });
  });

});
