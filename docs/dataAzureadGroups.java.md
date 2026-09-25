# `dataAzureadGroups` Submodule <a name="`dataAzureadGroups` Submodule" id="@cdktn/provider-azuread.dataAzureadGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadGroups <a name="DataAzureadGroups" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/groups azuread_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_groups.DataAzureadGroups;

DataAzureadGroups.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .displayNamePrefix(java.lang.String)
//  .displayNames(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .ignoreMissing(java.lang.Boolean|IResolvable)
//  .mailEnabled(java.lang.Boolean|IResolvable)
//  .objectIds(java.util.List<java.lang.String>)
//  .returnAll(java.lang.Boolean|IResolvable)
//  .securityEnabled(java.lang.Boolean|IResolvable)
//  .timeouts(DataAzureadGroupsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.displayNamePrefix">displayNamePrefix</a></code> | <code>java.lang.String</code> | Common display name prefix of the groups. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.displayNames">displayNames</a></code> | <code>java.util.List<java.lang.String></code> | The display names of the groups. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/groups#id DataAzureadGroups#id}. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.ignoreMissing">ignoreMissing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Ignore missing groups and return groups that were found. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.mailEnabled">mailEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the groups are mail-enabled. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.objectIds">objectIds</a></code> | <code>java.util.List<java.lang.String></code> | The object IDs of the groups. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.returnAll">returnAll</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Retrieve all groups with no filter. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.securityEnabled">securityEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the groups are security-enabled. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayNamePrefix`<sup>Optional</sup> <a name="displayNamePrefix" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.displayNamePrefix"></a>

- *Type:* java.lang.String

Common display name prefix of the groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/groups#display_name_prefix DataAzureadGroups#display_name_prefix}

---

##### `displayNames`<sup>Optional</sup> <a name="displayNames" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.displayNames"></a>

- *Type:* java.util.List<java.lang.String>

The display names of the groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/groups#display_names DataAzureadGroups#display_names}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/groups#id DataAzureadGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreMissing`<sup>Optional</sup> <a name="ignoreMissing" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.ignoreMissing"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Ignore missing groups and return groups that were found.

The data source will still fail if no groups are found

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/groups#ignore_missing DataAzureadGroups#ignore_missing}

---

##### `mailEnabled`<sup>Optional</sup> <a name="mailEnabled" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.mailEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the groups are mail-enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/groups#mail_enabled DataAzureadGroups#mail_enabled}

---

##### `objectIds`<sup>Optional</sup> <a name="objectIds" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.objectIds"></a>

- *Type:* java.util.List<java.lang.String>

The object IDs of the groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/groups#object_ids DataAzureadGroups#object_ids}

---

##### `returnAll`<sup>Optional</sup> <a name="returnAll" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.returnAll"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Retrieve all groups with no filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/groups#return_all DataAzureadGroups#return_all}

---

##### `securityEnabled`<sup>Optional</sup> <a name="securityEnabled" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.securityEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the groups are security-enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/groups#security_enabled DataAzureadGroups#security_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/groups#timeouts DataAzureadGroups#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.with">with</a></code> | Applies one or more mixins to this construct. |
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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.putTimeouts"></a>

```java
public void putTimeouts(DataAzureadGroupsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a>

---

##### `resetDisplayNamePrefix` <a name="resetDisplayNamePrefix" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetDisplayNamePrefix"></a>

```java
public void resetDisplayNamePrefix()
```

##### `resetDisplayNames` <a name="resetDisplayNames" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetDisplayNames"></a>

```java
public void resetDisplayNames()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetId"></a>

```java
public void resetId()
```

##### `resetIgnoreMissing` <a name="resetIgnoreMissing" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetIgnoreMissing"></a>

```java
public void resetIgnoreMissing()
```

##### `resetMailEnabled` <a name="resetMailEnabled" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetMailEnabled"></a>

```java
public void resetMailEnabled()
```

##### `resetObjectIds` <a name="resetObjectIds" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetObjectIds"></a>

```java
public void resetObjectIds()
```

##### `resetReturnAll` <a name="resetReturnAll" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetReturnAll"></a>

```java
public void resetReturnAll()
```

##### `resetSecurityEnabled` <a name="resetSecurityEnabled" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetSecurityEnabled"></a>

```java
public void resetSecurityEnabled()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.resetTimeouts"></a>

```java
public void resetTimeouts()
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

