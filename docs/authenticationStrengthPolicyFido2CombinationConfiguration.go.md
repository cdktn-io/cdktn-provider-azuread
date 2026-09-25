# `authenticationStrengthPolicyFido2CombinationConfiguration` Submodule <a name="`authenticationStrengthPolicyFido2CombinationConfiguration` Submodule" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthenticationStrengthPolicyFido2CombinationConfiguration <a name="AuthenticationStrengthPolicyFido2CombinationConfiguration" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration azuread_authentication_strength_policy_fido2_combination_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v17/authenticationstrengthpolicyfido2combinationconfiguration"

authenticationstrengthpolicyfido2combinationconfiguration.NewAuthenticationStrengthPolicyFido2CombinationConfiguration(scope Construct, id *string, config AuthenticationStrengthPolicyFido2CombinationConfigurationConfig) AuthenticationStrengthPolicyFido2CombinationConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig">AuthenticationStrengthPolicyFido2CombinationConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig">AuthenticationStrengthPolicyFido2CombinationConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AuthenticationStrengthPolicyFido2CombinationConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v17/authenticationstrengthpolicyfido2combinationconfiguration"

authenticationstrengthpolicyfido2combinationconfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v17/authenticationstrengthpolicyfido2combinationconfiguration"

authenticationstrengthpolicyfido2combinationconfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v17/authenticationstrengthpolicyfido2combinationconfiguration"

authenticationstrengthpolicyfido2combinationconfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v17/authenticationstrengthpolicyfido2combinationconfiguration"

authenticationstrengthpolicyfido2combinationconfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AuthenticationStrengthPolicyFido2CombinationConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AuthenticationStrengthPolicyFido2CombinationConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AuthenticationStrengthPolicyFido2CombinationConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AuthenticationStrengthPolicyFido2CombinationConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.allowedAaguidsInput">AllowedAaguidsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.authenticationStrengthPolicyIdInput">AuthenticationStrengthPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.allowedAaguids">AllowedAaguids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.authenticationStrengthPolicyId">AuthenticationStrengthPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.timeouts"></a>

```go
func Timeouts() AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference</a>

---

##### `AllowedAaguidsInput`<sup>Optional</sup> <a name="AllowedAaguidsInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.allowedAaguidsInput"></a>

```go
func AllowedAaguidsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuthenticationStrengthPolicyIdInput`<sup>Optional</sup> <a name="AuthenticationStrengthPolicyIdInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.authenticationStrengthPolicyIdInput"></a>

```go
func AuthenticationStrengthPolicyIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedAaguids`<sup>Required</sup> <a name="AllowedAaguids" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.allowedAaguids"></a>

```go
func AllowedAaguids() *[]*string
```

- *Type:* *[]*string

---

##### `AuthenticationStrengthPolicyId`<sup>Required</sup> <a name="AuthenticationStrengthPolicyId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.authenticationStrengthPolicyId"></a>

```go
func AuthenticationStrengthPolicyId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthenticationStrengthPolicyFido2CombinationConfigurationConfig <a name="AuthenticationStrengthPolicyFido2CombinationConfigurationConfig" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v17/authenticationstrengthpolicyfido2combinationconfiguration"

&authenticationstrengthpolicyfido2combinationconfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AllowedAaguids: *[]*string,
	AuthenticationStrengthPolicyId: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v17.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.allowedAaguids">AllowedAaguids</a></code> | <code>*[]*string</code> | A set of AAGUIDs allowed to be used as part of the `fido2` combination. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.authenticationStrengthPolicyId">AuthenticationStrengthPolicyId</a></code> | <code>*string</code> | The object ID of the authentication strength policy to which this combination configuration applies. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#id AuthenticationStrengthPolicyFido2CombinationConfiguration#id}. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowedAaguids`<sup>Required</sup> <a name="AllowedAaguids" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.allowedAaguids"></a>

```go
AllowedAaguids *[]*string
```

- *Type:* *[]*string

A set of AAGUIDs allowed to be used as part of the `fido2` combination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#allowed_aaguids AuthenticationStrengthPolicyFido2CombinationConfiguration#allowed_aaguids}

---

##### `AuthenticationStrengthPolicyId`<sup>Required</sup> <a name="AuthenticationStrengthPolicyId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.authenticationStrengthPolicyId"></a>

```go
AuthenticationStrengthPolicyId *string
```

- *Type:* *string

The object ID of the authentication strength policy to which this combination configuration applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#authentication_strength_policy_id AuthenticationStrengthPolicyFido2CombinationConfiguration#authentication_strength_policy_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#id AuthenticationStrengthPolicyFido2CombinationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.timeouts"></a>

```go
Timeouts AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts
```

- *Type:* <a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#timeouts AuthenticationStrengthPolicyFido2CombinationConfiguration#timeouts}

---

### AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts <a name="AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v17/authenticationstrengthpolicyfido2combinationconfiguration"

&authenticationstrengthpolicyfido2combinationconfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#create AuthenticationStrengthPolicyFido2CombinationConfiguration#create}. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#delete AuthenticationStrengthPolicyFido2CombinationConfiguration#delete}. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#read AuthenticationStrengthPolicyFido2CombinationConfiguration#read}. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#update AuthenticationStrengthPolicyFido2CombinationConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#create AuthenticationStrengthPolicyFido2CombinationConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#delete AuthenticationStrengthPolicyFido2CombinationConfiguration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#read AuthenticationStrengthPolicyFido2CombinationConfiguration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#update AuthenticationStrengthPolicyFido2CombinationConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference <a name="AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azuread-go/azuread/v17/authenticationstrengthpolicyfido2combinationconfiguration"

authenticationstrengthpolicyfido2combinationconfiguration.NewAuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



