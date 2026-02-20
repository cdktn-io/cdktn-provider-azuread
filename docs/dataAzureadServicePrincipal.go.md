# `dataAzureadServicePrincipal` Submodule <a name="`dataAzureadServicePrincipal` Submodule" id="@cdktn/provider-azuread.dataAzureadServicePrincipal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadServicePrincipal <a name="DataAzureadServicePrincipal" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principal azuread_service_principal}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v15/dataazureadserviceprincipal"

dataazureadserviceprincipal.NewDataAzureadServicePrincipal(scope Construct, id *string, config DataAzureadServicePrincipalConfig) DataAzureadServicePrincipal
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig">DataAzureadServicePrincipalConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig">DataAzureadServicePrincipalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetObjectId">ResetObjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.putTimeouts"></a>

```go
func PutTimeouts(value DataAzureadServicePrincipalTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts">DataAzureadServicePrincipalTimeouts</a>

---

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetId"></a>

```go
func ResetId()
```

##### `ResetObjectId` <a name="ResetObjectId" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetObjectId"></a>

```go
func ResetObjectId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzureadServicePrincipal resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v15/dataazureadserviceprincipal"

dataazureadserviceprincipal.DataAzureadServicePrincipal_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v15/dataazureadserviceprincipal"

dataazureadserviceprincipal.DataAzureadServicePrincipal_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v15/dataazureadserviceprincipal"

dataazureadserviceprincipal.DataAzureadServicePrincipal_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v15/dataazureadserviceprincipal"

dataazureadserviceprincipal.DataAzureadServicePrincipal_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAzureadServicePrincipal resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzureadServicePrincipal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzureadServicePrincipal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAzureadServicePrincipal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.accountEnabled">AccountEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.alternativeNames">AlternativeNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.applicationTenantId">ApplicationTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.appRoleAssignmentRequired">AppRoleAssignmentRequired</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.appRoleIds">AppRoleIds</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.appRoles">AppRoles</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList">DataAzureadServicePrincipalAppRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.features">Features</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList">DataAzureadServicePrincipalFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.featureTags">FeatureTags</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList">DataAzureadServicePrincipalFeatureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.homepageUrl">HomepageUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.loginUrl">LoginUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.logoutUrl">LogoutUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.notes">Notes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.notificationEmailAddresses">NotificationEmailAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.oauth2PermissionScopeIds">Oauth2PermissionScopeIds</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.oauth2PermissionScopes">Oauth2PermissionScopes</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList">DataAzureadServicePrincipalOauth2PermissionScopesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.preferredSingleSignOnMode">PreferredSingleSignOnMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.redirectUris">RedirectUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.samlMetadataUrl">SamlMetadataUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.samlSingleSignOn">SamlSingleSignOn</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList">DataAzureadServicePrincipalSamlSingleSignOnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.servicePrincipalNames">ServicePrincipalNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.signInAudience">SignInAudience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference">DataAzureadServicePrincipalTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.objectIdInput">ObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AccountEnabled`<sup>Required</sup> <a name="AccountEnabled" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.accountEnabled"></a>

```go
func AccountEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `AlternativeNames`<sup>Required</sup> <a name="AlternativeNames" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.alternativeNames"></a>

```go
func AlternativeNames() *[]*string
```

- *Type:* *[]*string

---

##### `ApplicationTenantId`<sup>Required</sup> <a name="ApplicationTenantId" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.applicationTenantId"></a>

```go
func ApplicationTenantId() *string
```

- *Type:* *string

---

##### `AppRoleAssignmentRequired`<sup>Required</sup> <a name="AppRoleAssignmentRequired" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.appRoleAssignmentRequired"></a>

```go
func AppRoleAssignmentRequired() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `AppRoleIds`<sup>Required</sup> <a name="AppRoleIds" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.appRoleIds"></a>

```go
func AppRoleIds() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `AppRoles`<sup>Required</sup> <a name="AppRoles" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.appRoles"></a>

```go
func AppRoles() DataAzureadServicePrincipalAppRolesList
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList">DataAzureadServicePrincipalAppRolesList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Features`<sup>Required</sup> <a name="Features" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.features"></a>

```go
func Features() DataAzureadServicePrincipalFeaturesList
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList">DataAzureadServicePrincipalFeaturesList</a>

---

##### `FeatureTags`<sup>Required</sup> <a name="FeatureTags" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.featureTags"></a>

```go
func FeatureTags() DataAzureadServicePrincipalFeatureTagsList
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList">DataAzureadServicePrincipalFeatureTagsList</a>

