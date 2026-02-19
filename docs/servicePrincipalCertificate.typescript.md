# `servicePrincipalCertificate` Submodule <a name="`servicePrincipalCertificate` Submodule" id="@cdktn/provider-azuread.servicePrincipalCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipalCertificate <a name="ServicePrincipalCertificate" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal_certificate azuread_service_principal_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.Initializer"></a>

```typescript
import { servicePrincipalCertificate } from '@cdktn/provider-azuread'

new servicePrincipalCertificate.ServicePrincipalCertificate(scope: Construct, id: string, config: ServicePrincipalCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig">ServicePrincipalCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig">ServicePrincipalCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetEndDate">resetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetEndDateRelative">resetEndDateRelative</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetKeyId">resetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetStartDate">resetStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.putTimeouts"></a>

```typescript
public putTimeouts(value: ServicePrincipalCertificateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts">ServicePrincipalCertificateTimeouts</a>

---

##### `resetEncoding` <a name="resetEncoding" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetEncoding"></a>

```typescript
public resetEncoding(): void
```

##### `resetEndDate` <a name="resetEndDate" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetEndDate"></a>

```typescript
public resetEndDate(): void
```

##### `resetEndDateRelative` <a name="resetEndDateRelative" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetEndDateRelative"></a>

```typescript
public resetEndDateRelative(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyId` <a name="resetKeyId" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetKeyId"></a>

```typescript
public resetKeyId(): void
```

##### `resetStartDate` <a name="resetStartDate" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetStartDate"></a>

```typescript
public resetStartDate(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServicePrincipalCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isConstruct"></a>

```typescript
import { servicePrincipalCertificate } from '@cdktn/provider-azuread'

servicePrincipalCertificate.ServicePrincipalCertificate.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isTerraformElement"></a>

```typescript
import { servicePrincipalCertificate } from '@cdktn/provider-azuread'

servicePrincipalCertificate.ServicePrincipalCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isTerraformResource"></a>

```typescript
import { servicePrincipalCertificate } from '@cdktn/provider-azuread'

servicePrincipalCertificate.ServicePrincipalCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.generateConfigForImport"></a>

```typescript
import { servicePrincipalCertificate } from '@cdktn/provider-azuread'

servicePrincipalCertificate.ServicePrincipalCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ServicePrincipalCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicePrincipalCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicePrincipalCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServicePrincipalCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference">ServicePrincipalCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.endDateInput">endDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.endDateRelativeInput">endDateRelativeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.servicePrincipalIdInput">servicePrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.startDateInput">startDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts">ServicePrincipalCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.endDate">endDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.endDateRelative">endDateRelative</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.servicePrincipalId">servicePrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.timeouts"></a>

```typescript
public readonly timeouts: ServicePrincipalCertificateTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference">ServicePrincipalCertificateTimeoutsOutputReference</a>

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.endDateInput"></a>

```typescript
public readonly endDateInput: string;
```

- *Type:* string

---

##### `endDateRelativeInput`<sup>Optional</sup> <a name="endDateRelativeInput" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.endDateRelativeInput"></a>

```typescript
public readonly endDateRelativeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `servicePrincipalIdInput`<sup>Optional</sup> <a name="servicePrincipalIdInput" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.servicePrincipalIdInput"></a>

```typescript
public readonly servicePrincipalIdInput: string;
```

- *Type:* string

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.startDateInput"></a>

```typescript
public readonly startDateInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ServicePrincipalCertificateTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts">ServicePrincipalCertificateTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

---

##### `endDateRelative`<sup>Required</sup> <a name="endDateRelative" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.endDateRelative"></a>

```typescript
public readonly endDateRelative: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* string

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalCertificateConfig <a name="ServicePrincipalCertificateConfig" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.Initializer"></a>

```typescript
import { servicePrincipalCertificate } from '@cdktn/provider-azuread'

const servicePrincipalCertificateConfig: servicePrincipalCertificate.ServicePrincipalCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.servicePrincipalId">servicePrincipalId</a></code> | <code>string</code> | The object ID of the service principal for which this certificate should be created. |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.value">value</a></code> | <code>string</code> | The certificate data, which can be PEM encoded, base64 encoded DER or hexadecimal encoded DER. |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.encoding">encoding</a></code> | <code>string</code> | Specifies the encoding used for the supplied certificate data. |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.endDate">endDate</a></code> | <code>string</code> | The end date until which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.endDateRelative">endDateRelative</a></code> | <code>string</code> | A relative duration for which the certificate is valid until, for example `240h` (10 days) or `2400h30m`. |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal_certificate#id ServicePrincipalCertificate#id}. |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.keyId">keyId</a></code> | <code>string</code> | A UUID used to uniquely identify this certificate. If not specified a UUID will be automatically generated. |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.startDate">startDate</a></code> | <code>string</code> | The start date from which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If this isn't specified, the current date is used. |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts">ServicePrincipalCertificateTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.type">type</a></code> | <code>string</code> | The type of key/certificate. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* string

The object ID of the service principal for which this certificate should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal_certificate#service_principal_id ServicePrincipalCertificate#service_principal_id}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The certificate data, which can be PEM encoded, base64 encoded DER or hexadecimal encoded DER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal_certificate#value ServicePrincipalCertificate#value}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

Specifies the encoding used for the supplied certificate data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal_certificate#encoding ServicePrincipalCertificate#encoding}

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

The end date until which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal_certificate#end_date ServicePrincipalCertificate#end_date}

---

##### `endDateRelative`<sup>Optional</sup> <a name="endDateRelative" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.endDateRelative"></a>

```typescript
public readonly endDateRelative: string;
```

- *Type:* string

A relative duration for which the certificate is valid until, for example `240h` (10 days) or `2400h30m`.

Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal_certificate#end_date_relative ServicePrincipalCertificate#end_date_relative}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal_certificate#id ServicePrincipalCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

A UUID used to uniquely identify this certificate. If not specified a UUID will be automatically generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal_certificate#key_id ServicePrincipalCertificate#key_id}

---

##### `startDate`<sup>Optional</sup> <a name="startDate" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

The start date from which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If this isn't specified, the current date is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal_certificate#start_date ServicePrincipalCertificate#start_date}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServicePrincipalCertificateTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts">ServicePrincipalCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal_certificate#timeouts ServicePrincipalCertificate#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of key/certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal_certificate#type ServicePrincipalCertificate#type}

---

### ServicePrincipalCertificateTimeouts <a name="ServicePrincipalCertificateTimeouts" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts.Initializer"></a>

```typescript
import { servicePrincipalCertificate } from '@cdktn/provider-azuread'

const servicePrincipalCertificateTimeouts: servicePrincipalCertificate.ServicePrincipalCertificateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal_certificate#create ServicePrincipalCertificate#create}. |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal_certificate#delete ServicePrincipalCertificate#delete}. |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal_certificate#read ServicePrincipalCertificate#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal_certificate#create ServicePrincipalCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal_certificate#delete ServicePrincipalCertificate#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal_certificate#read ServicePrincipalCertificate#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicePrincipalCertificateTimeoutsOutputReference <a name="ServicePrincipalCertificateTimeoutsOutputReference" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.Initializer"></a>

```typescript
import { servicePrincipalCertificate } from '@cdktn/provider-azuread'

new servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts">ServicePrincipalCertificateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicePrincipalCertificateTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azuread.servicePrincipalCertificate.ServicePrincipalCertificateTimeouts">ServicePrincipalCertificateTimeouts</a>

---



