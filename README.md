# Redirector

Do you sometimes need to redirect one url to another? Maybe DNS isn't enough for you and you need a proper HTTP 301/302
redirect. This construct creates a simple API Gateway that can redirect one URL to another.

## Usage

```typescript

import { Redirector } from '@defiance-digital/cdk-redirector';

const app = new App();
const stack = new Stack(app, 'Stack');
new Redirector(stack, 'Redirector', {
  certificate: new Certificate(stack, 'Certificate', {
    domainName: 'someolddomain.com',
  }),
  domainName: 'someolddomain.com',
  redirectUrl: 'https://somenewdomain.com/whatever',
});

app.synth();
```