```java
import io.cdktn.providers.azuread.data_azuread_groups.DataAzureadGroups;

DataAzureadGroups.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.isTerraformElement"></a>

```java
import io.cdktn.providers.azuread.data_azuread_groups.DataAzureadGroups;

DataAzureadGroups.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.isTerraformDataSource"></a>

```java
import io.cdktn.providers.azuread.data_azuread_groups.DataAzureadGroups;

DataAzureadGroups.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.generateConfigForImport"></a>

```java
import io.cdktn.providers.azuread.data_azuread_groups.DataAzureadGroups;

DataAzureadGroups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzureadGroups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAzureadGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzureadGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzureadGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAzureadGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.groups">groups</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList">DataAzureadGroupsGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference">DataAzureadGroupsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNamePrefixInput">displayNamePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNamesInput">displayNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.ignoreMissingInput">ignoreMissingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.mailEnabledInput">mailEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.objectIdsInput">objectIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.returnAllInput">returnAllInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.securityEnabledInput">securityEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNamePrefix">displayNamePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNames">displayNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.ignoreMissing">ignoreMissing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.mailEnabled">mailEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.objectIds">objectIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.returnAll">returnAll</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.securityEnabled">securityEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.groups"></a>

```java
public DataAzureadGroupsGroupsList getGroups();
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList">DataAzureadGroupsGroupsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.timeouts"></a>

```java
public DataAzureadGroupsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference">DataAzureadGroupsTimeoutsOutputReference</a>

---

##### `displayNamePrefixInput`<sup>Optional</sup> <a name="displayNamePrefixInput" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNamePrefixInput"></a>

```java
public java.lang.String getDisplayNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `displayNamesInput`<sup>Optional</sup> <a name="displayNamesInput" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNamesInput"></a>

```java
public java.util.List<java.lang.String> getDisplayNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreMissingInput`<sup>Optional</sup> <a name="ignoreMissingInput" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.ignoreMissingInput"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreMissingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mailEnabledInput`<sup>Optional</sup> <a name="mailEnabledInput" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.mailEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getMailEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `objectIdsInput`<sup>Optional</sup> <a name="objectIdsInput" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.objectIdsInput"></a>

```java
public java.util.List<java.lang.String> getObjectIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `returnAllInput`<sup>Optional</sup> <a name="returnAllInput" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.returnAllInput"></a>

```java
public java.lang.Boolean|IResolvable getReturnAllInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `securityEnabledInput`<sup>Optional</sup> <a name="securityEnabledInput" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.securityEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSecurityEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.timeoutsInput"></a>

```java
public IResolvable|DataAzureadGroupsTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a>

---

##### `displayNamePrefix`<sup>Required</sup> <a name="displayNamePrefix" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNamePrefix"></a>

```java
public java.lang.String getDisplayNamePrefix();
```

- *Type:* java.lang.String

---

##### `displayNames`<sup>Required</sup> <a name="displayNames" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.displayNames"></a>

```java
public java.util.List<java.lang.String> getDisplayNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ignoreMissing`<sup>Required</sup> <a name="ignoreMissing" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.ignoreMissing"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreMissing();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mailEnabled`<sup>Required</sup> <a name="mailEnabled" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.mailEnabled"></a>

```java
public java.lang.Boolean|IResolvable getMailEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `objectIds`<sup>Required</sup> <a name="objectIds" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.objectIds"></a>

```java
public java.util.List<java.lang.String> getObjectIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `returnAll`<sup>Required</sup> <a name="returnAll" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.returnAll"></a>

```java
public java.lang.Boolean|IResolvable getReturnAll();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `securityEnabled`<sup>Required</sup> <a name="securityEnabled" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.securityEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSecurityEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroups.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadGroupsConfig <a name="DataAzureadGroupsConfig" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_groups.DataAzureadGroupsConfig;

DataAzureadGroupsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .displayNamePrefix(java.lang.String)
//  .displayNames(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .ignoreMissing(java.lang.Boolean|IResolvable)
//  .mailEnabled(java.lang.Boolean|IResolvable)
//  .objectIds(java.util.List<java.lang.String>)
//  .returnAll(java.lang.Boolean|IResolvable)
//  .securityEnabled(java.lang.Boolean|IResolvable)
//  .timeouts(DataAzureadGroupsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.displayNamePrefix">displayNamePrefix</a></code> | <code>java.lang.String</code> | Common display name prefix of the groups. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.displayNames">displayNames</a></code> | <code>java.util.List<java.lang.String></code> | The display names of the groups. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/groups#id DataAzureadGroups#id}. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.ignoreMissing">ignoreMissing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Ignore missing groups and return groups that were found. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.mailEnabled">mailEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the groups are mail-enabled. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.objectIds">objectIds</a></code> | <code>java.util.List<java.lang.String></code> | The object IDs of the groups. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.returnAll">returnAll</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Retrieve all groups with no filter. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.securityEnabled">securityEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the groups are security-enabled. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayNamePrefix`<sup>Optional</sup> <a name="displayNamePrefix" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.displayNamePrefix"></a>

