# `applicationRedirectUris` Submodule <a name="`applicationRedirectUris` Submodule" id="@cdktn/provider-azuread.applicationRedirectUris"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationRedirectUris <a name="ApplicationRedirectUris" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_redirect_uris azuread_application_redirect_uris}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.Initializer"></a>

```typescript
import { applicationRedirectUris } from '@cdktn/provider-azuread'

new applicationRedirectUris.ApplicationRedirectUris(scope: Construct, id: string, config: ApplicationRedirectUrisConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig">ApplicationRedirectUrisConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig">ApplicationRedirectUrisConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.putTimeouts"></a>

```typescript
public putTimeouts(value: ApplicationRedirectUrisTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts">ApplicationRedirectUrisTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApplicationRedirectUris resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.isConstruct"></a>

```typescript
import { applicationRedirectUris } from '@cdktn/provider-azuread'

applicationRedirectUris.ApplicationRedirectUris.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.isTerraformElement"></a>

```typescript
import { applicationRedirectUris } from '@cdktn/provider-azuread'

applicationRedirectUris.ApplicationRedirectUris.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.isTerraformResource"></a>

```typescript
import { applicationRedirectUris } from '@cdktn/provider-azuread'

applicationRedirectUris.ApplicationRedirectUris.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.generateConfigForImport"></a>

```typescript
import { applicationRedirectUris } from '@cdktn/provider-azuread'

applicationRedirectUris.ApplicationRedirectUris.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApplicationRedirectUris resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationRedirectUris to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationRedirectUris that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_redirect_uris#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApplicationRedirectUris to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference">ApplicationRedirectUrisTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.redirectUrisInput">redirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts">ApplicationRedirectUrisTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.redirectUris">redirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationRedirectUrisTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference">ApplicationRedirectUrisTimeoutsOutputReference</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `redirectUrisInput`<sup>Optional</sup> <a name="redirectUrisInput" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.redirectUrisInput"></a>

```typescript
public readonly redirectUrisInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApplicationRedirectUrisTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts">ApplicationRedirectUrisTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUris.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationRedirectUrisConfig <a name="ApplicationRedirectUrisConfig" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.Initializer"></a>

```typescript
import { applicationRedirectUris } from '@cdktn/provider-azuread'

const applicationRedirectUrisConfig: applicationRedirectUris.ApplicationRedirectUrisConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.applicationId">applicationId</a></code> | <code>string</code> | The resource ID of the application to which these redirect URIs belong. |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.redirectUris">redirectUris</a></code> | <code>string[]</code> | A set of redirect URIs. |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.type">type</a></code> | <code>string</code> | The type of redirect URIs to assign to the application. |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_redirect_uris#id ApplicationRedirectUris#id}. |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts">ApplicationRedirectUrisTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The resource ID of the application to which these redirect URIs belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_redirect_uris#application_id ApplicationRedirectUris#application_id}

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* string[]

A set of redirect URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_redirect_uris#redirect_uris ApplicationRedirectUris#redirect_uris}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of redirect URIs to assign to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_redirect_uris#type ApplicationRedirectUris#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_redirect_uris#id ApplicationRedirectUris#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationRedirectUrisTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts">ApplicationRedirectUrisTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_redirect_uris#timeouts ApplicationRedirectUris#timeouts}

---

### ApplicationRedirectUrisTimeouts <a name="ApplicationRedirectUrisTimeouts" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts.Initializer"></a>

```typescript
import { applicationRedirectUris } from '@cdktn/provider-azuread'

const applicationRedirectUrisTimeouts: applicationRedirectUris.ApplicationRedirectUrisTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_redirect_uris#create ApplicationRedirectUris#create}. |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_redirect_uris#delete ApplicationRedirectUris#delete}. |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_redirect_uris#read ApplicationRedirectUris#read}. |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_redirect_uris#update ApplicationRedirectUris#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_redirect_uris#create ApplicationRedirectUris#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_redirect_uris#delete ApplicationRedirectUris#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_redirect_uris#read ApplicationRedirectUris#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_redirect_uris#update ApplicationRedirectUris#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationRedirectUrisTimeoutsOutputReference <a name="ApplicationRedirectUrisTimeoutsOutputReference" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.Initializer"></a>

```typescript
import { applicationRedirectUris } from '@cdktn/provider-azuread'

new applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts">ApplicationRedirectUrisTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationRedirectUrisTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azuread.applicationRedirectUris.ApplicationRedirectUrisTimeouts">ApplicationRedirectUrisTimeouts</a>

---



