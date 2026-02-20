# `dataAzureadDomains` Submodule <a name="`dataAzureadDomains` Submodule" id="@cdktn/provider-azuread.dataAzureadDomains"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadDomains <a name="DataAzureadDomains" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/domains azuread_domains}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer"></a>

```typescript
import { dataAzureadDomains } from '@cdktn/provider-azuread'

new dataAzureadDomains.DataAzureadDomains(scope: Construct, id: string, config?: DataAzureadDomainsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig">DataAzureadDomainsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig">DataAzureadDomainsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetAdminManaged">resetAdminManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetIncludeUnverified">resetIncludeUnverified</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetOnlyDefault">resetOnlyDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetOnlyInitial">resetOnlyInitial</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetOnlyRoot">resetOnlyRoot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetSupportsServices">resetSupportsServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzureadDomainsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeouts">DataAzureadDomainsTimeouts</a>

---

##### `resetAdminManaged` <a name="resetAdminManaged" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetAdminManaged"></a>

```typescript
public resetAdminManaged(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeUnverified` <a name="resetIncludeUnverified" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetIncludeUnverified"></a>

```typescript
public resetIncludeUnverified(): void
```

##### `resetOnlyDefault` <a name="resetOnlyDefault" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetOnlyDefault"></a>

```typescript
public resetOnlyDefault(): void
```

##### `resetOnlyInitial` <a name="resetOnlyInitial" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetOnlyInitial"></a>

```typescript
public resetOnlyInitial(): void
```

##### `resetOnlyRoot` <a name="resetOnlyRoot" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetOnlyRoot"></a>

```typescript
public resetOnlyRoot(): void
```

##### `resetSupportsServices` <a name="resetSupportsServices" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetSupportsServices"></a>

```typescript
public resetSupportsServices(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzureadDomains resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.isConstruct"></a>

```typescript
import { dataAzureadDomains } from '@cdktn/provider-azuread'

dataAzureadDomains.DataAzureadDomains.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.isTerraformElement"></a>

```typescript
import { dataAzureadDomains } from '@cdktn/provider-azuread'

dataAzureadDomains.DataAzureadDomains.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.isTerraformDataSource"></a>

```typescript
import { dataAzureadDomains } from '@cdktn/provider-azuread'

dataAzureadDomains.DataAzureadDomains.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.generateConfigForImport"></a>

```typescript
import { dataAzureadDomains } from '@cdktn/provider-azuread'

dataAzureadDomains.DataAzureadDomains.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzureadDomains resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzureadDomains to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzureadDomains that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/domains#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzureadDomains to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.domains">domains</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList">DataAzureadDomainsDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference">DataAzureadDomainsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.adminManagedInput">adminManagedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.includeUnverifiedInput">includeUnverifiedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.onlyDefaultInput">onlyDefaultInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.onlyInitialInput">onlyInitialInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.onlyRootInput">onlyRootInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.supportsServicesInput">supportsServicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeouts">DataAzureadDomainsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.adminManaged">adminManaged</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.includeUnverified">includeUnverified</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.onlyDefault">onlyDefault</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.onlyInitial">onlyInitial</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.onlyRoot">onlyRoot</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.supportsServices">supportsServices</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.domains"></a>

```typescript
public readonly domains: DataAzureadDomainsDomainsList;
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList">DataAzureadDomainsDomainsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadDomainsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference">DataAzureadDomainsTimeoutsOutputReference</a>

---

##### `adminManagedInput`<sup>Optional</sup> <a name="adminManagedInput" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.adminManagedInput"></a>

```typescript
public readonly adminManagedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeUnverifiedInput`<sup>Optional</sup> <a name="includeUnverifiedInput" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.includeUnverifiedInput"></a>

```typescript
public readonly includeUnverifiedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `onlyDefaultInput`<sup>Optional</sup> <a name="onlyDefaultInput" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.onlyDefaultInput"></a>

```typescript
public readonly onlyDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `onlyInitialInput`<sup>Optional</sup> <a name="onlyInitialInput" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.onlyInitialInput"></a>

```typescript
public readonly onlyInitialInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `onlyRootInput`<sup>Optional</sup> <a name="onlyRootInput" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.onlyRootInput"></a>

```typescript
public readonly onlyRootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `supportsServicesInput`<sup>Optional</sup> <a name="supportsServicesInput" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.supportsServicesInput"></a>

```typescript
public readonly supportsServicesInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzureadDomainsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeouts">DataAzureadDomainsTimeouts</a>

---

##### `adminManaged`<sup>Required</sup> <a name="adminManaged" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.adminManaged"></a>

```typescript
public readonly adminManaged: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includeUnverified`<sup>Required</sup> <a name="includeUnverified" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.includeUnverified"></a>

```typescript
public readonly includeUnverified: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `onlyDefault`<sup>Required</sup> <a name="onlyDefault" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.onlyDefault"></a>

```typescript
public readonly onlyDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `onlyInitial`<sup>Required</sup> <a name="onlyInitial" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.onlyInitial"></a>

```typescript
public readonly onlyInitial: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `onlyRoot`<sup>Required</sup> <a name="onlyRoot" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.onlyRoot"></a>

```typescript
public readonly onlyRoot: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `supportsServices`<sup>Required</sup> <a name="supportsServices" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.supportsServices"></a>

```typescript
public readonly supportsServices: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomains.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadDomainsConfig <a name="DataAzureadDomainsConfig" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.Initializer"></a>

```typescript
import { dataAzureadDomains } from '@cdktn/provider-azuread'

const dataAzureadDomainsConfig: dataAzureadDomains.DataAzureadDomainsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.adminManaged">adminManaged</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set to `true` to only return domains whose DNS is managed by Microsoft 365. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/domains#id DataAzureadDomains#id}. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.includeUnverified">includeUnverified</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set to `true` if unverified Azure AD domains should be included. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.onlyDefault">onlyDefault</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set to `true` to only return the default domain. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.onlyInitial">onlyInitial</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set to `true` to only return the initial domain, which is your primary Azure Active Directory tenant domain. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.onlyRoot">onlyRoot</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set to `true` to only return verified root domains. Excludes subdomains and unverified domains. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.supportsServices">supportsServices</a></code> | <code>string[]</code> | A list of supported services that must be supported by a domain. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeouts">DataAzureadDomainsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `adminManaged`<sup>Optional</sup> <a name="adminManaged" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.adminManaged"></a>

```typescript
public readonly adminManaged: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set to `true` to only return domains whose DNS is managed by Microsoft 365.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/domains#admin_managed DataAzureadDomains#admin_managed}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/domains#id DataAzureadDomains#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeUnverified`<sup>Optional</sup> <a name="includeUnverified" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.includeUnverified"></a>

```typescript
public readonly includeUnverified: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set to `true` if unverified Azure AD domains should be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/domains#include_unverified DataAzureadDomains#include_unverified}

---

##### `onlyDefault`<sup>Optional</sup> <a name="onlyDefault" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.onlyDefault"></a>

```typescript
public readonly onlyDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set to `true` to only return the default domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/domains#only_default DataAzureadDomains#only_default}

---

##### `onlyInitial`<sup>Optional</sup> <a name="onlyInitial" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.onlyInitial"></a>

```typescript
public readonly onlyInitial: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set to `true` to only return the initial domain, which is your primary Azure Active Directory tenant domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/domains#only_initial DataAzureadDomains#only_initial}

---

##### `onlyRoot`<sup>Optional</sup> <a name="onlyRoot" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.onlyRoot"></a>

```typescript
public readonly onlyRoot: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set to `true` to only return verified root domains. Excludes subdomains and unverified domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/domains#only_root DataAzureadDomains#only_root}

---

##### `supportsServices`<sup>Optional</sup> <a name="supportsServices" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.supportsServices"></a>

```typescript
public readonly supportsServices: string[];
```

- *Type:* string[]

A list of supported services that must be supported by a domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/domains#supports_services DataAzureadDomains#supports_services}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadDomainsTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeouts">DataAzureadDomainsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/domains#timeouts DataAzureadDomains#timeouts}

---

### DataAzureadDomainsDomains <a name="DataAzureadDomainsDomains" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomains"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomains.Initializer"></a>

```typescript
import { dataAzureadDomains } from '@cdktn/provider-azuread'

const dataAzureadDomainsDomains: dataAzureadDomains.DataAzureadDomainsDomains = { ... }
```


### DataAzureadDomainsTimeouts <a name="DataAzureadDomainsTimeouts" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeouts.Initializer"></a>

```typescript
import { dataAzureadDomains } from '@cdktn/provider-azuread'

const dataAzureadDomainsTimeouts: dataAzureadDomains.DataAzureadDomainsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/domains#read DataAzureadDomains#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/domains#read DataAzureadDomains#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadDomainsDomainsList <a name="DataAzureadDomainsDomainsList" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.Initializer"></a>

```typescript
import { dataAzureadDomains } from '@cdktn/provider-azuread'

new dataAzureadDomains.DataAzureadDomainsDomainsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.get"></a>

```typescript
public get(index: number): DataAzureadDomainsDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzureadDomainsDomainsOutputReference <a name="DataAzureadDomainsDomainsOutputReference" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.Initializer"></a>

```typescript
import { dataAzureadDomains } from '@cdktn/provider-azuread'

new dataAzureadDomains.DataAzureadDomainsDomainsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.adminManaged">adminManaged</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.default">default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.initial">initial</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.root">root</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.supportedServices">supportedServices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.verified">verified</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomains">DataAzureadDomainsDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminManaged`<sup>Required</sup> <a name="adminManaged" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.adminManaged"></a>

```typescript
public readonly adminManaged: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.default"></a>

```typescript
public readonly default: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `initial`<sup>Required</sup> <a name="initial" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.initial"></a>

```typescript
public readonly initial: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `root`<sup>Required</sup> <a name="root" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.root"></a>

```typescript
public readonly root: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `supportedServices`<sup>Required</sup> <a name="supportedServices" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.supportedServices"></a>

```typescript
public readonly supportedServices: string[];
```

- *Type:* string[]

---

##### `verified`<sup>Required</sup> <a name="verified" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.verified"></a>

```typescript
public readonly verified: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomainsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzureadDomainsDomains;
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsDomains">DataAzureadDomainsDomains</a>

---


### DataAzureadDomainsTimeoutsOutputReference <a name="DataAzureadDomainsTimeoutsOutputReference" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzureadDomains } from '@cdktn/provider-azuread'

new dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeouts">DataAzureadDomainsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzureadDomainsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azuread.dataAzureadDomains.DataAzureadDomainsTimeouts">DataAzureadDomainsTimeouts</a>

---



