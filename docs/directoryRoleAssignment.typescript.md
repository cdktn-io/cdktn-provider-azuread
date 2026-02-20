# `directoryRoleAssignment` Submodule <a name="`directoryRoleAssignment` Submodule" id="@cdktn/provider-azuread.directoryRoleAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryRoleAssignment <a name="DirectoryRoleAssignment" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/directory_role_assignment azuread_directory_role_assignment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer"></a>

```typescript
import { directoryRoleAssignment } from '@cdktn/provider-azuread'

new directoryRoleAssignment.DirectoryRoleAssignment(scope: Construct, id: string, config: DirectoryRoleAssignmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig">DirectoryRoleAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig">DirectoryRoleAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetAppScopeId">resetAppScopeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetDirectoryScopeId">resetDirectoryScopeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.putTimeouts"></a>

```typescript
public putTimeouts(value: DirectoryRoleAssignmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts">DirectoryRoleAssignmentTimeouts</a>

---

##### `resetAppScopeId` <a name="resetAppScopeId" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetAppScopeId"></a>

```typescript
public resetAppScopeId(): void
```

##### `resetDirectoryScopeId` <a name="resetDirectoryScopeId" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetDirectoryScopeId"></a>

```typescript
public resetDirectoryScopeId(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DirectoryRoleAssignment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isConstruct"></a>

```typescript
import { directoryRoleAssignment } from '@cdktn/provider-azuread'

directoryRoleAssignment.DirectoryRoleAssignment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isTerraformElement"></a>

```typescript
import { directoryRoleAssignment } from '@cdktn/provider-azuread'

directoryRoleAssignment.DirectoryRoleAssignment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isTerraformResource"></a>

```typescript
import { directoryRoleAssignment } from '@cdktn/provider-azuread'

directoryRoleAssignment.DirectoryRoleAssignment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.generateConfigForImport"></a>

```typescript
import { directoryRoleAssignment } from '@cdktn/provider-azuread'

directoryRoleAssignment.DirectoryRoleAssignment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DirectoryRoleAssignment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DirectoryRoleAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DirectoryRoleAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/directory_role_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DirectoryRoleAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference">DirectoryRoleAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.appScopeIdInput">appScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.directoryScopeIdInput">directoryScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.principalObjectIdInput">principalObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.roleIdInput">roleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts">DirectoryRoleAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.appScopeId">appScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.directoryScopeId">directoryScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.principalObjectId">principalObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.roleId">roleId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.timeouts"></a>

```typescript
public readonly timeouts: DirectoryRoleAssignmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference">DirectoryRoleAssignmentTimeoutsOutputReference</a>

---

##### `appScopeIdInput`<sup>Optional</sup> <a name="appScopeIdInput" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.appScopeIdInput"></a>

```typescript
public readonly appScopeIdInput: string;
```

- *Type:* string

---

##### `directoryScopeIdInput`<sup>Optional</sup> <a name="directoryScopeIdInput" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.directoryScopeIdInput"></a>

```typescript
public readonly directoryScopeIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `principalObjectIdInput`<sup>Optional</sup> <a name="principalObjectIdInput" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.principalObjectIdInput"></a>

```typescript
public readonly principalObjectIdInput: string;
```

- *Type:* string

---

##### `roleIdInput`<sup>Optional</sup> <a name="roleIdInput" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.roleIdInput"></a>

```typescript
public readonly roleIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DirectoryRoleAssignmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts">DirectoryRoleAssignmentTimeouts</a>

---

##### `appScopeId`<sup>Required</sup> <a name="appScopeId" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.appScopeId"></a>

```typescript
public readonly appScopeId: string;
```

- *Type:* string

---

##### `directoryScopeId`<sup>Required</sup> <a name="directoryScopeId" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.directoryScopeId"></a>

```typescript
public readonly directoryScopeId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `principalObjectId`<sup>Required</sup> <a name="principalObjectId" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.principalObjectId"></a>

```typescript
public readonly principalObjectId: string;
```

- *Type:* string

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryRoleAssignmentConfig <a name="DirectoryRoleAssignmentConfig" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.Initializer"></a>

```typescript
import { directoryRoleAssignment } from '@cdktn/provider-azuread'

const directoryRoleAssignmentConfig: directoryRoleAssignment.DirectoryRoleAssignmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.principalObjectId">principalObjectId</a></code> | <code>string</code> | The object ID of the member principal. |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.roleId">roleId</a></code> | <code>string</code> | The object ID of the directory role for this assignment. |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.appScopeId">appScopeId</a></code> | <code>string</code> | Identifier of the app-specific scope when the assignment scope is app-specific. |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.directoryScopeId">directoryScopeId</a></code> | <code>string</code> | Identifier of the directory object representing the scope of the assignment. |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/directory_role_assignment#id DirectoryRoleAssignment#id}. |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts">DirectoryRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `principalObjectId`<sup>Required</sup> <a name="principalObjectId" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.principalObjectId"></a>

```typescript
public readonly principalObjectId: string;
```

- *Type:* string

The object ID of the member principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/directory_role_assignment#principal_object_id DirectoryRoleAssignment#principal_object_id}

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

The object ID of the directory role for this assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/directory_role_assignment#role_id DirectoryRoleAssignment#role_id}

---

##### `appScopeId`<sup>Optional</sup> <a name="appScopeId" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.appScopeId"></a>

```typescript
public readonly appScopeId: string;
```

- *Type:* string

Identifier of the app-specific scope when the assignment scope is app-specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/directory_role_assignment#app_scope_id DirectoryRoleAssignment#app_scope_id}

---

##### `directoryScopeId`<sup>Optional</sup> <a name="directoryScopeId" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.directoryScopeId"></a>

```typescript
public readonly directoryScopeId: string;
```

- *Type:* string

Identifier of the directory object representing the scope of the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/directory_role_assignment#directory_scope_id DirectoryRoleAssignment#directory_scope_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/directory_role_assignment#id DirectoryRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DirectoryRoleAssignmentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts">DirectoryRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/directory_role_assignment#timeouts DirectoryRoleAssignment#timeouts}

---

### DirectoryRoleAssignmentTimeouts <a name="DirectoryRoleAssignmentTimeouts" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts.Initializer"></a>

```typescript
import { directoryRoleAssignment } from '@cdktn/provider-azuread'

const directoryRoleAssignmentTimeouts: directoryRoleAssignment.DirectoryRoleAssignmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/directory_role_assignment#create DirectoryRoleAssignment#create}. |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/directory_role_assignment#delete DirectoryRoleAssignment#delete}. |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/directory_role_assignment#read DirectoryRoleAssignment#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/directory_role_assignment#create DirectoryRoleAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/directory_role_assignment#delete DirectoryRoleAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/directory_role_assignment#read DirectoryRoleAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryRoleAssignmentTimeoutsOutputReference <a name="DirectoryRoleAssignmentTimeoutsOutputReference" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { directoryRoleAssignment } from '@cdktn/provider-azuread'

new directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts">DirectoryRoleAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DirectoryRoleAssignmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts">DirectoryRoleAssignmentTimeouts</a>

---



