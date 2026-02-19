# `applicationFallbackPublicClient` Submodule <a name="`applicationFallbackPublicClient` Submodule" id="@cdktn/provider-azuread.applicationFallbackPublicClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationFallbackPublicClient <a name="ApplicationFallbackPublicClient" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_fallback_public_client azuread_application_fallback_public_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.Initializer"></a>

```typescript
import { applicationFallbackPublicClient } from '@cdktn/provider-azuread'

new applicationFallbackPublicClient.ApplicationFallbackPublicClient(scope: Construct, id: string, config: ApplicationFallbackPublicClientConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig">ApplicationFallbackPublicClientConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig">ApplicationFallbackPublicClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.putTimeouts"></a>

```typescript
public putTimeouts(value: ApplicationFallbackPublicClientTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeouts">ApplicationFallbackPublicClientTimeouts</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApplicationFallbackPublicClient resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.isConstruct"></a>

```typescript
import { applicationFallbackPublicClient } from '@cdktn/provider-azuread'

applicationFallbackPublicClient.ApplicationFallbackPublicClient.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.isTerraformElement"></a>

```typescript
import { applicationFallbackPublicClient } from '@cdktn/provider-azuread'

applicationFallbackPublicClient.ApplicationFallbackPublicClient.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.isTerraformResource"></a>

```typescript
import { applicationFallbackPublicClient } from '@cdktn/provider-azuread'

applicationFallbackPublicClient.ApplicationFallbackPublicClient.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.generateConfigForImport"></a>

```typescript
import { applicationFallbackPublicClient } from '@cdktn/provider-azuread'

applicationFallbackPublicClient.ApplicationFallbackPublicClient.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApplicationFallbackPublicClient resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationFallbackPublicClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationFallbackPublicClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_fallback_public_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApplicationFallbackPublicClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference">ApplicationFallbackPublicClientTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeouts">ApplicationFallbackPublicClientTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationFallbackPublicClientTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference">ApplicationFallbackPublicClientTimeoutsOutputReference</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApplicationFallbackPublicClientTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeouts">ApplicationFallbackPublicClientTimeouts</a>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClient.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationFallbackPublicClientConfig <a name="ApplicationFallbackPublicClientConfig" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig.Initializer"></a>

```typescript
import { applicationFallbackPublicClient } from '@cdktn/provider-azuread'

const applicationFallbackPublicClientConfig: applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig.property.applicationId">applicationId</a></code> | <code>string</code> | The resource ID of the application to which the fallback public client setting should be applied. |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies explicitly whether the application is a public client. |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_fallback_public_client#id ApplicationFallbackPublicClient#id}. |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeouts">ApplicationFallbackPublicClientTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The resource ID of the application to which the fallback public client setting should be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_fallback_public_client#application_id ApplicationFallbackPublicClient#application_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies explicitly whether the application is a public client.

Appropriate for apps using token grant flows that don't use a redirect URI

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_fallback_public_client#enabled ApplicationFallbackPublicClient#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_fallback_public_client#id ApplicationFallbackPublicClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationFallbackPublicClientTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeouts">ApplicationFallbackPublicClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_fallback_public_client#timeouts ApplicationFallbackPublicClient#timeouts}

---

### ApplicationFallbackPublicClientTimeouts <a name="ApplicationFallbackPublicClientTimeouts" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeouts.Initializer"></a>

```typescript
import { applicationFallbackPublicClient } from '@cdktn/provider-azuread'

const applicationFallbackPublicClientTimeouts: applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_fallback_public_client#create ApplicationFallbackPublicClient#create}. |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_fallback_public_client#delete ApplicationFallbackPublicClient#delete}. |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_fallback_public_client#read ApplicationFallbackPublicClient#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_fallback_public_client#create ApplicationFallbackPublicClient#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_fallback_public_client#delete ApplicationFallbackPublicClient#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_fallback_public_client#read ApplicationFallbackPublicClient#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationFallbackPublicClientTimeoutsOutputReference <a name="ApplicationFallbackPublicClientTimeoutsOutputReference" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.Initializer"></a>

```typescript
import { applicationFallbackPublicClient } from '@cdktn/provider-azuread'

new applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeouts">ApplicationFallbackPublicClientTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationFallbackPublicClientTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azuread.applicationFallbackPublicClient.ApplicationFallbackPublicClientTimeouts">ApplicationFallbackPublicClientTimeouts</a>

---



