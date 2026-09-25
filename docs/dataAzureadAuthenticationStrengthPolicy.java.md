# `dataAzureadAuthenticationStrengthPolicy` Submodule <a name="`dataAzureadAuthenticationStrengthPolicy` Submodule" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadAuthenticationStrengthPolicy <a name="DataAzureadAuthenticationStrengthPolicy" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/authentication_strength_policy azuread_authentication_strength_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_authentication_strength_policy.DataAzureadAuthenticationStrengthPolicy;

DataAzureadAuthenticationStrengthPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .objectId(java.lang.String)
//  .timeouts(DataAzureadAuthenticationStrengthPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the authentication strength policy. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/authentication_strength_policy#id DataAzureadAuthenticationStrengthPolicy#id}. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer.parameter.objectId">objectId</a></code> | <code>java.lang.String</code> | The object ID of the authentication strength policy. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeouts">DataAzureadAuthenticationStrengthPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name for the authentication strength policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/authentication_strength_policy#display_name DataAzureadAuthenticationStrengthPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/authentication_strength_policy#id DataAzureadAuthenticationStrengthPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objectId`<sup>Optional</sup> <a name="objectId" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer.parameter.objectId"></a>

- *Type:* java.lang.String

The object ID of the authentication strength policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/authentication_strength_policy#object_id DataAzureadAuthenticationStrengthPolicy#object_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeouts">DataAzureadAuthenticationStrengthPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/authentication_strength_policy#timeouts DataAzureadAuthenticationStrengthPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.resetObjectId">resetObjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.putTimeouts"></a>

```java
public void putTimeouts(DataAzureadAuthenticationStrengthPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeouts">DataAzureadAuthenticationStrengthPolicyTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetObjectId` <a name="resetObjectId" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.resetObjectId"></a>

```java
public void resetObjectId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzureadAuthenticationStrengthPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.isConstruct"></a>

```java
import io.cdktn.providers.azuread.data_azuread_authentication_strength_policy.DataAzureadAuthenticationStrengthPolicy;

DataAzureadAuthenticationStrengthPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.azuread.data_azuread_authentication_strength_policy.DataAzureadAuthenticationStrengthPolicy;

DataAzureadAuthenticationStrengthPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.isTerraformDataSource"></a>

```java
import io.cdktn.providers.azuread.data_azuread_authentication_strength_policy.DataAzureadAuthenticationStrengthPolicy;

DataAzureadAuthenticationStrengthPolicy.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.azuread.data_azuread_authentication_strength_policy.DataAzureadAuthenticationStrengthPolicy;

DataAzureadAuthenticationStrengthPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzureadAuthenticationStrengthPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAzureadAuthenticationStrengthPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzureadAuthenticationStrengthPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzureadAuthenticationStrengthPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/authentication_strength_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAzureadAuthenticationStrengthPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.allowedCombinations">allowedCombinations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.combinationConfigurations">combinationConfigurations</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList">DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference">DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.objectIdInput">objectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeouts">DataAzureadAuthenticationStrengthPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `allowedCombinations`<sup>Required</sup> <a name="allowedCombinations" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.allowedCombinations"></a>

```java
public java.util.List<java.lang.String> getAllowedCombinations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `combinationConfigurations`<sup>Required</sup> <a name="combinationConfigurations" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.combinationConfigurations"></a>

```java
public DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList getCombinationConfigurations();
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList">DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.timeouts"></a>

```java
public DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference">DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.objectIdInput"></a>

```java
public java.lang.String getObjectIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.timeoutsInput"></a>

```java
public IResolvable|DataAzureadAuthenticationStrengthPolicyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeouts">DataAzureadAuthenticationStrengthPolicyTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadAuthenticationStrengthPolicyCombinationConfigurations <a name="DataAzureadAuthenticationStrengthPolicyCombinationConfigurations" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurations.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_authentication_strength_policy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurations;

DataAzureadAuthenticationStrengthPolicyCombinationConfigurations.builder()
    .build();
```


### DataAzureadAuthenticationStrengthPolicyConfig <a name="DataAzureadAuthenticationStrengthPolicyConfig" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_authentication_strength_policy.DataAzureadAuthenticationStrengthPolicyConfig;

DataAzureadAuthenticationStrengthPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .objectId(java.lang.String)
//  .timeouts(DataAzureadAuthenticationStrengthPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the authentication strength policy. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/authentication_strength_policy#id DataAzureadAuthenticationStrengthPolicy#id}. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyConfig.property.objectId">objectId</a></code> | <code>java.lang.String</code> | The object ID of the authentication strength policy. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeouts">DataAzureadAuthenticationStrengthPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name for the authentication strength policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/authentication_strength_policy#display_name DataAzureadAuthenticationStrengthPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/authentication_strength_policy#id DataAzureadAuthenticationStrengthPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objectId`<sup>Optional</sup> <a name="objectId" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyConfig.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

The object ID of the authentication strength policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/authentication_strength_policy#object_id DataAzureadAuthenticationStrengthPolicy#object_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyConfig.property.timeouts"></a>

```java
public DataAzureadAuthenticationStrengthPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeouts">DataAzureadAuthenticationStrengthPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/authentication_strength_policy#timeouts DataAzureadAuthenticationStrengthPolicy#timeouts}

---

### DataAzureadAuthenticationStrengthPolicyTimeouts <a name="DataAzureadAuthenticationStrengthPolicyTimeouts" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_authentication_strength_policy.DataAzureadAuthenticationStrengthPolicyTimeouts;

DataAzureadAuthenticationStrengthPolicyTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/authentication_strength_policy#read DataAzureadAuthenticationStrengthPolicy#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/authentication_strength_policy#read DataAzureadAuthenticationStrengthPolicy#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList <a name="DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_authentication_strength_policy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList;

new DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList.get"></a>

```java
public DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference <a name="DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_authentication_strength_policy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference;

new DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.property.allowedAaguids">allowedAaguids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.property.allowedIssuerSkis">allowedIssuerSkis</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.property.allowedPolicyOids">allowedPolicyOids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.property.appliesToCombinations">appliesToCombinations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurations">DataAzureadAuthenticationStrengthPolicyCombinationConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedAaguids`<sup>Required</sup> <a name="allowedAaguids" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.property.allowedAaguids"></a>

```java
public java.util.List<java.lang.String> getAllowedAaguids();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedIssuerSkis`<sup>Required</sup> <a name="allowedIssuerSkis" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.property.allowedIssuerSkis"></a>

```java
public java.util.List<java.lang.String> getAllowedIssuerSkis();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedPolicyOids`<sup>Required</sup> <a name="allowedPolicyOids" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.property.allowedPolicyOids"></a>

```java
public java.util.List<java.lang.String> getAllowedPolicyOids();
```

- *Type:* java.util.List<java.lang.String>

---

##### `appliesToCombinations`<sup>Required</sup> <a name="appliesToCombinations" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.property.appliesToCombinations"></a>

```java
public java.util.List<java.lang.String> getAppliesToCombinations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurationsOutputReference.property.internalValue"></a>

```java
public DataAzureadAuthenticationStrengthPolicyCombinationConfigurations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyCombinationConfigurations">DataAzureadAuthenticationStrengthPolicyCombinationConfigurations</a>

---


### DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference <a name="DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_authentication_strength_policy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference;

new DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeouts">DataAzureadAuthenticationStrengthPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAzureadAuthenticationStrengthPolicyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azuread.dataAzureadAuthenticationStrengthPolicy.DataAzureadAuthenticationStrengthPolicyTimeouts">DataAzureadAuthenticationStrengthPolicyTimeouts</a>

---



