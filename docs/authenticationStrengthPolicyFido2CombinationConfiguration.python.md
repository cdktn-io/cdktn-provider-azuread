# `authenticationStrengthPolicyFido2CombinationConfiguration` Submodule <a name="`authenticationStrengthPolicyFido2CombinationConfiguration` Submodule" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthenticationStrengthPolicyFido2CombinationConfiguration <a name="AuthenticationStrengthPolicyFido2CombinationConfiguration" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration azuread_authentication_strength_policy_fido2_combination_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer"></a>

```python
from cdktn_provider_azuread import authentication_strength_policy_fido2_combination_configuration

authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  allowed_aaguids: typing.List[str],
  authentication_strength_policy_id: str,
  id: str = None,
  timeouts: AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.allowedAaguids">allowed_aaguids</a></code> | <code>typing.List[str]</code> | A set of AAGUIDs allowed to be used as part of the `fido2` combination. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.authenticationStrengthPolicyId">authentication_strength_policy_id</a></code> | <code>str</code> | The object ID of the authentication strength policy to which this combination configuration applies. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#id AuthenticationStrengthPolicyFido2CombinationConfiguration#id}. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allowed_aaguids`<sup>Required</sup> <a name="allowed_aaguids" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.allowedAaguids"></a>

- *Type:* typing.List[str]

A set of AAGUIDs allowed to be used as part of the `fido2` combination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#allowed_aaguids AuthenticationStrengthPolicyFido2CombinationConfiguration#allowed_aaguids}

---

##### `authentication_strength_policy_id`<sup>Required</sup> <a name="authentication_strength_policy_id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.authenticationStrengthPolicyId"></a>

- *Type:* str

The object ID of the authentication strength policy to which this combination configuration applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#authentication_strength_policy_id AuthenticationStrengthPolicyFido2CombinationConfiguration#authentication_strength_policy_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#id AuthenticationStrengthPolicyFido2CombinationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#timeouts AuthenticationStrengthPolicyFido2CombinationConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#create AuthenticationStrengthPolicyFido2CombinationConfiguration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#delete AuthenticationStrengthPolicyFido2CombinationConfiguration#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#read AuthenticationStrengthPolicyFido2CombinationConfiguration#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#update AuthenticationStrengthPolicyFido2CombinationConfiguration#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AuthenticationStrengthPolicyFido2CombinationConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isConstruct"></a>

```python
from cdktn_provider_azuread import authentication_strength_policy_fido2_combination_configuration

authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_azuread import authentication_strength_policy_fido2_combination_configuration

authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_azuread import authentication_strength_policy_fido2_combination_configuration

authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_azuread import authentication_strength_policy_fido2_combination_configuration

authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AuthenticationStrengthPolicyFido2CombinationConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AuthenticationStrengthPolicyFido2CombinationConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AuthenticationStrengthPolicyFido2CombinationConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AuthenticationStrengthPolicyFido2CombinationConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.allowedAaguidsInput">allowed_aaguids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.authenticationStrengthPolicyIdInput">authentication_strength_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.allowedAaguids">allowed_aaguids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.authenticationStrengthPolicyId">authentication_strength_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.timeouts"></a>

```python
timeouts: AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference</a>

---

##### `allowed_aaguids_input`<sup>Optional</sup> <a name="allowed_aaguids_input" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.allowedAaguidsInput"></a>

```python
allowed_aaguids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authentication_strength_policy_id_input`<sup>Optional</sup> <a name="authentication_strength_policy_id_input" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.authenticationStrengthPolicyIdInput"></a>

```python
authentication_strength_policy_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts</a>

---

##### `allowed_aaguids`<sup>Required</sup> <a name="allowed_aaguids" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.allowedAaguids"></a>

```python
allowed_aaguids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authentication_strength_policy_id`<sup>Required</sup> <a name="authentication_strength_policy_id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.authenticationStrengthPolicyId"></a>

```python
authentication_strength_policy_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AuthenticationStrengthPolicyFido2CombinationConfigurationConfig <a name="AuthenticationStrengthPolicyFido2CombinationConfigurationConfig" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_azuread import authentication_strength_policy_fido2_combination_configuration

authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  allowed_aaguids: typing.List[str],
  authentication_strength_policy_id: str,
  id: str = None,
  timeouts: AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.allowedAaguids">allowed_aaguids</a></code> | <code>typing.List[str]</code> | A set of AAGUIDs allowed to be used as part of the `fido2` combination. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.authenticationStrengthPolicyId">authentication_strength_policy_id</a></code> | <code>str</code> | The object ID of the authentication strength policy to which this combination configuration applies. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#id AuthenticationStrengthPolicyFido2CombinationConfiguration#id}. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allowed_aaguids`<sup>Required</sup> <a name="allowed_aaguids" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.allowedAaguids"></a>

```python
allowed_aaguids: typing.List[str]
```

- *Type:* typing.List[str]

A set of AAGUIDs allowed to be used as part of the `fido2` combination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#allowed_aaguids AuthenticationStrengthPolicyFido2CombinationConfiguration#allowed_aaguids}

---

##### `authentication_strength_policy_id`<sup>Required</sup> <a name="authentication_strength_policy_id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.authenticationStrengthPolicyId"></a>

```python
authentication_strength_policy_id: str
```

- *Type:* str

The object ID of the authentication strength policy to which this combination configuration applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#authentication_strength_policy_id AuthenticationStrengthPolicyFido2CombinationConfiguration#authentication_strength_policy_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#id AuthenticationStrengthPolicyFido2CombinationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.timeouts"></a>

```python
timeouts: AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts
```

- *Type:* <a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#timeouts AuthenticationStrengthPolicyFido2CombinationConfiguration#timeouts}

---

### AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts <a name="AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.Initializer"></a>

```python
from cdktn_provider_azuread import authentication_strength_policy_fido2_combination_configuration

authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#create AuthenticationStrengthPolicyFido2CombinationConfiguration#create}. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#delete AuthenticationStrengthPolicyFido2CombinationConfiguration#delete}. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#read AuthenticationStrengthPolicyFido2CombinationConfiguration#read}. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#update AuthenticationStrengthPolicyFido2CombinationConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#create AuthenticationStrengthPolicyFido2CombinationConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#delete AuthenticationStrengthPolicyFido2CombinationConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#read AuthenticationStrengthPolicyFido2CombinationConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#update AuthenticationStrengthPolicyFido2CombinationConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference <a name="AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azuread import authentication_strength_policy_fido2_combination_configuration

authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts</a>

---



