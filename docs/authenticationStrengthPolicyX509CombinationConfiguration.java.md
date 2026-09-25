# `authenticationStrengthPolicyX509CombinationConfiguration` Submodule <a name="`authenticationStrengthPolicyX509CombinationConfiguration` Submodule" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthenticationStrengthPolicyX509CombinationConfiguration <a name="AuthenticationStrengthPolicyX509CombinationConfiguration" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_x509_combination_configuration azuread_authentication_strength_policy_x509_combination_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.azuread.authentication_strength_policy_x509_combination_configuration.AuthenticationStrengthPolicyX509CombinationConfiguration;

AuthenticationStrengthPolicyX509CombinationConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appliesToCombinations(java.util.List<java.lang.String>)
    .authenticationStrengthPolicyId(java.lang.String)
//  .allowedIssuerSkis(java.util.List<java.lang.String>)
//  .allowedPolicyOids(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.appliesToCombinations">appliesToCombinations</a></code> | <code>java.util.List<java.lang.String></code> | The x509 certificate authentication method combinations this configuration applies to. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.authenticationStrengthPolicyId">authenticationStrengthPolicyId</a></code> | <code>java.lang.String</code> | The object ID of the authentication strength policy to which this combination configuration applies. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.allowedIssuerSkis">allowedIssuerSkis</a></code> | <code>java.util.List<java.lang.String></code> | A set of allowed certificate issuer subject key identifier values. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.allowedPolicyOids">allowedPolicyOids</a></code> | <code>java.util.List<java.lang.String></code> | A set of allowed certificate policy OIDs. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_x509_combination_configuration#id AuthenticationStrengthPolicyX509CombinationConfiguration#id}. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts">AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appliesToCombinations`<sup>Required</sup> <a name="appliesToCombinations" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.appliesToCombinations"></a>

- *Type:* java.util.List<java.lang.String>

The x509 certificate authentication method combinations this configuration applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_x509_combination_configuration#applies_to_combinations AuthenticationStrengthPolicyX509CombinationConfiguration#applies_to_combinations}

---

##### `authenticationStrengthPolicyId`<sup>Required</sup> <a name="authenticationStrengthPolicyId" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.authenticationStrengthPolicyId"></a>

- *Type:* java.lang.String

The object ID of the authentication strength policy to which this combination configuration applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_x509_combination_configuration#authentication_strength_policy_id AuthenticationStrengthPolicyX509CombinationConfiguration#authentication_strength_policy_id}

---

##### `allowedIssuerSkis`<sup>Optional</sup> <a name="allowedIssuerSkis" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.allowedIssuerSkis"></a>

- *Type:* java.util.List<java.lang.String>

A set of allowed certificate issuer subject key identifier values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_x509_combination_configuration#allowed_issuer_skis AuthenticationStrengthPolicyX509CombinationConfiguration#allowed_issuer_skis}

---

##### `allowedPolicyOids`<sup>Optional</sup> <a name="allowedPolicyOids" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.allowedPolicyOids"></a>

- *Type:* java.util.List<java.lang.String>

A set of allowed certificate policy OIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_x509_combination_configuration#allowed_policy_oids AuthenticationStrengthPolicyX509CombinationConfiguration#allowed_policy_oids}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_x509_combination_configuration#id AuthenticationStrengthPolicyX509CombinationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts">AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_x509_combination_configuration#timeouts AuthenticationStrengthPolicyX509CombinationConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.resetAllowedIssuerSkis">resetAllowedIssuerSkis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.resetAllowedPolicyOids">resetAllowedPolicyOids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.putTimeouts"></a>

```java
public void putTimeouts(AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts">AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts</a>

---

##### `resetAllowedIssuerSkis` <a name="resetAllowedIssuerSkis" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.resetAllowedIssuerSkis"></a>

```java
public void resetAllowedIssuerSkis()
```

##### `resetAllowedPolicyOids` <a name="resetAllowedPolicyOids" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.resetAllowedPolicyOids"></a>

```java
public void resetAllowedPolicyOids()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AuthenticationStrengthPolicyX509CombinationConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.azuread.authentication_strength_policy_x509_combination_configuration.AuthenticationStrengthPolicyX509CombinationConfiguration;

