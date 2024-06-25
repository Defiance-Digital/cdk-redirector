import { EndpointType, MockIntegration, PassthroughBehavior, RestApi } from 'aws-cdk-lib/aws-apigateway';
import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import { Construct } from 'constructs';

export interface RedirectorProps {
  /**
   * A certificate to associate with the API Gateway Endpoint
   */
  readonly certificate: ICertificate;

  /**
   * The domain name to associate with the API Gateway Endpoint. This domain needs to be covered by the given certificate.
   */
  readonly domainName: string;

  /**
   * The type of redirect to perform. Either a permanent (301) or temporary (302) redirect.
   *
   * @default REDIRECT_TYPE.TEMPORARY
   */
  readonly redirectType?: RedirectType;


  /**
   * The URL to redirect to.
   */
  readonly redirectUrl: string;

  /**
   * The name of the API Gateway Endpoint. If not given, then 'Redirecter' is used.
   *
   * @optional
   */
  readonly restApiName?: string;
}

export enum RedirectType {
  TEMPORARY = 'temporary',
  PERMANENT = 'permanent',
}

/**
 * Creates an API Gateway endpoint that redirects to a given URL.
 */
export class Redirector extends Construct {
  constructor(scope: Construct, id: string, props: RedirectorProps) {
    super(scope, id);
    const restApi = new RestApi(this, 'Resource', {
      domainName: {
        domainName: props.domainName,
        certificate: props.certificate,
      },
      deployOptions: {
        stageName: 'v1',
      },
      restApiName: props.restApiName ?? 'Redirector',
      endpointTypes: [EndpointType.REGIONAL],
    });

    const statusCode = props.redirectType === RedirectType.PERMANENT ? 301 : 302;

    restApi.root.addMethod('GET', new MockIntegration({
      integrationResponses: [{
        statusCode: `${statusCode}`,
        responseParameters: {
          'method.response.header.Location': `'${props.redirectUrl}'`,
        },
      }],
      passthroughBehavior: PassthroughBehavior.NEVER,
      requestTemplates: {
        'application/json': `{"statusCode": ${statusCode}}`,
      },
    }), {
      methodResponses: [
        {
          statusCode: `${statusCode}`,
          responseParameters: {
            'method.response.header.Location': true,
          },
        },
      ],
    });
  }

}
