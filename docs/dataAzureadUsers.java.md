# `dataAzureadUsers` Submodule <a name="`dataAzureadUsers` Submodule" id="@cdktn/provider-azuread.dataAzureadUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadUsers <a name="DataAzureadUsers" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/users azuread_users}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_users.DataAzureadUsers;

DataAzureadUsers.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .employeeIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .ignoreMissing(java.lang.Boolean|IResolvable)
//  .mailNicknames(java.util.List<java.lang.String>)
//  .mails(java.util.List<java.lang.String>)
//  .objectIds(java.util.List<java.lang.String>)
//  .returnAll(java.lang.Boolean|IResolvable)
//  .timeouts(DataAzureadUsersTimeouts)
//  .userPrincipalNames(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.employeeIds">employeeIds</a></code> | <code>java.util.List<java.lang.String></code> | The employee identifier assigned to the user by the organisation. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/users#id DataAzureadUsers#id}. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.ignoreMissing">ignoreMissing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Ignore missing users and return users that were found. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.mailNicknames">mailNicknames</a></code> | <code>java.util.List<java.lang.String></code> | The email aliases of the users. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.mails">mails</a></code> | <code>java.util.List<java.lang.String></code> | The SMTP address of the users. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.objectIds">objectIds</a></code> | <code>java.util.List<java.lang.String></code> | The object IDs of the users. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.returnAll">returnAll</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Fetch all users with no filter and return all that were found. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts">DataAzureadUsersTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.userPrincipalNames">userPrincipalNames</a></code> | <code>java.util.List<java.lang.String></code> | The user principal names (UPNs) of the users. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `employeeIds`<sup>Optional</sup> <a name="employeeIds" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.employeeIds"></a>

- *Type:* java.util.List<java.lang.String>

The employee identifier assigned to the user by the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/users#employee_ids DataAzureadUsers#employee_ids}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/users#id DataAzureadUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreMissing`<sup>Optional</sup> <a name="ignoreMissing" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.ignoreMissing"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Ignore missing users and return users that were found.

The data source will still fail if no users are found

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/users#ignore_missing DataAzureadUsers#ignore_missing}

---

##### `mailNicknames`<sup>Optional</sup> <a name="mailNicknames" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.mailNicknames"></a>

- *Type:* java.util.List<java.lang.String>

The email aliases of the users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/users#mail_nicknames DataAzureadUsers#mail_nicknames}

---

##### `mails`<sup>Optional</sup> <a name="mails" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.mails"></a>

- *Type:* java.util.List<java.lang.String>

The SMTP address of the users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/users#mails DataAzureadUsers#mails}

---

##### `objectIds`<sup>Optional</sup> <a name="objectIds" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.objectIds"></a>

- *Type:* java.util.List<java.lang.String>

The object IDs of the users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/users#object_ids DataAzureadUsers#object_ids}

---

##### `returnAll`<sup>Optional</sup> <a name="returnAll" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.returnAll"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Fetch all users with no filter and return all that were found.

The data source will still fail if no users are found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/users#return_all DataAzureadUsers#return_all}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts">DataAzureadUsersTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/users#timeouts DataAzureadUsers#timeouts}

---

##### `userPrincipalNames`<sup>Optional</sup> <a name="userPrincipalNames" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.userPrincipalNames"></a>

- *Type:* java.util.List<java.lang.String>

The user principal names (UPNs) of the users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/users#user_principal_names DataAzureadUsers#user_principal_names}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetEmployeeIds">resetEmployeeIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetIgnoreMissing">resetIgnoreMissing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetMailNicknames">resetMailNicknames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetMails">resetMails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetObjectIds">resetObjectIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetReturnAll">resetReturnAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetUserPrincipalNames">resetUserPrincipalNames</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.putTimeouts"></a>

```java
public void putTimeouts(DataAzureadUsersTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts">DataAzureadUsersTimeouts</a>

---

##### `resetEmployeeIds` <a name="resetEmployeeIds" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetEmployeeIds"></a>

```java
public void resetEmployeeIds()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetId"></a>

