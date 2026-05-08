# `dataAzureadServicePrincipals` Submodule <a name="`dataAzureadServicePrincipals` Submodule" id="@cdktn/provider-azuread.dataAzureadServicePrincipals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadServicePrincipals <a name="DataAzureadServicePrincipals" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals azuread_service_principals}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_service_principals.DataAzureadServicePrincipals;

DataAzureadServicePrincipals.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .clientIds(java.util.List<java.lang.String>)
//  .displayNames(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .ignoreMissing(java.lang.Boolean|IResolvable)
//  .objectIds(java.util.List<java.lang.String>)
//  .returnAll(java.lang.Boolean|IResolvable)
//  .timeouts(DataAzureadServicePrincipalsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.clientIds">clientIds</a></code> | <code>java.util.List<java.lang.String></code> | The client IDs of the applications associated with the service principals. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.displayNames">displayNames</a></code> | <code>java.util.List<java.lang.String></code> | The display names of the applications associated with the service principals. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#id DataAzureadServicePrincipals#id}. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.ignoreMissing">ignoreMissing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Ignore missing service principals and return the service principals that were found. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.objectIds">objectIds</a></code> | <code>java.util.List<java.lang.String></code> | The object IDs of the service principals. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.returnAll">returnAll</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Fetch all service principals with no filter and return all that were found. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts">DataAzureadServicePrincipalsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clientIds`<sup>Optional</sup> <a name="clientIds" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.clientIds"></a>

- *Type:* java.util.List<java.lang.String>

The client IDs of the applications associated with the service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#client_ids DataAzureadServicePrincipals#client_ids}

---

##### `displayNames`<sup>Optional</sup> <a name="displayNames" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.displayNames"></a>

- *Type:* java.util.List<java.lang.String>

The display names of the applications associated with the service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#display_names DataAzureadServicePrincipals#display_names}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#id DataAzureadServicePrincipals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreMissing`<sup>Optional</sup> <a name="ignoreMissing" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.ignoreMissing"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Ignore missing service principals and return the service principals that were found.

The data source will still fail if no service principals are found

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#ignore_missing DataAzureadServicePrincipals#ignore_missing}

---

##### `objectIds`<sup>Optional</sup> <a name="objectIds" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.objectIds"></a>

- *Type:* java.util.List<java.lang.String>

The object IDs of the service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#object_ids DataAzureadServicePrincipals#object_ids}

---

##### `returnAll`<sup>Optional</sup> <a name="returnAll" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.returnAll"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Fetch all service principals with no filter and return all that were found.

The data source will still fail if no service principals are found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#return_all DataAzureadServicePrincipals#return_all}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts">DataAzureadServicePrincipalsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#timeouts DataAzureadServicePrincipals#timeouts}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.putTimeouts"></a>

```java
public void putTimeouts(DataAzureadServicePrincipalsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts">DataAzureadServicePrincipalsTimeouts</a>

---

##### `resetClientIds` <a name="resetClientIds" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetClientIds"></a>

```java
public void resetClientIds()
```

##### `resetDisplayNames` <a name="resetDisplayNames" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetDisplayNames"></a>

```java
public void resetDisplayNames()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetId"></a>

```java
public void resetId()
```

##### `resetIgnoreMissing` <a name="resetIgnoreMissing" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetIgnoreMissing"></a>

```java
public void resetIgnoreMissing()
```

##### `resetObjectIds` <a name="resetObjectIds" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetObjectIds"></a>

```java
public void resetObjectIds()
```

##### `resetReturnAll` <a name="resetReturnAll" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetReturnAll"></a>

```java
public void resetReturnAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetTimeouts"></a>

```java
public void resetTimeouts()
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

```java
import io.cdktn.providers.azuread.data_azuread_service_principals.DataAzureadServicePrincipals;

DataAzureadServicePrincipals.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.isTerraformElement"></a>

```java
import io.cdktn.providers.azuread.data_azuread_service_principals.DataAzureadServicePrincipals;

DataAzureadServicePrincipals.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.isTerraformDataSource"></a>

```java
import io.cdktn.providers.azuread.data_azuread_service_principals.DataAzureadServicePrincipals;

DataAzureadServicePrincipals.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.generateConfigForImport"></a>

```java
import io.cdktn.providers.azuread.data_azuread_service_principals.DataAzureadServicePrincipals;