---

##### `HomepageUrl`<sup>Required</sup> <a name="HomepageUrl" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.homepageUrl"></a>

```go
func HomepageUrl() *string
```

- *Type:* *string

---

##### `LoginUrl`<sup>Required</sup> <a name="LoginUrl" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.loginUrl"></a>

```go
func LoginUrl() *string
```

- *Type:* *string

---

##### `LogoutUrl`<sup>Required</sup> <a name="LogoutUrl" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.logoutUrl"></a>

```go
func LogoutUrl() *string
```

- *Type:* *string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.notes"></a>

```go
func Notes() *string
```

- *Type:* *string

---

##### `NotificationEmailAddresses`<sup>Required</sup> <a name="NotificationEmailAddresses" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.notificationEmailAddresses"></a>

```go
func NotificationEmailAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Oauth2PermissionScopeIds`<sup>Required</sup> <a name="Oauth2PermissionScopeIds" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.oauth2PermissionScopeIds"></a>

```go
func Oauth2PermissionScopeIds() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Oauth2PermissionScopes`<sup>Required</sup> <a name="Oauth2PermissionScopes" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.oauth2PermissionScopes"></a>

```go
func Oauth2PermissionScopes() DataAzureadServicePrincipalOauth2PermissionScopesList
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList">DataAzureadServicePrincipalOauth2PermissionScopesList</a>

---

##### `PreferredSingleSignOnMode`<sup>Required</sup> <a name="PreferredSingleSignOnMode" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.preferredSingleSignOnMode"></a>

```go
func PreferredSingleSignOnMode() *string
```

- *Type:* *string

---

##### `RedirectUris`<sup>Required</sup> <a name="RedirectUris" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.redirectUris"></a>

```go
func RedirectUris() *[]*string
```

- *Type:* *[]*string

---

##### `SamlMetadataUrl`<sup>Required</sup> <a name="SamlMetadataUrl" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.samlMetadataUrl"></a>

```go
func SamlMetadataUrl() *string
```

- *Type:* *string

---

##### `SamlSingleSignOn`<sup>Required</sup> <a name="SamlSingleSignOn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.samlSingleSignOn"></a>

```go
func SamlSingleSignOn() DataAzureadServicePrincipalSamlSingleSignOnList
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList">DataAzureadServicePrincipalSamlSingleSignOnList</a>

---

##### `ServicePrincipalNames`<sup>Required</sup> <a name="ServicePrincipalNames" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.servicePrincipalNames"></a>

```go
func ServicePrincipalNames() *[]*string
```

- *Type:* *[]*string

---

##### `SignInAudience`<sup>Required</sup> <a name="SignInAudience" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.signInAudience"></a>

```go
func SignInAudience() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.timeouts"></a>

```go
func Timeouts() DataAzureadServicePrincipalTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference">DataAzureadServicePrincipalTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.objectIdInput"></a>

```go
func ObjectIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadServicePrincipalAppRoles <a name="DataAzureadServicePrincipalAppRoles" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRoles.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v15/dataazureadserviceprincipal"

&dataazureadserviceprincipal.DataAzureadServicePrincipalAppRoles {

}
```


### DataAzureadServicePrincipalConfig <a name="DataAzureadServicePrincipalConfig" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v15/dataazureadserviceprincipal"

&dataazureadserviceprincipal.DataAzureadServicePrincipalConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ClientId: *string,
	DisplayName: *string,
	Id: *string,
	ObjectId: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v15.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The client ID of the application associated with this service principal. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the application associated with this service principal. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principal#id DataAzureadServicePrincipal#id}. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.objectId">ObjectId</a></code> | <code>*string</code> | The object ID of the service principal. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts">DataAzureadServicePrincipalTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client ID of the application associated with this service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principal#client_id DataAzureadServicePrincipal#client_id}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the application associated with this service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principal#display_name DataAzureadServicePrincipal#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principal#id DataAzureadServicePrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ObjectId`<sup>Optional</sup> <a name="ObjectId" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.objectId"></a>

```go
ObjectId *string
```

- *Type:* *string

The object ID of the service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principal#object_id DataAzureadServicePrincipal#object_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.timeouts"></a>

