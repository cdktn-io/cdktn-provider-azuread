# `dataAzureadGroups` Submodule <a name="`dataAzureadGroups` Submodule" id="@cdktn/provider-azuread.dataAzureadGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadGroups <a name="DataAzureadGroups" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/data-sources/groups azuread_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer"></a>

```typescript
import { dataAzureadGroups } from '@cdktn/provider-azuread'

new dataAzureadGroups.DataAzureadGroups(scope: Construct, id: string, config?: DataAzureadGroupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig">DataAzureadGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig">DataAzureadGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetDisplayNamePrefix">resetDisplayNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetDisplayNames">resetDisplayNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetIgnoreMissing">resetIgnoreMissing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetMailEnabled">resetMailEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetObjectIds">resetObjectIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetReturnAll">resetReturnAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetSecurityEnabled">resetSecurityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzureadGroupsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a>

---

##### `resetDisplayNamePrefix` <a name="resetDisplayNamePrefix" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetDisplayNamePrefix"></a>

```typescript
public resetDisplayNamePrefix(): void
```

##### `resetDisplayNames` <a name="resetDisplayNames" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetDisplayNames"></a>

```typescript
public resetDisplayNames(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreMissing` <a name="resetIgnoreMissing" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetIgnoreMissing"></a>

```typescript
public resetIgnoreMissing(): void
```

##### `resetMailEnabled` <a name="resetMailEnabled" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetMailEnabled"></a>

```typescript
public resetMailEnabled(): void
```

##### `resetObjectIds` <a name="resetObjectIds" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetObjectIds"></a>

```typescript
public resetObjectIds(): void
```

##### `resetReturnAll` <a name="resetReturnAll" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetReturnAll"></a>

```typescript
public resetReturnAll(): void
```

##### `resetSecurityEnabled` <a name="resetSecurityEnabled" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetSecurityEnabled"></a>

```typescript
public resetSecurityEnabled(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzureadGroups resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.isConstruct"></a>

```typescript
import { dataAzureadGroups } from '@cdktn/provider-azuread'

dataAzureadGroups.DataAzureadGroups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.isTerraformElement"></a>

```typescript
import { dataAzureadGroups } from '@cdktn/provider-azuread'

dataAzureadGroups.DataAzureadGroups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.isTerraformDataSource"></a>

```typescript
import { dataAzureadGroups } from '@cdktn/provider-azuread'

dataAzureadGroups.DataAzureadGroups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.generateConfigForImport"></a>

```typescript
import { dataAzureadGroups } from '@cdktn/provider-azuread'

dataAzureadGroups.DataAzureadGroups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzureadGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzureadGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzureadGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/data-sources/groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzureadGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference">DataAzureadGroupsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNamePrefixInput">displayNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNamesInput">displayNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.ignoreMissingInput">ignoreMissingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.mailEnabledInput">mailEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.objectIdsInput">objectIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.returnAllInput">returnAllInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.securityEnabledInput">securityEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNamePrefix">displayNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNames">displayNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.ignoreMissing">ignoreMissing</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.mailEnabled">mailEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.objectIds">objectIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.returnAll">returnAll</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.securityEnabled">securityEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadGroupsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference">DataAzureadGroupsTimeoutsOutputReference</a>

---

##### `displayNamePrefixInput`<sup>Optional</sup> <a name="displayNamePrefixInput" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNamePrefixInput"></a>

```typescript
public readonly displayNamePrefixInput: string;
```

- *Type:* string

---

##### `displayNamesInput`<sup>Optional</sup> <a name="displayNamesInput" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNamesInput"></a>

```typescript
public readonly displayNamesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreMissingInput`<sup>Optional</sup> <a name="ignoreMissingInput" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.ignoreMissingInput"></a>

```typescript
public readonly ignoreMissingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `mailEnabledInput`<sup>Optional</sup> <a name="mailEnabledInput" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.mailEnabledInput"></a>

```typescript
public readonly mailEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `objectIdsInput`<sup>Optional</sup> <a name="objectIdsInput" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.objectIdsInput"></a>

```typescript
public readonly objectIdsInput: string[];
```

- *Type:* string[]

---

##### `returnAllInput`<sup>Optional</sup> <a name="returnAllInput" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.returnAllInput"></a>

```typescript
public readonly returnAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `securityEnabledInput`<sup>Optional</sup> <a name="securityEnabledInput" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.securityEnabledInput"></a>

```typescript
public readonly securityEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzureadGroupsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a>

---

##### `displayNamePrefix`<sup>Required</sup> <a name="displayNamePrefix" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNamePrefix"></a>

```typescript
public readonly displayNamePrefix: string;
```

- *Type:* string

---

##### `displayNames`<sup>Required</sup> <a name="displayNames" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNames"></a>

```typescript
public readonly displayNames: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreMissing`<sup>Required</sup> <a name="ignoreMissing" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.ignoreMissing"></a>

```typescript
public readonly ignoreMissing: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `mailEnabled`<sup>Required</sup> <a name="mailEnabled" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.mailEnabled"></a>

```typescript
public readonly mailEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `objectIds`<sup>Required</sup> <a name="objectIds" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.objectIds"></a>

```typescript
public readonly objectIds: string[];
```

- *Type:* string[]

---

##### `returnAll`<sup>Required</sup> <a name="returnAll" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.returnAll"></a>

```typescript
public readonly returnAll: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `securityEnabled`<sup>Required</sup> <a name="securityEnabled" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.securityEnabled"></a>

```typescript
public readonly securityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadGroupsConfig <a name="DataAzureadGroupsConfig" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.Initializer"></a>

```typescript
import { dataAzureadGroups } from '@cdktn/provider-azuread'

const dataAzureadGroupsConfig: dataAzureadGroups.DataAzureadGroupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.displayNamePrefix">displayNamePrefix</a></code> | <code>string</code> | Common display name prefix of the groups. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.displayNames">displayNames</a></code> | <code>string[]</code> | The display names of the groups. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/data-sources/groups#id DataAzureadGroups#id}. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.ignoreMissing">ignoreMissing</a></code> | <code>boolean \| cdktn.IResolvable</code> | Ignore missing groups and return groups that were found. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.mailEnabled">mailEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the groups are mail-enabled. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.objectIds">objectIds</a></code> | <code>string[]</code> | The object IDs of the groups. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.returnAll">returnAll</a></code> | <code>boolean \| cdktn.IResolvable</code> | Retrieve all groups with no filter. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.securityEnabled">securityEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the groups are security-enabled. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayNamePrefix`<sup>Optional</sup> <a name="displayNamePrefix" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.displayNamePrefix"></a>

```typescript
public readonly displayNamePrefix: string;
```

- *Type:* string

Common display name prefix of the groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/data-sources/groups#display_name_prefix DataAzureadGroups#display_name_prefix}

---

##### `displayNames`<sup>Optional</sup> <a name="displayNames" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.displayNames"></a>

```typescript
public readonly displayNames: string[];
```

- *Type:* string[]

The display names of the groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/data-sources/groups#display_names DataAzureadGroups#display_names}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/data-sources/groups#id DataAzureadGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreMissing`<sup>Optional</sup> <a name="ignoreMissing" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.ignoreMissing"></a>

```typescript
public readonly ignoreMissing: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Ignore missing groups and return groups that were found.

The data source will still fail if no groups are found

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/data-sources/groups#ignore_missing DataAzureadGroups#ignore_missing}

---

##### `mailEnabled`<sup>Optional</sup> <a name="mailEnabled" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.mailEnabled"></a>

```typescript
public readonly mailEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the groups are mail-enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/data-sources/groups#mail_enabled DataAzureadGroups#mail_enabled}

---

##### `objectIds`<sup>Optional</sup> <a name="objectIds" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.objectIds"></a>

```typescript
public readonly objectIds: string[];
```

- *Type:* string[]

The object IDs of the groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/data-sources/groups#object_ids DataAzureadGroups#object_ids}

---

##### `returnAll`<sup>Optional</sup> <a name="returnAll" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.returnAll"></a>

```typescript
public readonly returnAll: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Retrieve all groups with no filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/data-sources/groups#return_all DataAzureadGroups#return_all}

---

##### `securityEnabled`<sup>Optional</sup> <a name="securityEnabled" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.securityEnabled"></a>

```typescript
public readonly securityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the groups are security-enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/data-sources/groups#security_enabled DataAzureadGroups#security_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadGroupsTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/data-sources/groups#timeouts DataAzureadGroups#timeouts}

---

### DataAzureadGroupsTimeouts <a name="DataAzureadGroupsTimeouts" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts.Initializer"></a>

```typescript
import { dataAzureadGroups } from '@cdktn/provider-azuread'

const dataAzureadGroupsTimeouts: dataAzureadGroups.DataAzureadGroupsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/data-sources/groups#read DataAzureadGroups#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/data-sources/groups#read DataAzureadGroups#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadGroupsTimeoutsOutputReference <a name="DataAzureadGroupsTimeoutsOutputReference" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzureadGroups } from '@cdktn/provider-azuread'

new dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzureadGroupsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a>

---