DataAzureadServicePrincipals.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzureadServicePrincipals.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAzureadServicePrincipals resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzureadServicePrincipals to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzureadServicePrincipals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAzureadServicePrincipals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.servicePrincipals">servicePrincipals</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList">DataAzureadServicePrincipalsServicePrincipalsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference">DataAzureadServicePrincipalsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.clientIdsInput">clientIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.displayNamesInput">displayNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.ignoreMissingInput">ignoreMissingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.objectIdsInput">objectIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.returnAllInput">returnAllInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts">DataAzureadServicePrincipalsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.clientIds">clientIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.displayNames">displayNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.ignoreMissing">ignoreMissing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.objectIds">objectIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.returnAll">returnAll</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `servicePrincipals`<sup>Required</sup> <a name="servicePrincipals" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.servicePrincipals"></a>

```java
public DataAzureadServicePrincipalsServicePrincipalsList getServicePrincipals();
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList">DataAzureadServicePrincipalsServicePrincipalsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.timeouts"></a>

```java
public DataAzureadServicePrincipalsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference">DataAzureadServicePrincipalsTimeoutsOutputReference</a>

---

##### `clientIdsInput`<sup>Optional</sup> <a name="clientIdsInput" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.clientIdsInput"></a>

```java
public java.util.List<java.lang.String> getClientIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNamesInput`<sup>Optional</sup> <a name="displayNamesInput" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.displayNamesInput"></a>

```java
public java.util.List<java.lang.String> getDisplayNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreMissingInput`<sup>Optional</sup> <a name="ignoreMissingInput" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.ignoreMissingInput"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreMissingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `objectIdsInput`<sup>Optional</sup> <a name="objectIdsInput" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.objectIdsInput"></a>

```java
public java.util.List<java.lang.String> getObjectIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `returnAllInput`<sup>Optional</sup> <a name="returnAllInput" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.returnAllInput"></a>

```java
public java.lang.Boolean|IResolvable getReturnAllInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.timeoutsInput"></a>

```java
public IResolvable|DataAzureadServicePrincipalsTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts">DataAzureadServicePrincipalsTimeouts</a>

---

##### `clientIds`<sup>Required</sup> <a name="clientIds" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.clientIds"></a>

```java
public java.util.List<java.lang.String> getClientIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNames`<sup>Required</sup> <a name="displayNames" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.displayNames"></a>

```java
public java.util.List<java.lang.String> getDisplayNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ignoreMissing`<sup>Required</sup> <a name="ignoreMissing" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.ignoreMissing"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreMissing();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `objectIds`<sup>Required</sup> <a name="objectIds" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.objectIds"></a>

```java
public java.util.List<java.lang.String> getObjectIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `returnAll`<sup>Required</sup> <a name="returnAll" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.returnAll"></a>

```java
public java.lang.Boolean|IResolvable getReturnAll();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadServicePrincipalsConfig <a name="DataAzureadServicePrincipalsConfig" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_service_principals.DataAzureadServicePrincipalsConfig;

DataAzureadServicePrincipalsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .clientIds(java.util.List<java.lang.String>)
//  .displayNames(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .ignoreMissing(java.lang.Boolean|IResolvable)
//  .objectIds(java.util.List<java.lang.String>)
//  .returnAll(java.lang.Boolean|IResolvable)
//  .timeouts(DataAzureadServicePrincipalsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.clientIds">clientIds</a></code> | <code>java.util.List<java.lang.String></code> | The client IDs of the applications associated with the service principals. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.displayNames">displayNames</a></code> | <code>java.util.List<java.lang.String></code> | The display names of the applications associated with the service principals. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#id DataAzureadServicePrincipals#id}. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.ignoreMissing">ignoreMissing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Ignore missing service principals and return the service principals that were found. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.objectIds">objectIds</a></code> | <code>java.util.List<java.lang.String></code> | The object IDs of the service principals. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.returnAll">returnAll</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Fetch all service principals with no filter and return all that were found. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts">DataAzureadServicePrincipalsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clientIds`<sup>Optional</sup> <a name="clientIds" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.clientIds"></a>

```java
public java.util.List<java.lang.String> getClientIds();
```

- *Type:* java.util.List<java.lang.String>

The client IDs of the applications associated with the service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#client_ids DataAzureadServicePrincipals#client_ids}

---

##### `displayNames`<sup>Optional</sup> <a name="displayNames" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.displayNames"></a>

```java
public java.util.List<java.lang.String> getDisplayNames();
```

- *Type:* java.util.List<java.lang.String>

The display names of the applications associated with the service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#display_names DataAzureadServicePrincipals#display_names}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#id DataAzureadServicePrincipals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreMissing`<sup>Optional</sup> <a name="ignoreMissing" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.ignoreMissing"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreMissing();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Ignore missing service principals and return the service principals that were found.