```java
public void resetId()
```

##### `resetIgnoreMissing` <a name="resetIgnoreMissing" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetIgnoreMissing"></a>

```java
public void resetIgnoreMissing()
```

##### `resetMailNicknames` <a name="resetMailNicknames" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetMailNicknames"></a>

```java
public void resetMailNicknames()
```

##### `resetMails` <a name="resetMails" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetMails"></a>

```java
public void resetMails()
```

##### `resetObjectIds` <a name="resetObjectIds" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetObjectIds"></a>

```java
public void resetObjectIds()
```

##### `resetReturnAll` <a name="resetReturnAll" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetReturnAll"></a>

```java
public void resetReturnAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserPrincipalNames` <a name="resetUserPrincipalNames" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetUserPrincipalNames"></a>

```java
public void resetUserPrincipalNames()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzureadUsers resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.isConstruct"></a>

```java
import io.cdktn.providers.azuread.data_azuread_users.DataAzureadUsers;

DataAzureadUsers.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.isTerraformElement"></a>

```java
import io.cdktn.providers.azuread.data_azuread_users.DataAzureadUsers;

DataAzureadUsers.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.isTerraformDataSource"></a>

```java
import io.cdktn.providers.azuread.data_azuread_users.DataAzureadUsers;

DataAzureadUsers.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.generateConfigForImport"></a>

```java
import io.cdktn.providers.azuread.data_azuread_users.DataAzureadUsers;

DataAzureadUsers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzureadUsers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAzureadUsers resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzureadUsers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzureadUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/users#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAzureadUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference">DataAzureadUsersTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.users">users</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList">DataAzureadUsersUsersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.employeeIdsInput">employeeIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.ignoreMissingInput">ignoreMissingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.mailNicknamesInput">mailNicknamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.mailsInput">mailsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.objectIdsInput">objectIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.returnAllInput">returnAllInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts">DataAzureadUsersTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.userPrincipalNamesInput">userPrincipalNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.employeeIds">employeeIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.ignoreMissing">ignoreMissing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.mailNicknames">mailNicknames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.mails">mails</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.objectIds">objectIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.returnAll">returnAll</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.userPrincipalNames">userPrincipalNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.timeouts"></a>

```java
public DataAzureadUsersTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference">DataAzureadUsersTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.users"></a>

```java
public DataAzureadUsersUsersList getUsers();
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList">DataAzureadUsersUsersList</a>

---

##### `employeeIdsInput`<sup>Optional</sup> <a name="employeeIdsInput" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.employeeIdsInput"></a>

```java
public java.util.List<java.lang.String> getEmployeeIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreMissingInput`<sup>Optional</sup> <a name="ignoreMissingInput" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.ignoreMissingInput"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreMissingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mailNicknamesInput`<sup>Optional</sup> <a name="mailNicknamesInput" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.mailNicknamesInput"></a>

```java
public java.util.List<java.lang.String> getMailNicknamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mailsInput`<sup>Optional</sup> <a name="mailsInput" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.mailsInput"></a>

```java
public java.util.List<java.lang.String> getMailsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `objectIdsInput`<sup>Optional</sup> <a name="objectIdsInput" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.objectIdsInput"></a>

```java
public java.util.List<java.lang.String> getObjectIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `returnAllInput`<sup>Optional</sup> <a name="returnAllInput" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.returnAllInput"></a>

```java
public java.lang.Boolean|IResolvable getReturnAllInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.timeoutsInput"></a>

```java
public IResolvable|DataAzureadUsersTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts">DataAzureadUsersTimeouts</a>

---

##### `userPrincipalNamesInput`<sup>Optional</sup> <a name="userPrincipalNamesInput" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.userPrincipalNamesInput"></a>

```java
public java.util.List<java.lang.String> getUserPrincipalNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `employeeIds`<sup>Required</sup> <a name="employeeIds" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.employeeIds"></a>

```java
public java.util.List<java.lang.String> getEmployeeIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ignoreMissing`<sup>Required</sup> <a name="ignoreMissing" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.ignoreMissing"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreMissing();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mailNicknames`<sup>Required</sup> <a name="mailNicknames" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.mailNicknames"></a>

