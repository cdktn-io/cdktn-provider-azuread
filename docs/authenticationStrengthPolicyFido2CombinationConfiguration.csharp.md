# `authenticationStrengthPolicyFido2CombinationConfiguration` Submodule <a name="`authenticationStrengthPolicyFido2CombinationConfiguration` Submodule" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthenticationStrengthPolicyFido2CombinationConfiguration <a name="AuthenticationStrengthPolicyFido2CombinationConfiguration" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration azuread_authentication_strength_policy_fido2_combination_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azuread;

new AuthenticationStrengthPolicyFido2CombinationConfiguration(Construct Scope, string Id, AuthenticationStrengthPolicyFido2CombinationConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig">AuthenticationStrengthPolicyFido2CombinationConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.putTimeouts"></a>

```csharp
private void PutTimeouts(AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
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

```csharp
using Io.Cdktn.Providers.Azuread;

AuthenticationStrengthPolicyFido2CombinationConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azuread;

AuthenticationStrengthPolicyFido2CombinationConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azuread;

AuthenticationStrengthPolicyFido2CombinationConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azuread;

AuthenticationStrengthPolicyFido2CombinationConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AuthenticationStrengthPolicyFido2CombinationConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AuthenticationStrengthPolicyFido2CombinationConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AuthenticationStrengthPolicyFido2CombinationConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AuthenticationStrengthPolicyFido2CombinationConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.allowedAaguidsInput">AllowedAaguidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.authenticationStrengthPolicyIdInput">AuthenticationStrengthPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.allowedAaguids">AllowedAaguids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.authenticationStrengthPolicyId">AuthenticationStrengthPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.timeouts"></a>

```csharp
public AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference</a>

---

##### `AllowedAaguidsInput`<sup>Optional</sup> <a name="AllowedAaguidsInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.allowedAaguidsInput"></a>

```csharp
public string[] AllowedAaguidsInput { get; }
```

- *Type:* string[]

---

##### `AuthenticationStrengthPolicyIdInput`<sup>Optional</sup> <a name="AuthenticationStrengthPolicyIdInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.authenticationStrengthPolicyIdInput"></a>

```csharp
public string AuthenticationStrengthPolicyIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.timeoutsInput"></a>

```csharp
public IResolvable|AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts</a>

---

##### `AllowedAaguids`<sup>Required</sup> <a name="AllowedAaguids" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.allowedAaguids"></a>

```csharp
public string[] AllowedAaguids { get; }
```

- *Type:* string[]

---

##### `AuthenticationStrengthPolicyId`<sup>Required</sup> <a name="AuthenticationStrengthPolicyId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.authenticationStrengthPolicyId"></a>

```csharp
public string AuthenticationStrengthPolicyId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthenticationStrengthPolicyFido2CombinationConfigurationConfig <a name="AuthenticationStrengthPolicyFido2CombinationConfigurationConfig" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azuread;

new AuthenticationStrengthPolicyFido2CombinationConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] AllowedAaguids,
    string AuthenticationStrengthPolicyId,
    string Id = null,
    AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.allowedAaguids">AllowedAaguids</a></code> | <code>string[]</code> | A set of AAGUIDs allowed to be used as part of the `fido2` combination. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.authenticationStrengthPolicyId">AuthenticationStrengthPolicyId</a></code> | <code>string</code> | The object ID of the authentication strength policy to which this combination configuration applies. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#id AuthenticationStrengthPolicyFido2CombinationConfiguration#id}. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AllowedAaguids`<sup>Required</sup> <a name="AllowedAaguids" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.allowedAaguids"></a>

```csharp
public string[] AllowedAaguids { get; set; }
```

- *Type:* string[]

A set of AAGUIDs allowed to be used as part of the `fido2` combination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#allowed_aaguids AuthenticationStrengthPolicyFido2CombinationConfiguration#allowed_aaguids}

---

##### `AuthenticationStrengthPolicyId`<sup>Required</sup> <a name="AuthenticationStrengthPolicyId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.authenticationStrengthPolicyId"></a>

```csharp
public string AuthenticationStrengthPolicyId { get; set; }
```

- *Type:* string

The object ID of the authentication strength policy to which this combination configuration applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#authentication_strength_policy_id AuthenticationStrengthPolicyFido2CombinationConfiguration#authentication_strength_policy_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#id AuthenticationStrengthPolicyFido2CombinationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.timeouts"></a>

```csharp
public AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#timeouts AuthenticationStrengthPolicyFido2CombinationConfiguration#timeouts}

---

### AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts <a name="AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azuread;

new AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#create AuthenticationStrengthPolicyFido2CombinationConfiguration#create}. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#delete AuthenticationStrengthPolicyFido2CombinationConfiguration#delete}. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#read AuthenticationStrengthPolicyFido2CombinationConfiguration#read}. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#update AuthenticationStrengthPolicyFido2CombinationConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#create AuthenticationStrengthPolicyFido2CombinationConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#delete AuthenticationStrengthPolicyFido2CombinationConfiguration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#read AuthenticationStrengthPolicyFido2CombinationConfiguration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#update AuthenticationStrengthPolicyFido2CombinationConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference <a name="AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azuread;

new AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts</a>

---



