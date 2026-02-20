# `dataAzureadUser` Submodule <a name="`dataAzureadUser` Submodule" id="@cdktn/provider-azuread.dataAzureadUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadUser <a name="DataAzureadUser" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/user azuread_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer"></a>

```typescript
import { dataAzureadUser } from '@cdktn/provider-azuread'

new dataAzureadUser.DataAzureadUser(scope: Construct, id: string, config?: DataAzureadUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig">DataAzureadUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig">DataAzureadUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.resetEmployeeId">resetEmployeeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.resetMail">resetMail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.resetMailNickname">resetMailNickname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.resetObjectId">resetObjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.resetUserPrincipalName">resetUserPrincipalName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzureadUserTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts">DataAzureadUserTimeouts</a>

---

##### `resetEmployeeId` <a name="resetEmployeeId" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.resetEmployeeId"></a>

```typescript
public resetEmployeeId(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMail` <a name="resetMail" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.resetMail"></a>

```typescript
public resetMail(): void
```

##### `resetMailNickname` <a name="resetMailNickname" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.resetMailNickname"></a>

```typescript
public resetMailNickname(): void
```

##### `resetObjectId` <a name="resetObjectId" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.resetObjectId"></a>

```typescript
public resetObjectId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserPrincipalName` <a name="resetUserPrincipalName" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.resetUserPrincipalName"></a>

```typescript
public resetUserPrincipalName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzureadUser resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.isConstruct"></a>

```typescript
import { dataAzureadUser } from '@cdktn/provider-azuread'

dataAzureadUser.DataAzureadUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.isTerraformElement"></a>

```typescript
import { dataAzureadUser } from '@cdktn/provider-azuread'

dataAzureadUser.DataAzureadUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.isTerraformDataSource"></a>

```typescript
import { dataAzureadUser } from '@cdktn/provider-azuread'

dataAzureadUser.DataAzureadUser.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.generateConfigForImport"></a>

```typescript
import { dataAzureadUser } from '@cdktn/provider-azuread'

dataAzureadUser.DataAzureadUser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzureadUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzureadUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzureadUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzureadUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.accountEnabled">accountEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.ageGroup">ageGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.businessPhones">businessPhones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.companyName">companyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.consentProvidedForMinor">consentProvidedForMinor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.costCenter">costCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.creationType">creationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.department">department</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.division">division</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.employeeHireDate">employeeHireDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.employeeType">employeeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.externalUserState">externalUserState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.faxNumber">faxNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.givenName">givenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.imAddresses">imAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.jobTitle">jobTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.managerId">managerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.mobilePhone">mobilePhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.officeLocation">officeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesDistinguishedName">onpremisesDistinguishedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesDomainName">onpremisesDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesImmutableId">onpremisesImmutableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesSamAccountName">onpremisesSamAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesSecurityIdentifier">onpremisesSecurityIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesSyncEnabled">onpremisesSyncEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesUserPrincipalName">onpremisesUserPrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.otherMails">otherMails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.preferredLanguage">preferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.proxyAddresses">proxyAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.showInAddressList">showInAddressList</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.streetAddress">streetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.surname">surname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference">DataAzureadUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.usageLocation">usageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.userType">userType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.employeeIdInput">employeeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.mailInput">mailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.mailNicknameInput">mailNicknameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts">DataAzureadUserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.userPrincipalNameInput">userPrincipalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.employeeId">employeeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.mail">mail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.mailNickname">mailNickname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.userPrincipalName">userPrincipalName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accountEnabled`<sup>Required</sup> <a name="accountEnabled" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.accountEnabled"></a>

```typescript
public readonly accountEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `ageGroup`<sup>Required</sup> <a name="ageGroup" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.ageGroup"></a>

```typescript
public readonly ageGroup: string;
```

- *Type:* string

---

##### `businessPhones`<sup>Required</sup> <a name="businessPhones" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.businessPhones"></a>

```typescript
public readonly businessPhones: string[];
```

- *Type:* string[]

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* string

---

##### `consentProvidedForMinor`<sup>Required</sup> <a name="consentProvidedForMinor" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.consentProvidedForMinor"></a>

```typescript
public readonly consentProvidedForMinor: string;
```

- *Type:* string

---

##### `costCenter`<sup>Required</sup> <a name="costCenter" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.costCenter"></a>

```typescript
public readonly costCenter: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `creationType`<sup>Required</sup> <a name="creationType" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.creationType"></a>

```typescript
public readonly creationType: string;
```

- *Type:* string

---

##### `department`<sup>Required</sup> <a name="department" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.department"></a>

```typescript
public readonly department: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `division`<sup>Required</sup> <a name="division" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.division"></a>

```typescript
public readonly division: string;
```

- *Type:* string

---

##### `employeeHireDate`<sup>Required</sup> <a name="employeeHireDate" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.employeeHireDate"></a>

```typescript
public readonly employeeHireDate: string;
```

- *Type:* string

---

##### `employeeType`<sup>Required</sup> <a name="employeeType" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.employeeType"></a>

```typescript
public readonly employeeType: string;
```

- *Type:* string

---

##### `externalUserState`<sup>Required</sup> <a name="externalUserState" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.externalUserState"></a>

```typescript
public readonly externalUserState: string;
```

- *Type:* string

---

##### `faxNumber`<sup>Required</sup> <a name="faxNumber" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.faxNumber"></a>

```typescript
public readonly faxNumber: string;
```

- *Type:* string

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

---

##### `imAddresses`<sup>Required</sup> <a name="imAddresses" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.imAddresses"></a>

```typescript
public readonly imAddresses: string[];
```

- *Type:* string[]

---

##### `jobTitle`<sup>Required</sup> <a name="jobTitle" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.jobTitle"></a>

```typescript
public readonly jobTitle: string;
```

- *Type:* string

---

##### `managerId`<sup>Required</sup> <a name="managerId" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.managerId"></a>

```typescript
public readonly managerId: string;
```

- *Type:* string

---

##### `mobilePhone`<sup>Required</sup> <a name="mobilePhone" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.mobilePhone"></a>

```typescript
public readonly mobilePhone: string;
```

- *Type:* string

---

##### `officeLocation`<sup>Required</sup> <a name="officeLocation" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.officeLocation"></a>

```typescript
public readonly officeLocation: string;
```

- *Type:* string

---

##### `onpremisesDistinguishedName`<sup>Required</sup> <a name="onpremisesDistinguishedName" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesDistinguishedName"></a>

```typescript
public readonly onpremisesDistinguishedName: string;
```

- *Type:* string

---

##### `onpremisesDomainName`<sup>Required</sup> <a name="onpremisesDomainName" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesDomainName"></a>

```typescript
public readonly onpremisesDomainName: string;
```

- *Type:* string

---

##### `onpremisesImmutableId`<sup>Required</sup> <a name="onpremisesImmutableId" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesImmutableId"></a>

```typescript
public readonly onpremisesImmutableId: string;
```

- *Type:* string

---

##### `onpremisesSamAccountName`<sup>Required</sup> <a name="onpremisesSamAccountName" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesSamAccountName"></a>

```typescript
public readonly onpremisesSamAccountName: string;
```

- *Type:* string

---

##### `onpremisesSecurityIdentifier`<sup>Required</sup> <a name="onpremisesSecurityIdentifier" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesSecurityIdentifier"></a>

```typescript
public readonly onpremisesSecurityIdentifier: string;
```

- *Type:* string

---

##### `onpremisesSyncEnabled`<sup>Required</sup> <a name="onpremisesSyncEnabled" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesSyncEnabled"></a>

```typescript
public readonly onpremisesSyncEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `onpremisesUserPrincipalName`<sup>Required</sup> <a name="onpremisesUserPrincipalName" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesUserPrincipalName"></a>

```typescript
public readonly onpremisesUserPrincipalName: string;
```

- *Type:* string

---

##### `otherMails`<sup>Required</sup> <a name="otherMails" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.otherMails"></a>

```typescript
public readonly otherMails: string[];
```

- *Type:* string[]

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* string

---

##### `proxyAddresses`<sup>Required</sup> <a name="proxyAddresses" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.proxyAddresses"></a>

```typescript
public readonly proxyAddresses: string[];
```

- *Type:* string[]

---

##### `showInAddressList`<sup>Required</sup> <a name="showInAddressList" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.showInAddressList"></a>

```typescript
public readonly showInAddressList: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

---

##### `surname`<sup>Required</sup> <a name="surname" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.surname"></a>

```typescript
public readonly surname: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadUserTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference">DataAzureadUserTimeoutsOutputReference</a>

---

##### `usageLocation`<sup>Required</sup> <a name="usageLocation" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.usageLocation"></a>

```typescript
public readonly usageLocation: string;
```

- *Type:* string

---

##### `userType`<sup>Required</sup> <a name="userType" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

---

##### `employeeIdInput`<sup>Optional</sup> <a name="employeeIdInput" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.employeeIdInput"></a>

```typescript
public readonly employeeIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mailInput`<sup>Optional</sup> <a name="mailInput" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.mailInput"></a>

```typescript
public readonly mailInput: string;
```

- *Type:* string

---

##### `mailNicknameInput`<sup>Optional</sup> <a name="mailNicknameInput" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.mailNicknameInput"></a>

```typescript
public readonly mailNicknameInput: string;
```

- *Type:* string

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzureadUserTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts">DataAzureadUserTimeouts</a>

---

##### `userPrincipalNameInput`<sup>Optional</sup> <a name="userPrincipalNameInput" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.userPrincipalNameInput"></a>

```typescript
public readonly userPrincipalNameInput: string;
```

- *Type:* string

---

##### `employeeId`<sup>Required</sup> <a name="employeeId" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.employeeId"></a>

```typescript
public readonly employeeId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mail`<sup>Required</sup> <a name="mail" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.mail"></a>

```typescript
public readonly mail: string;
```

- *Type:* string

---

##### `mailNickname`<sup>Required</sup> <a name="mailNickname" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.mailNickname"></a>

```typescript
public readonly mailNickname: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `userPrincipalName`<sup>Required</sup> <a name="userPrincipalName" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.userPrincipalName"></a>

```typescript
public readonly userPrincipalName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadUserConfig <a name="DataAzureadUserConfig" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.Initializer"></a>

```typescript
import { dataAzureadUser } from '@cdktn/provider-azuread'

const dataAzureadUserConfig: dataAzureadUser.DataAzureadUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.employeeId">employeeId</a></code> | <code>string</code> | The employee identifier assigned to the user by the organisation. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/user#id DataAzureadUser#id}. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.mail">mail</a></code> | <code>string</code> | The SMTP address for the user. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.mailNickname">mailNickname</a></code> | <code>string</code> | The email alias of the user. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.objectId">objectId</a></code> | <code>string</code> | The object ID of the user. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts">DataAzureadUserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.userPrincipalName">userPrincipalName</a></code> | <code>string</code> | The user principal name (UPN) of the user. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `employeeId`<sup>Optional</sup> <a name="employeeId" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.employeeId"></a>

```typescript
public readonly employeeId: string;
```

- *Type:* string

The employee identifier assigned to the user by the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/user#employee_id DataAzureadUser#employee_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/user#id DataAzureadUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mail`<sup>Optional</sup> <a name="mail" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.mail"></a>

```typescript
public readonly mail: string;
```

- *Type:* string

The SMTP address for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/user#mail DataAzureadUser#mail}

---

##### `mailNickname`<sup>Optional</sup> <a name="mailNickname" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.mailNickname"></a>

```typescript
public readonly mailNickname: string;
```

- *Type:* string

The email alias of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/user#mail_nickname DataAzureadUser#mail_nickname}

---

##### `objectId`<sup>Optional</sup> <a name="objectId" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

The object ID of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/user#object_id DataAzureadUser#object_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadUserTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts">DataAzureadUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/user#timeouts DataAzureadUser#timeouts}

---

##### `userPrincipalName`<sup>Optional</sup> <a name="userPrincipalName" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.userPrincipalName"></a>

```typescript
public readonly userPrincipalName: string;
```

- *Type:* string

The user principal name (UPN) of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/user#user_principal_name DataAzureadUser#user_principal_name}

---

### DataAzureadUserTimeouts <a name="DataAzureadUserTimeouts" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts.Initializer"></a>

```typescript
import { dataAzureadUser } from '@cdktn/provider-azuread'

const dataAzureadUserTimeouts: dataAzureadUser.DataAzureadUserTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/user#read DataAzureadUser#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/user#read DataAzureadUser#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadUserTimeoutsOutputReference <a name="DataAzureadUserTimeoutsOutputReference" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzureadUser } from '@cdktn/provider-azuread'

new dataAzureadUser.DataAzureadUserTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts">DataAzureadUserTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzureadUserTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts">DataAzureadUserTimeouts</a>

---



