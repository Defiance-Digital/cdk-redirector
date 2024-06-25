import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  projenrcTs: true,
  author: 'Matthew Bonig',
  authorAddress: 'matthew.bonig@defiance.ai',
  cdkVersion: '2.133.0',
  defaultReleaseBranch: 'main',
  depsUpgrade: false,
  homepage: 'https://defiance.ai',
  name: '@defiance-digital/cdk-redirector',
  repositoryUrl: 'https://github.com/Defiance-Digital/cdk-redirector.git',
  description: 'This construct creates a simple API Gateway that can redirect one URL to another.',
  devDeps: [
    'eslint',
    'jsii-rosetta@^5.0.7',
    'jsii-docgen@^8.0.14',
  ],
  githubOptions: { mergify: false },
  gitignore: ['cdk.out/', 'cdk.context.json', '.idea/'],
  keywords: ['cdk', 'api-gateway', 'redirect'],
  integrationTestAutoDiscover: false,
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  jsiiVersion: '^5.0.7',
  minNodeVersion: '20.9.0',
});
project.synth();
