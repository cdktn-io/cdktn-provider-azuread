# `dataAzureadServicePrincipals` Submodule <a name="`dataAzureadServicePrincipals` Submodule" id="@cdktn/provider-azuread.dataAzureadServicePrincipals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadServicePrincipals <a name="DataAzureadServicePrincipals" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals azuread_service_principals}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer"></a>

```typescript
import { dataAzureadServicePrincipals } from '@cdktn/provider-azuread'

new dataAzureadServicePrincipals.DataAzureadServicePrincipals(scope: Construct, id: string, config?: DataAzureadServicePrincipalsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig">DataAzureadServicePrincipalsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig">DataAzureadServicePrincipalsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetClientIds">resetClientIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetDisplayNames">resetDisplayNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetIgnoreMissing">resetIgnoreMissing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetObjectIds">resetObjectIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetReturnAll">resetReturnAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzureadServicePrincipalsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts">DataAzureadServicePrincipalsTimeouts</a>

---

##### `resetClientIds` <a name="resetClientIds" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetClientIds"></a>

```typescript
public resetClientIds(): void
```

##### `resetDisplayNames` <a name="resetDisplayNames" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetDisplayNames"></a>

```typescript
public resetDisplayNames(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreMissing` <a name="resetIgnoreMissing" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetIgnoreMissing"></a>

```typescript
public resetIgnoreMissing(): void
```

##### `resetObjectIds` <a name="resetObjectIds" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetObjectIds"></a>

```typescript
public resetObjectIds(): void
```

##### `resetReturnAll` <a name="resetReturnAll" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetReturnAll"></a>

```typescript
public resetReturnAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzureadServicePrincipals resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.isConstruct"></a>

```typescript
import { dataAzureadServicePrincipals } from '@cdktn/provider-azuread'

dataAzureadServicePrincipals.DataAzureadServicePrincipals.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.isTerraformElement"></a>

```typescript
import { dataAzureadServicePrincipals } from '@cdktn/provider-azuread'

dataAzureadServicePrincipals.DataAzureadServicePrincipals.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.isTerraformDataSource"></a>

```typescript
import { dataAzureadServicePrincipals } from '@cdktn/provider-azuread'

dataAzureadServicePrincipals.DataAzureadServicePrincipals.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.generateConfigForImport"></a>

```typescript
import { dataAzureadServicePrincipals } from '@cdktn/provider-azuread'

dataAzureadServicePrincipals.DataAzureadServicePrincipals.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzureadServicePrincipals resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzureadServicePrincipals to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzureadServicePrincipals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzureadServicePrincipals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.servicePrincipals">servicePrincipals</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList">DataAzureadServicePrincipalsServicePrincipalsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference">DataAzureadServicePrincipalsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.clientIdsInput">clientIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.displayNamesInput">displayNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.ignoreMissingInput">ignoreMissingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.objectIdsInput">objectIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.returnAllInput">returnAllInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts">DataAzureadServicePrincipalsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.clientIds">clientIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.displayNames">displayNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.ignoreMissing">ignoreMissing</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.objectIds">objectIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.returnAll">returnAll</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `servicePrincipals`<sup>Required</sup> <a name="servicePrincipals" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.servicePrincipals"></a>

```typescript
public readonly servicePrincipals: DataAzureadServicePrincipalsServicePrincipalsList;
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList">DataAzureadServicePrincipalsServicePrincipalsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadServicePrincipalsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference">DataAzureadServicePrincipalsTimeoutsOutputReference</a>

---

##### `clientIdsInput`<sup>Optional</sup> <a name="clientIdsInput" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.clientIdsInput"></a>

```typescript
public readonly clientIdsInput: string[];
```

- *Type:* string[]

---

##### `displayNamesInput`<sup>Optional</sup> <a name="displayNamesInput" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.displayNamesInput"></a>

```typescript
public readonly displayNamesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreMissingInput`<sup>Optional</sup> <a name="ignoreMissingInput" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.ignoreMissingInput"></a>

```typescript
public readonly ignoreMissingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `objectIdsInput`<sup>Optional</sup> <a name="objectIdsInput" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.objectIdsInput"></a>

```typescript
public readonly objectIdsInput: string[];
```

- *Type:* string[]

---

##### `returnAllInput`<sup>Optional</sup> <a name="returnAllInput" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.returnAllInput"></a>

```typescript
public readonly returnAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzureadServicePrincipalsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts">DataAzureadServicePrincipalsTimeouts</a>

---

##### `clientIds`<sup>Required</sup> <a name="clientIds" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.clientIds"></a>

```typescript
public readonly clientIds: string[];
```

- *Type:* string[]

---

##### `displayNames`<sup>Required</sup> <a name="displayNames" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.displayNames"></a>

```typescript
public readonly displayNames: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreMissing`<sup>Required</sup> <a name="ignoreMissing" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.ignoreMissing"></a>

```typescript
public readonly ignoreMissing: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `objectIds`<sup>Required</sup> <a name="objectIds" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.objectIds"></a>

```typescript
public readonly objectIds: string[];
```

- *Type:* string[]

---

##### `returnAll`<sup>Required</sup> <a name="returnAll" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.returnAll"></a>

```typescript
public readonly returnAll: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadServicePrincipalsConfig <a name="DataAzureadServicePrincipalsConfig" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.Initializer"></a>

```typescript
import { dataAzureadServicePrincipals } from '@cdktn/provider-azuread'

const dataAzureadServicePrincipalsConfig: dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.clientIds">clientIds</a></code> | <code>string[]</code> | The client IDs of the applications associated with the service principals. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.displayNames">displayNames</a></code> | <code>string[]</code> | The display names of the applications associated with the service principals. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#id DataAzureadServicePrincipals#id}. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.ignoreMissing">ignoreMissing</a></code> | <code>boolean \| cdktn.IResolvable</code> | Ignore missing service principals and return the service principals that were found. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.objectIds">objectIds</a></code> | <code>string[]</code> | The object IDs of the service principals. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.returnAll">returnAll</a></code> | <code>boolean \| cdktn.IResolvable</code> | Fetch all service principals with no filter and return all that were found. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts">DataAzureadServicePrincipalsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `clientIds`<sup>Optional</sup> <a name="clientIds" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.clientIds"></a>

```typescript
public readonly clientIds: string[];
```

- *Type:* string[]

The client IDs of the applications associated with the service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#client_ids DataAzureadServicePrincipals#client_ids}

---

##### `displayNames`<sup>Optional</sup> <a name="displayNames" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.displayNames"></a>

```typescript
public readonly displayNames: string[];
```

- *Type:* string[]

The display names of the applications associated with the service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#display_names DataAzureadServicePrincipals#display_names}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#id DataAzureadServicePrincipals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreMissing`<sup>Optional</sup> <a name="ignoreMissing" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.ignoreMissing"></a>

```typescript
public readonly ignoreMissing: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Ignore missing service principals and return the service principals that were found.

The data source will still fail if no service principals are found

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#ignore_missing DataAzureadServicePrincipals#ignore_missing}

---

##### `objectIds`<sup>Optional</sup> <a name="objectIds" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.objectIds"></a>

```typescript
public readonly objectIds: string[];
```

- *Type:* string[]

The object IDs of the service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#object_ids DataAzureadServicePrincipals#object_ids}

---

##### `returnAll`<sup>Optional</sup> <a name="returnAll" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.returnAll"></a>

```typescript
public readonly returnAll: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Fetch all service principals with no filter and return all that were found.

The data source will still fail if no service principals are found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#return_all DataAzureadServicePrincipals#return_all}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadServicePrincipalsTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts">DataAzureadServicePrincipalsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#timeouts DataAzureadServicePrincipals#timeouts}

---

### DataAzureadServicePrincipalsServicePrincipals <a name="DataAzureadServicePrincipalsServicePrincipals" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipals.Initializer"></a>

```typescript
import { dataAzureadServicePrincipals } from '@cdktn/provider-azuread'

const dataAzureadServicePrincipalsServicePrincipals: dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipals = { ... }
```


### DataAzureadServicePrincipalsTimeouts <a name="DataAzureadServicePrincipalsTimeouts" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts.Initializer"></a>

```typescript
import { dataAzureadServicePrincipals } from '@cdktn/provider-azuread'

const dataAzureadServicePrincipalsTimeouts: dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#read DataAzureadServicePrincipals#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#read DataAzureadServicePrincipals#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadServicePrincipalsServicePrincipalsList <a name="DataAzureadServicePrincipalsServicePrincipalsList" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.Initializer"></a>

```typescript
import { dataAzureadServicePrincipals } from '@cdktn/provider-azuread'

new dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.get"></a>

```typescript
public get(index: number): DataAzureadServicePrincipalsServicePrincipalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzureadServicePrincipalsServicePrincipalsOutputReference <a name="DataAzureadServicePrincipalsServicePrincipalsOutputReference" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer"></a>

```typescript
import { dataAzureadServicePrincipals } from '@cdktn/provider-azuread'

new dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.accountEnabled">accountEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.applicationTenantId">applicationTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.appRoleAssignmentRequired">appRoleAssignmentRequired</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.preferredSingleSignOnMode">preferredSingleSignOnMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.samlMetadataUrl">samlMetadataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.servicePrincipalNames">servicePrincipalNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.signInAudience">signInAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipals">DataAzureadServicePrincipalsServicePrincipals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountEnabled`<sup>Required</sup> <a name="accountEnabled" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.accountEnabled"></a>

```typescript
public readonly accountEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `applicationTenantId`<sup>Required</sup> <a name="applicationTenantId" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.applicationTenantId"></a>

```typescript
public readonly applicationTenantId: string;
```

- *Type:* string

---

##### `appRoleAssignmentRequired`<sup>Required</sup> <a name="appRoleAssignmentRequired" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.appRoleAssignmentRequired"></a>

```typescript
public readonly appRoleAssignmentRequired: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `preferredSingleSignOnMode`<sup>Required</sup> <a name="preferredSingleSignOnMode" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.preferredSingleSignOnMode"></a>

```typescript
public readonly preferredSingleSignOnMode: string;
```

- *Type:* string

---

##### `samlMetadataUrl`<sup>Required</sup> <a name="samlMetadataUrl" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.samlMetadataUrl"></a>

```typescript
public readonly samlMetadataUrl: string;
```

- *Type:* string

---

##### `servicePrincipalNames`<sup>Required</sup> <a name="servicePrincipalNames" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.servicePrincipalNames"></a>

```typescript
public readonly servicePrincipalNames: string[];
```

- *Type:* string[]

---

##### `signInAudience`<sup>Required</sup> <a name="signInAudience" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.signInAudience"></a>

```typescript
public readonly signInAudience: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzureadServicePrincipalsServicePrincipals;
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipals">DataAzureadServicePrincipalsServicePrincipals</a>

---


### DataAzureadServicePrincipalsTimeoutsOutputReference <a name="DataAzureadServicePrincipalsTimeoutsOutputReference" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzureadServicePrincipals } from '@cdktn/provider-azuread'

new dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts">DataAzureadServicePrincipalsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzureadServicePrincipalsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts">DataAzureadServicePrincipalsTimeouts</a>

---