The data source will still fail if no service principals are found

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#ignore_missing DataAzureadServicePrincipals#ignore_missing}

---

##### `objectIds`<sup>Optional</sup> <a name="objectIds" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.objectIds"></a>

```java
public java.util.List<java.lang.String> getObjectIds();
```

- *Type:* java.util.List<java.lang.String>

The object IDs of the service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#object_ids DataAzureadServicePrincipals#object_ids}

---

##### `returnAll`<sup>Optional</sup> <a name="returnAll" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.returnAll"></a>

```java
public java.lang.Boolean|IResolvable getReturnAll();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Fetch all service principals with no filter and return all that were found.

The data source will still fail if no service principals are found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#return_all DataAzureadServicePrincipals#return_all}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.timeouts"></a>

```java
public DataAzureadServicePrincipalsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts">DataAzureadServicePrincipalsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#timeouts DataAzureadServicePrincipals#timeouts}

---

### DataAzureadServicePrincipalsServicePrincipals <a name="DataAzureadServicePrincipalsServicePrincipals" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipals.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_service_principals.DataAzureadServicePrincipalsServicePrincipals;

DataAzureadServicePrincipalsServicePrincipals.builder()
    .build();
```


### DataAzureadServicePrincipalsTimeouts <a name="DataAzureadServicePrincipalsTimeouts" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_service_principals.DataAzureadServicePrincipalsTimeouts;

DataAzureadServicePrincipalsTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#read DataAzureadServicePrincipals#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/data-sources/service_principals#read DataAzureadServicePrincipals#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadServicePrincipalsServicePrincipalsList <a name="DataAzureadServicePrincipalsServicePrincipalsList" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_service_principals.DataAzureadServicePrincipalsServicePrincipalsList;

new DataAzureadServicePrincipalsServicePrincipalsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.get"></a>

```java
public DataAzureadServicePrincipalsServicePrincipalsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzureadServicePrincipalsServicePrincipalsOutputReference <a name="DataAzureadServicePrincipalsServicePrincipalsOutputReference" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_service_principals.DataAzureadServicePrincipalsServicePrincipalsOutputReference;

new DataAzureadServicePrincipalsServicePrincipalsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.accountEnabled">accountEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.applicationTenantId">applicationTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.appRoleAssignmentRequired">appRoleAssignmentRequired</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.preferredSingleSignOnMode">preferredSingleSignOnMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.samlMetadataUrl">samlMetadataUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.servicePrincipalNames">servicePrincipalNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.signInAudience">signInAudience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipals">DataAzureadServicePrincipalsServicePrincipals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountEnabled`<sup>Required</sup> <a name="accountEnabled" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.accountEnabled"></a>

```java
public IResolvable getAccountEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `applicationTenantId`<sup>Required</sup> <a name="applicationTenantId" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.applicationTenantId"></a>

```java
public java.lang.String getApplicationTenantId();
```

- *Type:* java.lang.String

---

##### `appRoleAssignmentRequired`<sup>Required</sup> <a name="appRoleAssignmentRequired" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.appRoleAssignmentRequired"></a>

```java
public IResolvable getAppRoleAssignmentRequired();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `preferredSingleSignOnMode`<sup>Required</sup> <a name="preferredSingleSignOnMode" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.preferredSingleSignOnMode"></a>

```java
public java.lang.String getPreferredSingleSignOnMode();
```

- *Type:* java.lang.String

---

##### `samlMetadataUrl`<sup>Required</sup> <a name="samlMetadataUrl" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.samlMetadataUrl"></a>

```java
public java.lang.String getSamlMetadataUrl();
```

- *Type:* java.lang.String

---

##### `servicePrincipalNames`<sup>Required</sup> <a name="servicePrincipalNames" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.servicePrincipalNames"></a>

```java
public java.util.List<java.lang.String> getServicePrincipalNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `signInAudience`<sup>Required</sup> <a name="signInAudience" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.signInAudience"></a>

```java
public java.lang.String getSignInAudience();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.internalValue"></a>

```java
public DataAzureadServicePrincipalsServicePrincipals getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipals">DataAzureadServicePrincipalsServicePrincipals</a>

---


### DataAzureadServicePrincipalsTimeoutsOutputReference <a name="DataAzureadServicePrincipalsTimeoutsOutputReference" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_service_principals.DataAzureadServicePrincipalsTimeoutsOutputReference;

new DataAzureadServicePrincipalsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts">DataAzureadServicePrincipalsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAzureadServicePrincipalsTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts">DataAzureadServicePrincipalsTimeouts</a>

---



