# `dataAzureadApplicationPublishedAppIds` Submodule <a name="`dataAzureadApplicationPublishedAppIds` Submodule" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadApplicationPublishedAppIds <a name="DataAzureadApplicationPublishedAppIds" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/application_published_app_ids azuread_application_published_app_ids}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_application_published_app_ids.DataAzureadApplicationPublishedAppIds;

DataAzureadApplicationPublishedAppIds.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .timeouts(DataAzureadApplicationPublishedAppIdsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/application_published_app_ids#id DataAzureadApplicationPublishedAppIds#id}. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts">DataAzureadApplicationPublishedAppIdsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/application_published_app_ids#id DataAzureadApplicationPublishedAppIds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts">DataAzureadApplicationPublishedAppIdsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/application_published_app_ids#timeouts DataAzureadApplicationPublishedAppIds#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.putTimeouts"></a>

```java
public void putTimeouts(DataAzureadApplicationPublishedAppIdsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts">DataAzureadApplicationPublishedAppIdsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzureadApplicationPublishedAppIds resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isConstruct"></a>

```java
import io.cdktn.providers.azuread.data_azuread_application_published_app_ids.DataAzureadApplicationPublishedAppIds;

DataAzureadApplicationPublishedAppIds.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isTerraformElement"></a>

```java
import io.cdktn.providers.azuread.data_azuread_application_published_app_ids.DataAzureadApplicationPublishedAppIds;

DataAzureadApplicationPublishedAppIds.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isTerraformDataSource"></a>

```java
import io.cdktn.providers.azuread.data_azuread_application_published_app_ids.DataAzureadApplicationPublishedAppIds;

DataAzureadApplicationPublishedAppIds.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.generateConfigForImport"></a>

```java
import io.cdktn.providers.azuread.data_azuread_application_published_app_ids.DataAzureadApplicationPublishedAppIds;

DataAzureadApplicationPublishedAppIds.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzureadApplicationPublishedAppIds.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAzureadApplicationPublishedAppIds resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzureadApplicationPublishedAppIds to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzureadApplicationPublishedAppIds that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/application_published_app_ids#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAzureadApplicationPublishedAppIds to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.result">result</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference">DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts">DataAzureadApplicationPublishedAppIdsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.result"></a>

```java
public StringMap getResult();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.timeouts"></a>

```java
public DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference">DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.timeoutsInput"></a>

```java
public IResolvable|DataAzureadApplicationPublishedAppIdsTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts">DataAzureadApplicationPublishedAppIdsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadApplicationPublishedAppIdsConfig <a name="DataAzureadApplicationPublishedAppIdsConfig" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_application_published_app_ids.DataAzureadApplicationPublishedAppIdsConfig;

DataAzureadApplicationPublishedAppIdsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .timeouts(DataAzureadApplicationPublishedAppIdsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/application_published_app_ids#id DataAzureadApplicationPublishedAppIds#id}. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts">DataAzureadApplicationPublishedAppIdsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/application_published_app_ids#id DataAzureadApplicationPublishedAppIds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.timeouts"></a>

```java
public DataAzureadApplicationPublishedAppIdsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts">DataAzureadApplicationPublishedAppIdsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/application_published_app_ids#timeouts DataAzureadApplicationPublishedAppIds#timeouts}

---

### DataAzureadApplicationPublishedAppIdsTimeouts <a name="DataAzureadApplicationPublishedAppIdsTimeouts" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_application_published_app_ids.DataAzureadApplicationPublishedAppIdsTimeouts;

DataAzureadApplicationPublishedAppIdsTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/application_published_app_ids#read DataAzureadApplicationPublishedAppIds#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/data-sources/application_published_app_ids#read DataAzureadApplicationPublishedAppIds#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference <a name="DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azuread.data_azuread_application_published_app_ids.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference;

new DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts">DataAzureadApplicationPublishedAppIdsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAzureadApplicationPublishedAppIdsTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts">DataAzureadApplicationPublishedAppIdsTimeouts</a>

---