```java
public java.util.List<java.lang.String> getMailNicknames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mails`<sup>Required</sup> <a name="mails" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.mails"></a>

```java
public java.util.List<java.lang.String> getMails();
```

- *Type:* java.util.List<java.lang.String>

---

##### `objectIds`<sup>Required</sup> <a name="objectIds" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.objectIds"></a>

```java
public java.util.List<java.lang.String> getObjectIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `returnAll`<sup>Required</sup> <a name="returnAll" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.returnAll"></a>

```java
public java.lang.Boolean|IResolvable getReturnAll();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `userPrincipalNames`<sup>Required</sup> <a name="userPrincipalNames" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.userPrincipalNames"></a>

```java
public java.util.List<java.lang.String> getUserPrincipalNames();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadUsersConfig <a name="DataAzureadUsersConfig" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_users.DataAzureadUsersConfig;

DataAzureadUsersConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .employeeIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .ignoreMissing(java.lang.Boolean|IResolvable)
//  .mailNicknames(java.util.List<java.lang.String>)
//  .mails(java.util.List<java.lang.String>)
//  .objectIds(java.util.List<java.lang.String>)
//  .returnAll(java.lang.Boolean|IResolvable)
//  .timeouts(DataAzureadUsersTimeouts)
//  .userPrincipalNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.employeeIds">employeeIds</a></code> | <code>java.util.List<java.lang.String></code> | The employee identifier assigned to the user by the organisation. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/users#id DataAzureadUsers#id}. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.ignoreMissing">ignoreMissing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Ignore missing users and return users that were found. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.mailNicknames">mailNicknames</a></code> | <code>java.util.List<java.lang.String></code> | The email aliases of the users. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.mails">mails</a></code> | <code>java.util.List<java.lang.String></code> | The SMTP address of the users. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.objectIds">objectIds</a></code> | <code>java.util.List<java.lang.String></code> | The object IDs of the users. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.returnAll">returnAll</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Fetch all users with no filter and return all that were found. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts">DataAzureadUsersTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.userPrincipalNames">userPrincipalNames</a></code> | <code>java.util.List<java.lang.String></code> | The user principal names (UPNs) of the users. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `employeeIds`<sup>Optional</sup> <a name="employeeIds" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.employeeIds"></a>

```java
public java.util.List<java.lang.String> getEmployeeIds();
```

- *Type:* java.util.List<java.lang.String>

The employee identifier assigned to the user by the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/users#employee_ids DataAzureadUsers#employee_ids}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/users#id DataAzureadUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreMissing`<sup>Optional</sup> <a name="ignoreMissing" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.ignoreMissing"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreMissing();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Ignore missing users and return users that were found.

The data source will still fail if no users are found

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/users#ignore_missing DataAzureadUsers#ignore_missing}

---

##### `mailNicknames`<sup>Optional</sup> <a name="mailNicknames" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.mailNicknames"></a>

```java
public java.util.List<java.lang.String> getMailNicknames();
```

- *Type:* java.util.List<java.lang.String>

The email aliases of the users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/users#mail_nicknames DataAzureadUsers#mail_nicknames}

---

##### `mails`<sup>Optional</sup> <a name="mails" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.mails"></a>

```java
public java.util.List<java.lang.String> getMails();
```

- *Type:* java.util.List<java.lang.String>

The SMTP address of the users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/users#mails DataAzureadUsers#mails}

---

##### `objectIds`<sup>Optional</sup> <a name="objectIds" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.objectIds"></a>

```java
public java.util.List<java.lang.String> getObjectIds();
```

- *Type:* java.util.List<java.lang.String>

The object IDs of the users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/users#object_ids DataAzureadUsers#object_ids}

---

##### `returnAll`<sup>Optional</sup> <a name="returnAll" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.returnAll"></a>