```go
Timeouts DataAzureadServicePrincipalTimeouts
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts">DataAzureadServicePrincipalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principal#timeouts DataAzureadServicePrincipal#timeouts}

---

### DataAzureadServicePrincipalFeatures <a name="DataAzureadServicePrincipalFeatures" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatures.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v15/dataazureadserviceprincipal"

&dataazureadserviceprincipal.DataAzureadServicePrincipalFeatures {

}
```


### DataAzureadServicePrincipalFeatureTags <a name="DataAzureadServicePrincipalFeatureTags" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v15/dataazureadserviceprincipal"

&dataazureadserviceprincipal.DataAzureadServicePrincipalFeatureTags {

}
```


### DataAzureadServicePrincipalOauth2PermissionScopes <a name="DataAzureadServicePrincipalOauth2PermissionScopes" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v15/dataazureadserviceprincipal"

&dataazureadserviceprincipal.DataAzureadServicePrincipalOauth2PermissionScopes {

}
```


### DataAzureadServicePrincipalSamlSingleSignOn <a name="DataAzureadServicePrincipalSamlSingleSignOn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v15/dataazureadserviceprincipal"

&dataazureadserviceprincipal.DataAzureadServicePrincipalSamlSingleSignOn {

}
```


### DataAzureadServicePrincipalTimeouts <a name="DataAzureadServicePrincipalTimeouts" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v15/dataazureadserviceprincipal"

&dataazureadserviceprincipal.DataAzureadServicePrincipalTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principal#read DataAzureadServicePrincipal#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principal#read DataAzureadServicePrincipal#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadServicePrincipalAppRolesList <a name="DataAzureadServicePrincipalAppRolesList" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v15/dataazureadserviceprincipal"

dataazureadserviceprincipal.NewDataAzureadServicePrincipalAppRolesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzureadServicePrincipalAppRolesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.get"></a>

```go
func Get(index *f64) DataAzureadServicePrincipalAppRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzureadServicePrincipalAppRolesOutputReference <a name="DataAzureadServicePrincipalAppRolesOutputReference" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v15/dataazureadserviceprincipal"

dataazureadserviceprincipal.NewDataAzureadServicePrincipalAppRolesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzureadServicePrincipalAppRolesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.allowedMemberTypes">AllowedMemberTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRoles">DataAzureadServicePrincipalAppRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedMemberTypes`<sup>Required</sup> <a name="AllowedMemberTypes" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.allowedMemberTypes"></a>

```go
func AllowedMemberTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzureadServicePrincipalAppRoles
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRoles">DataAzureadServicePrincipalAppRoles</a>

---


### DataAzureadServicePrincipalFeaturesList <a name="DataAzureadServicePrincipalFeaturesList" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v15/dataazureadserviceprincipal"

dataazureadserviceprincipal.NewDataAzureadServicePrincipalFeaturesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzureadServicePrincipalFeaturesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.get"></a>

```go
func Get(index *f64) DataAzureadServicePrincipalFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzureadServicePrincipalFeaturesOutputReference <a name="DataAzureadServicePrincipalFeaturesOutputReference" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v15/dataazureadserviceprincipal"

dataazureadserviceprincipal.NewDataAzureadServicePrincipalFeaturesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzureadServicePrincipalFeaturesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.customSingleSignOnApp">CustomSingleSignOnApp</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.enterpriseApplication">EnterpriseApplication</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.galleryApplication">GalleryApplication</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.visibleToUsers">VisibleToUsers</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatures">DataAzureadServicePrincipalFeatures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomSingleSignOnApp`<sup>Required</sup> <a name="CustomSingleSignOnApp" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.customSingleSignOnApp"></a>

```go
func CustomSingleSignOnApp() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EnterpriseApplication`<sup>Required</sup> <a name="EnterpriseApplication" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.enterpriseApplication"></a>

```go
func EnterpriseApplication() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `GalleryApplication`<sup>Required</sup> <a name="GalleryApplication" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.galleryApplication"></a>

```go
func GalleryApplication() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `VisibleToUsers`<sup>Required</sup> <a name="VisibleToUsers" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.visibleToUsers"></a>

```go
func VisibleToUsers() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzureadServicePrincipalFeatures
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatures">DataAzureadServicePrincipalFeatures</a>

---


### DataAzureadServicePrincipalFeatureTagsList <a name="DataAzureadServicePrincipalFeatureTagsList" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v15/dataazureadserviceprincipal"

dataazureadserviceprincipal.NewDataAzureadServicePrincipalFeatureTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzureadServicePrincipalFeatureTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.get"></a>

```go
func Get(index *f64) DataAzureadServicePrincipalFeatureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzureadServicePrincipalFeatureTagsOutputReference <a name="DataAzureadServicePrincipalFeatureTagsOutputReference" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v15/dataazureadserviceprincipal"