AuthenticationStrengthPolicyX509CombinationConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.azuread.authentication_strength_policy_x509_combination_configuration.AuthenticationStrengthPolicyX509CombinationConfiguration;

AuthenticationStrengthPolicyX509CombinationConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.azuread.authentication_strength_policy_x509_combination_configuration.AuthenticationStrengthPolicyX509CombinationConfiguration;

AuthenticationStrengthPolicyX509CombinationConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.azuread.authentication_strength_policy_x509_combination_configuration.AuthenticationStrengthPolicyX509CombinationConfiguration;

AuthenticationStrengthPolicyX509CombinationConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AuthenticationStrengthPolicyX509CombinationConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AuthenticationStrengthPolicyX509CombinationConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AuthenticationStrengthPolicyX509CombinationConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AuthenticationStrengthPolicyX509CombinationConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_x509_combination_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AuthenticationStrengthPolicyX509CombinationConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference">AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.allowedIssuerSkisInput">allowedIssuerSkisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.allowedPolicyOidsInput">allowedPolicyOidsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.appliesToCombinationsInput">appliesToCombinationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.authenticationStrengthPolicyIdInput">authenticationStrengthPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts">AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.allowedIssuerSkis">allowedIssuerSkis</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.allowedPolicyOids">allowedPolicyOids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.appliesToCombinations">appliesToCombinations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.authenticationStrengthPolicyId">authenticationStrengthPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.timeouts"></a>

```java
public AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference">AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference</a>

---

##### `allowedIssuerSkisInput`<sup>Optional</sup> <a name="allowedIssuerSkisInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.allowedIssuerSkisInput"></a>

```java
public java.util.List<java.lang.String> getAllowedIssuerSkisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedPolicyOidsInput`<sup>Optional</sup> <a name="allowedPolicyOidsInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.allowedPolicyOidsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedPolicyOidsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `appliesToCombinationsInput`<sup>Optional</sup> <a name="appliesToCombinationsInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.appliesToCombinationsInput"></a>

```java
public java.util.List<java.lang.String> getAppliesToCombinationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authenticationStrengthPolicyIdInput`<sup>Optional</sup> <a name="authenticationStrengthPolicyIdInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.authenticationStrengthPolicyIdInput"></a>

```java
public java.lang.String getAuthenticationStrengthPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.timeoutsInput"></a>

```java
public IResolvable|AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts">AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts</a>

---

##### `allowedIssuerSkis`<sup>Required</sup> <a name="allowedIssuerSkis" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.allowedIssuerSkis"></a>

```java
public java.util.List<java.lang.String> getAllowedIssuerSkis();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedPolicyOids`<sup>Required</sup> <a name="allowedPolicyOids" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.allowedPolicyOids"></a>

```java
public java.util.List<java.lang.String> getAllowedPolicyOids();
```

- *Type:* java.util.List<java.lang.String>

---

##### `appliesToCombinations`<sup>Required</sup> <a name="appliesToCombinations" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.appliesToCombinations"></a>

```java
public java.util.List<java.lang.String> getAppliesToCombinations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authenticationStrengthPolicyId`<sup>Required</sup> <a name="authenticationStrengthPolicyId" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.authenticationStrengthPolicyId"></a>

```java
public java.lang.String getAuthenticationStrengthPolicyId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AuthenticationStrengthPolicyX509CombinationConfigurationConfig <a name="AuthenticationStrengthPolicyX509CombinationConfigurationConfig" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.azuread.authentication_strength_policy_x509_combination_configuration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig;

AuthenticationStrengthPolicyX509CombinationConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appliesToCombinations(java.util.List<java.lang.String>)
    .authenticationStrengthPolicyId(java.lang.String)