```java
public java.lang.Boolean|IResolvable getReturnAll();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Fetch all users with no filter and return all that were found.

The data source will still fail if no users are found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/users#return_all DataAzureadUsers#return_all}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.timeouts"></a>

```java
public DataAzureadUsersTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts">DataAzureadUsersTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/users#timeouts DataAzureadUsers#timeouts}

---

##### `userPrincipalNames`<sup>Optional</sup> <a name="userPrincipalNames" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.userPrincipalNames"></a>

```java
public java.util.List<java.lang.String> getUserPrincipalNames();
```

- *Type:* java.util.List<java.lang.String>

The user principal names (UPNs) of the users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/users#user_principal_names DataAzureadUsers#user_principal_names}

---

### DataAzureadUsersTimeouts <a name="DataAzureadUsersTimeouts" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_users.DataAzureadUsersTimeouts;

DataAzureadUsersTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/users#read DataAzureadUsers#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/users#read DataAzureadUsers#read}.

---

### DataAzureadUsersUsers <a name="DataAzureadUsersUsers" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsers.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_users.DataAzureadUsersUsers;

DataAzureadUsersUsers.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzureadUsersTimeoutsOutputReference <a name="DataAzureadUsersTimeoutsOutputReference" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_users.DataAzureadUsersTimeoutsOutputReference;

new DataAzureadUsersTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts">DataAzureadUsersTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAzureadUsersTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts">DataAzureadUsersTimeouts</a>

---


### DataAzureadUsersUsersList <a name="DataAzureadUsersUsersList" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_users.DataAzureadUsersUsersList;

new DataAzureadUsersUsersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.get"></a>

```java
public DataAzureadUsersUsersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzureadUsersUsersOutputReference <a name="DataAzureadUsersUsersOutputReference" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_users.DataAzureadUsersUsersOutputReference;

new DataAzureadUsersUsersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.accountEnabled">accountEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.employeeId">employeeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.mail">mail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.mailNickname">mailNickname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.onpremisesImmutableId">onpremisesImmutableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.onpremisesSamAccountName">onpremisesSamAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.onpremisesUserPrincipalName">onpremisesUserPrincipalName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.usageLocation">usageLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.userPrincipalName">userPrincipalName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsers">DataAzureadUsersUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountEnabled`<sup>Required</sup> <a name="accountEnabled" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.accountEnabled"></a>

```java
public IResolvable getAccountEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `employeeId`<sup>Required</sup> <a name="employeeId" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.employeeId"></a>

```java
public java.lang.String getEmployeeId();
```

- *Type:* java.lang.String

---

##### `mail`<sup>Required</sup> <a name="mail" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.mail"></a>

```java
public java.lang.String getMail();
```

- *Type:* java.lang.String

---

##### `mailNickname`<sup>Required</sup> <a name="mailNickname" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.mailNickname"></a>

```java
public java.lang.String getMailNickname();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `onpremisesImmutableId`<sup>Required</sup> <a name="onpremisesImmutableId" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.onpremisesImmutableId"></a>

```java
public java.lang.String getOnpremisesImmutableId();
```

- *Type:* java.lang.String

---

##### `onpremisesSamAccountName`<sup>Required</sup> <a name="onpremisesSamAccountName" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.onpremisesSamAccountName"></a>

```java
public java.lang.String getOnpremisesSamAccountName();
```

- *Type:* java.lang.String

---

##### `onpremisesUserPrincipalName`<sup>Required</sup> <a name="onpremisesUserPrincipalName" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.onpremisesUserPrincipalName"></a>

```java
public java.lang.String getOnpremisesUserPrincipalName();
```

- *Type:* java.lang.String

---

##### `usageLocation`<sup>Required</sup> <a name="usageLocation" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.usageLocation"></a>

```java
public java.lang.String getUsageLocation();
```

- *Type:* java.lang.String

---

##### `userPrincipalName`<sup>Required</sup> <a name="userPrincipalName" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.userPrincipalName"></a>

```java
public java.lang.String getUserPrincipalName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.internalValue"></a>

```java
public DataAzureadUsersUsers getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadUsers.DataAzureadUsersUsers">DataAzureadUsersUsers</a>

---