dataazureadserviceprincipal.NewDataAzureadServicePrincipalFeatureTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzureadServicePrincipalFeatureTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.customSingleSignOn">CustomSingleSignOn</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.enterprise">Enterprise</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.gallery">Gallery</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.hide">Hide</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTags">DataAzureadServicePrincipalFeatureTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomSingleSignOn`<sup>Required</sup> <a name="CustomSingleSignOn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.customSingleSignOn"></a>

```go
func CustomSingleSignOn() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Enterprise`<sup>Required</sup> <a name="Enterprise" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.enterprise"></a>

```go
func Enterprise() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Gallery`<sup>Required</sup> <a name="Gallery" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.gallery"></a>

```go
func Gallery() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Hide`<sup>Required</sup> <a name="Hide" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.hide"></a>

```go
func Hide() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzureadServicePrincipalFeatureTags
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTags">DataAzureadServicePrincipalFeatureTags</a>

---


### DataAzureadServicePrincipalOauth2PermissionScopesList <a name="DataAzureadServicePrincipalOauth2PermissionScopesList" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v15/dataazureadserviceprincipal"

dataazureadserviceprincipal.NewDataAzureadServicePrincipalOauth2PermissionScopesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzureadServicePrincipalOauth2PermissionScopesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.get"></a>

```go
func Get(index *f64) DataAzureadServicePrincipalOauth2PermissionScopesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzureadServicePrincipalOauth2PermissionScopesOutputReference <a name="DataAzureadServicePrincipalOauth2PermissionScopesOutputReference" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v15/dataazureadserviceprincipal"

dataazureadserviceprincipal.NewDataAzureadServicePrincipalOauth2PermissionScopesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzureadServicePrincipalOauth2PermissionScopesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.adminConsentDescription">AdminConsentDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.adminConsentDisplayName">AdminConsentDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.userConsentDescription">UserConsentDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.userConsentDisplayName">UserConsentDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopes">DataAzureadServicePrincipalOauth2PermissionScopes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminConsentDescription`<sup>Required</sup> <a name="AdminConsentDescription" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.adminConsentDescription"></a>

```go
func AdminConsentDescription() *string
```

- *Type:* *string

---

##### `AdminConsentDisplayName`<sup>Required</sup> <a name="AdminConsentDisplayName" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.adminConsentDisplayName"></a>

```go
func AdminConsentDisplayName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserConsentDescription`<sup>Required</sup> <a name="UserConsentDescription" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.userConsentDescription"></a>

```go
func UserConsentDescription() *string
```

- *Type:* *string

---

##### `UserConsentDisplayName`<sup>Required</sup> <a name="UserConsentDisplayName" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.userConsentDisplayName"></a>

```go
func UserConsentDisplayName() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzureadServicePrincipalOauth2PermissionScopes
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopes">DataAzureadServicePrincipalOauth2PermissionScopes</a>

---


### DataAzureadServicePrincipalSamlSingleSignOnList <a name="DataAzureadServicePrincipalSamlSingleSignOnList" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v15/dataazureadserviceprincipal"

dataazureadserviceprincipal.NewDataAzureadServicePrincipalSamlSingleSignOnList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzureadServicePrincipalSamlSingleSignOnList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.get"></a>

```go
func Get(index *f64) DataAzureadServicePrincipalSamlSingleSignOnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzureadServicePrincipalSamlSingleSignOnOutputReference <a name="DataAzureadServicePrincipalSamlSingleSignOnOutputReference" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v15/dataazureadserviceprincipal"

dataazureadserviceprincipal.NewDataAzureadServicePrincipalSamlSingleSignOnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzureadServicePrincipalSamlSingleSignOnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.property.relayState">RelayState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOn">DataAzureadServicePrincipalSamlSingleSignOn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RelayState`<sup>Required</sup> <a name="RelayState" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.property.relayState"></a>

```go
func RelayState() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzureadServicePrincipalSamlSingleSignOn
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOn">DataAzureadServicePrincipalSamlSingleSignOn</a>

---


### DataAzureadServicePrincipalTimeoutsOutputReference <a name="DataAzureadServicePrincipalTimeoutsOutputReference" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v15/dataazureadserviceprincipal"

dataazureadserviceprincipal.NewDataAzureadServicePrincipalTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzureadServicePrincipalTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



