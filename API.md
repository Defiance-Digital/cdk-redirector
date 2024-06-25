# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Redirector <a name="Redirector" id="@defiance-digital/cdk-redirector.Redirector"></a>

Creates an API Gateway endpoint that redirects to a given URL.

#### Initializers <a name="Initializers" id="@defiance-digital/cdk-redirector.Redirector.Initializer"></a>

```typescript
import { Redirector } from '@defiance-digital/cdk-redirector'

new Redirector(scope: Construct, id: string, props: RedirectorProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@defiance-digital/cdk-redirector.Redirector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@defiance-digital/cdk-redirector.Redirector.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@defiance-digital/cdk-redirector.Redirector.Initializer.parameter.props">props</a></code> | <code><a href="#@defiance-digital/cdk-redirector.RedirectorProps">RedirectorProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@defiance-digital/cdk-redirector.Redirector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@defiance-digital/cdk-redirector.Redirector.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@defiance-digital/cdk-redirector.Redirector.Initializer.parameter.props"></a>

- *Type:* <a href="#@defiance-digital/cdk-redirector.RedirectorProps">RedirectorProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@defiance-digital/cdk-redirector.Redirector.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@defiance-digital/cdk-redirector.Redirector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@defiance-digital/cdk-redirector.Redirector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@defiance-digital/cdk-redirector.Redirector.isConstruct"></a>

```typescript
import { Redirector } from '@defiance-digital/cdk-redirector'

Redirector.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@defiance-digital/cdk-redirector.Redirector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@defiance-digital/cdk-redirector.Redirector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@defiance-digital/cdk-redirector.Redirector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### RedirectorProps <a name="RedirectorProps" id="@defiance-digital/cdk-redirector.RedirectorProps"></a>

#### Initializer <a name="Initializer" id="@defiance-digital/cdk-redirector.RedirectorProps.Initializer"></a>

```typescript
import { RedirectorProps } from '@defiance-digital/cdk-redirector'

const redirectorProps: RedirectorProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@defiance-digital/cdk-redirector.RedirectorProps.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | A certificate to associate with the API Gateway Endpoint. |
| <code><a href="#@defiance-digital/cdk-redirector.RedirectorProps.property.domainName">domainName</a></code> | <code>string</code> | The domain name to associate with the API Gateway Endpoint. |
| <code><a href="#@defiance-digital/cdk-redirector.RedirectorProps.property.redirectUrl">redirectUrl</a></code> | <code>string</code> | The URL to redirect to. |
| <code><a href="#@defiance-digital/cdk-redirector.RedirectorProps.property.redirectType">redirectType</a></code> | <code><a href="#@defiance-digital/cdk-redirector.RedirectType">RedirectType</a></code> | The type of redirect to perform. |
| <code><a href="#@defiance-digital/cdk-redirector.RedirectorProps.property.restApiName">restApiName</a></code> | <code>string</code> | The name of the API Gateway Endpoint. |

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@defiance-digital/cdk-redirector.RedirectorProps.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate

A certificate to associate with the API Gateway Endpoint.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@defiance-digital/cdk-redirector.RedirectorProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The domain name to associate with the API Gateway Endpoint.

This domain needs to be covered by the given certificate.

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="@defiance-digital/cdk-redirector.RedirectorProps.property.redirectUrl"></a>

```typescript
public readonly redirectUrl: string;
```

- *Type:* string

The URL to redirect to.

---

##### `redirectType`<sup>Optional</sup> <a name="redirectType" id="@defiance-digital/cdk-redirector.RedirectorProps.property.redirectType"></a>

```typescript
public readonly redirectType: RedirectType;
```

- *Type:* <a href="#@defiance-digital/cdk-redirector.RedirectType">RedirectType</a>
- *Default:* REDIRECT_TYPE.TEMPORARY

The type of redirect to perform.

Either a permanent (301) or temporary (302) redirect.

---

##### `restApiName`<sup>Optional</sup> <a name="restApiName" id="@defiance-digital/cdk-redirector.RedirectorProps.property.restApiName"></a>

```typescript
public readonly restApiName: string;
```

- *Type:* string

The name of the API Gateway Endpoint.

If not given, then 'Redirecter' is used.

---



## Enums <a name="Enums" id="Enums"></a>

### RedirectType <a name="RedirectType" id="@defiance-digital/cdk-redirector.RedirectType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@defiance-digital/cdk-redirector.RedirectType.TEMPORARY">TEMPORARY</a></code> | *No description.* |
| <code><a href="#@defiance-digital/cdk-redirector.RedirectType.PERMANENT">PERMANENT</a></code> | *No description.* |

---

##### `TEMPORARY` <a name="TEMPORARY" id="@defiance-digital/cdk-redirector.RedirectType.TEMPORARY"></a>

---


##### `PERMANENT` <a name="PERMANENT" id="@defiance-digital/cdk-redirector.RedirectType.PERMANENT"></a>

---