//  .allowedIssuerSkis(java.util.List<java.lang.String>)
//  .allowedPolicyOids(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.property.appliesToCombinations">appliesToCombinations</a></code> | <code>java.util.List<java.lang.String></code> | The x509 certificate authentication method combinations this configuration applies to. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.property.authenticationStrengthPolicyId">authenticationStrengthPolicyId</a></code> | <code>java.lang.String</code> | The object ID of the authentication strength policy to which this combination configuration applies. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.property.allowedIssuerSkis">allowedIssuerSkis</a></code> | <code>java.util.List<java.lang.String></code> | A set of allowed certificate issuer subject key identifier values. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.property.allowedPolicyOids">allowedPolicyOids</a></code> | <code>java.util.List<java.lang.String></code> | A set of allowed certificate policy OIDs. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_x509_combination_configuration#id AuthenticationStrengthPolicyX509CombinationConfiguration#id}. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts">AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appliesToCombinations`<sup>Required</sup> <a name="appliesToCombinations" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.property.appliesToCombinations"></a>

```java
public java.util.List<java.lang.String> getAppliesToCombinations();
```

- *Type:* java.util.List<java.lang.String>

The x509 certificate authentication method combinations this configuration applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_x509_combination_configuration#applies_to_combinations AuthenticationStrengthPolicyX509CombinationConfiguration#applies_to_combinations}

---

##### `authenticationStrengthPolicyId`<sup>Required</sup> <a name="authenticationStrengthPolicyId" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.property.authenticationStrengthPolicyId"></a>

```java
public java.lang.String getAuthenticationStrengthPolicyId();
```

- *Type:* java.lang.String

The object ID of the authentication strength policy to which this combination configuration applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_x509_combination_configuration#authentication_strength_policy_id AuthenticationStrengthPolicyX509CombinationConfiguration#authentication_strength_policy_id}

---

##### `allowedIssuerSkis`<sup>Optional</sup> <a name="allowedIssuerSkis" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.property.allowedIssuerSkis"></a>

```java
public java.util.List<java.lang.String> getAllowedIssuerSkis();
```

- *Type:* java.util.List<java.lang.String>

A set of allowed certificate issuer subject key identifier values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_x509_combination_configuration#allowed_issuer_skis AuthenticationStrengthPolicyX509CombinationConfiguration#allowed_issuer_skis}

---

##### `allowedPolicyOids`<sup>Optional</sup> <a name="allowedPolicyOids" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.property.allowedPolicyOids"></a>

```java
public java.util.List<java.lang.String> getAllowedPolicyOids();
```

- *Type:* java.util.List<java.lang.String>

A set of allowed certificate policy OIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_x509_combination_configuration#allowed_policy_oids AuthenticationStrengthPolicyX509CombinationConfiguration#allowed_policy_oids}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_x509_combination_configuration#id AuthenticationStrengthPolicyX509CombinationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationConfig.property.timeouts"></a>

```java
public AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts">AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_x509_combination_configuration#timeouts AuthenticationStrengthPolicyX509CombinationConfiguration#timeouts}

---

### AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts <a name="AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azuread.authentication_strength_policy_x509_combination_configuration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts;

AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_x509_combination_configuration#create AuthenticationStrengthPolicyX509CombinationConfiguration#create}. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_x509_combination_configuration#delete AuthenticationStrengthPolicyX509CombinationConfiguration#delete}. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_x509_combination_configuration#read AuthenticationStrengthPolicyX509CombinationConfiguration#read}. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_x509_combination_configuration#update AuthenticationStrengthPolicyX509CombinationConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_x509_combination_configuration#create AuthenticationStrengthPolicyX509CombinationConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_x509_combination_configuration#delete AuthenticationStrengthPolicyX509CombinationConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_x509_combination_configuration#read AuthenticationStrengthPolicyX509CombinationConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_x509_combination_configuration#update AuthenticationStrengthPolicyX509CombinationConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference <a name="AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azuread.authentication_strength_policy_x509_combination_configuration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference;

new AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts">AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azuread.authenticationStrengthPolicyX509CombinationConfiguration.AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts">AuthenticationStrengthPolicyX509CombinationConfigurationTimeouts</a>

---



