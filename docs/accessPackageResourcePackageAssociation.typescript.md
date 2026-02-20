# `accessPackageResourcePackageAssociation` Submodule <a name="`accessPackageResourcePackageAssociation` Submodule" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessPackageResourcePackageAssociation <a name="AccessPackageResourcePackageAssociation" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/access_package_resource_package_association azuread_access_package_resource_package_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer"></a>

```typescript
import { accessPackageResourcePackageAssociation } from '@cdktn/provider-azuread'

new accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation(scope: Construct, id: string, config: AccessPackageResourcePackageAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig">AccessPackageResourcePackageAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig">AccessPackageResourcePackageAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.resetAccessType">resetAccessType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: AccessPackageResourcePackageAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts">AccessPackageResourcePackageAssociationTimeouts</a>

---

##### `resetAccessType` <a name="resetAccessType" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.resetAccessType"></a>

```typescript
public resetAccessType(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AccessPackageResourcePackageAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isConstruct"></a>

```typescript
import { accessPackageResourcePackageAssociation } from '@cdktn/provider-azuread'

accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isTerraformElement"></a>

```typescript
import { accessPackageResourcePackageAssociation } from '@cdktn/provider-azuread'

accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isTerraformResource"></a>

```typescript
import { accessPackageResourcePackageAssociation } from '@cdktn/provider-azuread'

accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.generateConfigForImport"></a>

```typescript
import { accessPackageResourcePackageAssociation } from '@cdktn/provider-azuread'

accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AccessPackageResourcePackageAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccessPackageResourcePackageAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccessPackageResourcePackageAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/access_package_resource_package_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AccessPackageResourcePackageAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference">AccessPackageResourcePackageAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.accessPackageIdInput">accessPackageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.accessTypeInput">accessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.catalogResourceAssociationIdInput">catalogResourceAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts">AccessPackageResourcePackageAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.accessPackageId">accessPackageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.accessType">accessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.catalogResourceAssociationId">catalogResourceAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: AccessPackageResourcePackageAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference">AccessPackageResourcePackageAssociationTimeoutsOutputReference</a>

---

##### `accessPackageIdInput`<sup>Optional</sup> <a name="accessPackageIdInput" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.accessPackageIdInput"></a>

```typescript
public readonly accessPackageIdInput: string;
```

- *Type:* string

---

##### `accessTypeInput`<sup>Optional</sup> <a name="accessTypeInput" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.accessTypeInput"></a>

```typescript
public readonly accessTypeInput: string;
```

- *Type:* string

---

##### `catalogResourceAssociationIdInput`<sup>Optional</sup> <a name="catalogResourceAssociationIdInput" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.catalogResourceAssociationIdInput"></a>

```typescript
public readonly catalogResourceAssociationIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AccessPackageResourcePackageAssociationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts">AccessPackageResourcePackageAssociationTimeouts</a>

---

##### `accessPackageId`<sup>Required</sup> <a name="accessPackageId" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.accessPackageId"></a>

```typescript
public readonly accessPackageId: string;
```

- *Type:* string

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

---

##### `catalogResourceAssociationId`<sup>Required</sup> <a name="catalogResourceAssociationId" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.catalogResourceAssociationId"></a>

```typescript
public readonly catalogResourceAssociationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessPackageResourcePackageAssociationConfig <a name="AccessPackageResourcePackageAssociationConfig" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.Initializer"></a>

```typescript
import { accessPackageResourcePackageAssociation } from '@cdktn/provider-azuread'

const accessPackageResourcePackageAssociationConfig: accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.accessPackageId">accessPackageId</a></code> | <code>string</code> | The ID of access package this resource association is configured to. |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.catalogResourceAssociationId">catalogResourceAssociationId</a></code> | <code>string</code> | The ID of the access package catalog association. |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.accessType">accessType</a></code> | <code>string</code> | The role of access type to the specified resource, valid values are `Member` and `Owner`. |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/access_package_resource_package_association#id AccessPackageResourcePackageAssociation#id}. |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts">AccessPackageResourcePackageAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessPackageId`<sup>Required</sup> <a name="accessPackageId" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.accessPackageId"></a>

```typescript
public readonly accessPackageId: string;
```

- *Type:* string

The ID of access package this resource association is configured to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/access_package_resource_package_association#access_package_id AccessPackageResourcePackageAssociation#access_package_id}

---

##### `catalogResourceAssociationId`<sup>Required</sup> <a name="catalogResourceAssociationId" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.catalogResourceAssociationId"></a>

```typescript
public readonly catalogResourceAssociationId: string;
```

- *Type:* string

The ID of the access package catalog association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/access_package_resource_package_association#catalog_resource_association_id AccessPackageResourcePackageAssociation#catalog_resource_association_id}

---

##### `accessType`<sup>Optional</sup> <a name="accessType" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

The role of access type to the specified resource, valid values are `Member` and `Owner`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/access_package_resource_package_association#access_type AccessPackageResourcePackageAssociation#access_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/access_package_resource_package_association#id AccessPackageResourcePackageAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AccessPackageResourcePackageAssociationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts">AccessPackageResourcePackageAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/access_package_resource_package_association#timeouts AccessPackageResourcePackageAssociation#timeouts}

---

### AccessPackageResourcePackageAssociationTimeouts <a name="AccessPackageResourcePackageAssociationTimeouts" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts.Initializer"></a>

```typescript
import { accessPackageResourcePackageAssociation } from '@cdktn/provider-azuread'

const accessPackageResourcePackageAssociationTimeouts: accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/access_package_resource_package_association#create AccessPackageResourcePackageAssociation#create}. |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/access_package_resource_package_association#delete AccessPackageResourcePackageAssociation#delete}. |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/access_package_resource_package_association#read AccessPackageResourcePackageAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/access_package_resource_package_association#create AccessPackageResourcePackageAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/access_package_resource_package_association#delete AccessPackageResourcePackageAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/access_package_resource_package_association#read AccessPackageResourcePackageAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessPackageResourcePackageAssociationTimeoutsOutputReference <a name="AccessPackageResourcePackageAssociationTimeoutsOutputReference" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { accessPackageResourcePackageAssociation } from '@cdktn/provider-azuread'

new accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts">AccessPackageResourcePackageAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessPackageResourcePackageAssociationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts">AccessPackageResourcePackageAssociationTimeouts</a>

---