```java
public java.lang.String getDisplayNamePrefix();
```

- *Type:* java.lang.String

Common display name prefix of the groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/groups#display_name_prefix DataAzureadGroups#display_name_prefix}

---

##### `displayNames`<sup>Optional</sup> <a name="displayNames" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.displayNames"></a>

```java
public java.util.List<java.lang.String> getDisplayNames();
```

- *Type:* java.util.List<java.lang.String>

The display names of the groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/groups#display_names DataAzureadGroups#display_names}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/groups#id DataAzureadGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreMissing`<sup>Optional</sup> <a name="ignoreMissing" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.ignoreMissing"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreMissing();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Ignore missing groups and return groups that were found.

The data source will still fail if no groups are found

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/groups#ignore_missing DataAzureadGroups#ignore_missing}

---

##### `mailEnabled`<sup>Optional</sup> <a name="mailEnabled" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.mailEnabled"></a>

```java
public java.lang.Boolean|IResolvable getMailEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the groups are mail-enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/groups#mail_enabled DataAzureadGroups#mail_enabled}

---

##### `objectIds`<sup>Optional</sup> <a name="objectIds" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.objectIds"></a>

```java
public java.util.List<java.lang.String> getObjectIds();
```

- *Type:* java.util.List<java.lang.String>

The object IDs of the groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/groups#object_ids DataAzureadGroups#object_ids}

---

##### `returnAll`<sup>Optional</sup> <a name="returnAll" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.returnAll"></a>

```java
public java.lang.Boolean|IResolvable getReturnAll();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Retrieve all groups with no filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/groups#return_all DataAzureadGroups#return_all}

---

##### `securityEnabled`<sup>Optional</sup> <a name="securityEnabled" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.securityEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSecurityEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the groups are security-enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/groups#security_enabled DataAzureadGroups#security_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsConfig.property.timeouts"></a>

```java
public DataAzureadGroupsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/groups#timeouts DataAzureadGroups#timeouts}

---

### DataAzureadGroupsGroups <a name="DataAzureadGroupsGroups" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroups.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_groups.DataAzureadGroupsGroups;

DataAzureadGroupsGroups.builder()
    .build();
```


### DataAzureadGroupsTimeouts <a name="DataAzureadGroupsTimeouts" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_groups.DataAzureadGroupsTimeouts;

DataAzureadGroupsTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/groups#read DataAzureadGroups#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/data-sources/groups#read DataAzureadGroups#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadGroupsGroupsList <a name="DataAzureadGroupsGroupsList" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_groups.DataAzureadGroupsGroupsList;

new DataAzureadGroupsGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList.get"></a>

```java
public DataAzureadGroupsGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzureadGroupsGroupsOutputReference <a name="DataAzureadGroupsGroupsOutputReference" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_groups.DataAzureadGroupsGroupsOutputReference;

new DataAzureadGroupsGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.property.mailEnabled">mailEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.property.securityEnabled">securityEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroups">DataAzureadGroupsGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `mailEnabled`<sup>Required</sup> <a name="mailEnabled" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.property.mailEnabled"></a>

```java
public IResolvable getMailEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `securityEnabled`<sup>Required</sup> <a name="securityEnabled" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.property.securityEnabled"></a>

```java
public IResolvable getSecurityEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroupsOutputReference.property.internalValue"></a>

```java
public DataAzureadGroupsGroups getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsGroups">DataAzureadGroupsGroups</a>

---


### DataAzureadGroupsTimeoutsOutputReference <a name="DataAzureadGroupsTimeoutsOutputReference" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_groups.DataAzureadGroupsTimeoutsOutputReference;

new DataAzureadGroupsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAzureadGroupsTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azuread.dataAzureadGroups.DataAzureadGroupsTimeouts">DataAzureadGroupsTimeouts</a>

---



