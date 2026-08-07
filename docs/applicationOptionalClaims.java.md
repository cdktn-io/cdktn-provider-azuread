# `applicationOptionalClaims` Submodule <a name="`applicationOptionalClaims` Submodule" id="@cdktn/provider-azuread.applicationOptionalClaims"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationOptionalClaimsA <a name="ApplicationOptionalClaimsA" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims azuread_application_optional_claims}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer"></a>

```java
import io.cdktn.providers.azuread.application_optional_claims.ApplicationOptionalClaimsA;

ApplicationOptionalClaimsA.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
//  .accessToken(IResolvable|java.util.List<ApplicationOptionalClaimsAccessTokenA>)
//  .id(java.lang.String)
//  .idToken(IResolvable|java.util.List<ApplicationOptionalClaimsIdTokenA>)
//  .saml2Token(IResolvable|java.util.List<ApplicationOptionalClaimsSaml2TokenA>)
//  .timeouts(ApplicationOptionalClaimsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The resource ID of the application to which these optional claims belong. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.accessToken">accessToken</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA">ApplicationOptionalClaimsAccessTokenA</a>></code> | access_token block. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#id ApplicationOptionalClaimsA#id}. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.idToken">idToken</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA">ApplicationOptionalClaimsIdTokenA</a>></code> | id_token block. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.saml2Token">saml2Token</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA">ApplicationOptionalClaimsSaml2TokenA</a>></code> | saml2_token block. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts">ApplicationOptionalClaimsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

The resource ID of the application to which these optional claims belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#application_id ApplicationOptionalClaimsA#application_id}

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.accessToken"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA">ApplicationOptionalClaimsAccessTokenA</a>>

access_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#access_token ApplicationOptionalClaimsA#access_token}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#id ApplicationOptionalClaimsA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idToken`<sup>Optional</sup> <a name="idToken" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.idToken"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA">ApplicationOptionalClaimsIdTokenA</a>>

id_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#id_token ApplicationOptionalClaimsA#id_token}

---

##### `saml2Token`<sup>Optional</sup> <a name="saml2Token" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.saml2Token"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA">ApplicationOptionalClaimsSaml2TokenA</a>>

saml2_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#saml2_token ApplicationOptionalClaimsA#saml2_token}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts">ApplicationOptionalClaimsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#timeouts ApplicationOptionalClaimsA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putAccessToken">putAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putIdToken">putIdToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putSaml2Token">putSaml2Token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetIdToken">resetIdToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetSaml2Token">resetSaml2Token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessToken` <a name="putAccessToken" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putAccessToken"></a>

```java
public void putAccessToken(IResolvable|java.util.List<ApplicationOptionalClaimsAccessTokenA> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putAccessToken.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA">ApplicationOptionalClaimsAccessTokenA</a>>

---

##### `putIdToken` <a name="putIdToken" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putIdToken"></a>

```java
public void putIdToken(IResolvable|java.util.List<ApplicationOptionalClaimsIdTokenA> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putIdToken.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA">ApplicationOptionalClaimsIdTokenA</a>>

---

##### `putSaml2Token` <a name="putSaml2Token" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putSaml2Token"></a>

```java
public void putSaml2Token(IResolvable|java.util.List<ApplicationOptionalClaimsSaml2TokenA> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putSaml2Token.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA">ApplicationOptionalClaimsSaml2TokenA</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putTimeouts"></a>

```java
public void putTimeouts(ApplicationOptionalClaimsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts">ApplicationOptionalClaimsTimeouts</a>

---

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetAccessToken"></a>

```java
public void resetAccessToken()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetId"></a>

```java
public void resetId()
```

##### `resetIdToken` <a name="resetIdToken" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetIdToken"></a>

```java
public void resetIdToken()
```

##### `resetSaml2Token` <a name="resetSaml2Token" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetSaml2Token"></a>

```java
public void resetSaml2Token()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApplicationOptionalClaimsA resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isConstruct"></a>

```java
import io.cdktn.providers.azuread.application_optional_claims.ApplicationOptionalClaimsA;

ApplicationOptionalClaimsA.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isTerraformElement"></a>

```java
import io.cdktn.providers.azuread.application_optional_claims.ApplicationOptionalClaimsA;

ApplicationOptionalClaimsA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isTerraformResource"></a>

```java
import io.cdktn.providers.azuread.application_optional_claims.ApplicationOptionalClaimsA;

ApplicationOptionalClaimsA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.generateConfigForImport"></a>

```java
import io.cdktn.providers.azuread.application_optional_claims.ApplicationOptionalClaimsA;

ApplicationOptionalClaimsA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApplicationOptionalClaimsA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApplicationOptionalClaimsA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApplicationOptionalClaimsA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApplicationOptionalClaimsA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApplicationOptionalClaimsA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.accessToken">accessToken</a></code> | <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList">ApplicationOptionalClaimsAccessTokenAList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.idToken">idToken</a></code> | <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList">ApplicationOptionalClaimsIdTokenAList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.saml2Token">saml2Token</a></code> | <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList">ApplicationOptionalClaimsSaml2TokenAList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference">ApplicationOptionalClaimsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.accessTokenInput">accessTokenInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA">ApplicationOptionalClaimsAccessTokenA</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.idTokenInput">idTokenInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA">ApplicationOptionalClaimsIdTokenA</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.saml2TokenInput">saml2TokenInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA">ApplicationOptionalClaimsSaml2TokenA</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts">ApplicationOptionalClaimsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.accessToken"></a>

```java
public ApplicationOptionalClaimsAccessTokenAList getAccessToken();
```

- *Type:* <a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList">ApplicationOptionalClaimsAccessTokenAList</a>

---

##### `idToken`<sup>Required</sup> <a name="idToken" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.idToken"></a>

```java
public ApplicationOptionalClaimsIdTokenAList getIdToken();
```

- *Type:* <a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList">ApplicationOptionalClaimsIdTokenAList</a>

---

##### `saml2Token`<sup>Required</sup> <a name="saml2Token" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.saml2Token"></a>

```java
public ApplicationOptionalClaimsSaml2TokenAList getSaml2Token();
```

- *Type:* <a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList">ApplicationOptionalClaimsSaml2TokenAList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.timeouts"></a>

```java
public ApplicationOptionalClaimsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference">ApplicationOptionalClaimsTimeoutsOutputReference</a>

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.accessTokenInput"></a>

```java
public IResolvable|java.util.List<ApplicationOptionalClaimsAccessTokenA> getAccessTokenInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA">ApplicationOptionalClaimsAccessTokenA</a>>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idTokenInput`<sup>Optional</sup> <a name="idTokenInput" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.idTokenInput"></a>

```java
public IResolvable|java.util.List<ApplicationOptionalClaimsIdTokenA> getIdTokenInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA">ApplicationOptionalClaimsIdTokenA</a>>

---

##### `saml2TokenInput`<sup>Optional</sup> <a name="saml2TokenInput" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.saml2TokenInput"></a>

```java
public IResolvable|java.util.List<ApplicationOptionalClaimsSaml2TokenA> getSaml2TokenInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA">ApplicationOptionalClaimsSaml2TokenA</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.timeoutsInput"></a>

```java
public IResolvable|ApplicationOptionalClaimsTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts">ApplicationOptionalClaimsTimeouts</a>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationOptionalClaimsAccessTokenA <a name="ApplicationOptionalClaimsAccessTokenA" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.Initializer"></a>

```java
import io.cdktn.providers.azuread.application_optional_claims.ApplicationOptionalClaimsAccessTokenA;

ApplicationOptionalClaimsAccessTokenA.builder()
    .name(java.lang.String)
//  .additionalProperties(java.util.List<java.lang.String>)
//  .essential(java.lang.Boolean|IResolvable)
//  .source(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.name">name</a></code> | <code>java.lang.String</code> | The name of the optional claim. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.additionalProperties">additionalProperties</a></code> | <code>java.util.List<java.lang.String></code> | List of additional properties of the claim. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.essential">essential</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.source">source</a></code> | <code>java.lang.String</code> | The source of the claim. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#name ApplicationOptionalClaimsA#name}

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.additionalProperties"></a>

```java
public java.util.List<java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.List<java.lang.String>

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#additional_properties ApplicationOptionalClaimsA#additional_properties}

---

##### `essential`<sup>Optional</sup> <a name="essential" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.essential"></a>

```java
public java.lang.Boolean|IResolvable getEssential();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#essential ApplicationOptionalClaimsA#essential}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#source ApplicationOptionalClaimsA#source}

---

### ApplicationOptionalClaimsAConfig <a name="ApplicationOptionalClaimsAConfig" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.Initializer"></a>

```java
import io.cdktn.providers.azuread.application_optional_claims.ApplicationOptionalClaimsAConfig;

ApplicationOptionalClaimsAConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
//  .accessToken(IResolvable|java.util.List<ApplicationOptionalClaimsAccessTokenA>)
//  .id(java.lang.String)
//  .idToken(IResolvable|java.util.List<ApplicationOptionalClaimsIdTokenA>)
//  .saml2Token(IResolvable|java.util.List<ApplicationOptionalClaimsSaml2TokenA>)
//  .timeouts(ApplicationOptionalClaimsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The resource ID of the application to which these optional claims belong. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.accessToken">accessToken</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA">ApplicationOptionalClaimsAccessTokenA</a>></code> | access_token block. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#id ApplicationOptionalClaimsA#id}. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.idToken">idToken</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA">ApplicationOptionalClaimsIdTokenA</a>></code> | id_token block. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.saml2Token">saml2Token</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA">ApplicationOptionalClaimsSaml2TokenA</a>></code> | saml2_token block. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts">ApplicationOptionalClaimsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

The resource ID of the application to which these optional claims belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#application_id ApplicationOptionalClaimsA#application_id}

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.accessToken"></a>

```java
public IResolvable|java.util.List<ApplicationOptionalClaimsAccessTokenA> getAccessToken();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA">ApplicationOptionalClaimsAccessTokenA</a>>

access_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#access_token ApplicationOptionalClaimsA#access_token}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#id ApplicationOptionalClaimsA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idToken`<sup>Optional</sup> <a name="idToken" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.idToken"></a>

```java
public IResolvable|java.util.List<ApplicationOptionalClaimsIdTokenA> getIdToken();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA">ApplicationOptionalClaimsIdTokenA</a>>

id_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#id_token ApplicationOptionalClaimsA#id_token}

---

##### `saml2Token`<sup>Optional</sup> <a name="saml2Token" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.saml2Token"></a>

```java
public IResolvable|java.util.List<ApplicationOptionalClaimsSaml2TokenA> getSaml2Token();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA">ApplicationOptionalClaimsSaml2TokenA</a>>

saml2_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#saml2_token ApplicationOptionalClaimsA#saml2_token}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAConfig.property.timeouts"></a>

```java
public ApplicationOptionalClaimsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts">ApplicationOptionalClaimsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#timeouts ApplicationOptionalClaimsA#timeouts}

---

### ApplicationOptionalClaimsIdTokenA <a name="ApplicationOptionalClaimsIdTokenA" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.Initializer"></a>

```java
import io.cdktn.providers.azuread.application_optional_claims.ApplicationOptionalClaimsIdTokenA;

ApplicationOptionalClaimsIdTokenA.builder()
    .name(java.lang.String)
//  .additionalProperties(java.util.List<java.lang.String>)
//  .essential(java.lang.Boolean|IResolvable)
//  .source(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.name">name</a></code> | <code>java.lang.String</code> | The name of the optional claim. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.additionalProperties">additionalProperties</a></code> | <code>java.util.List<java.lang.String></code> | List of additional properties of the claim. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.essential">essential</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.source">source</a></code> | <code>java.lang.String</code> | The source of the claim. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#name ApplicationOptionalClaimsA#name}

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.additionalProperties"></a>

```java
public java.util.List<java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.List<java.lang.String>

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#additional_properties ApplicationOptionalClaimsA#additional_properties}

---

##### `essential`<sup>Optional</sup> <a name="essential" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.essential"></a>

```java
public java.lang.Boolean|IResolvable getEssential();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#essential ApplicationOptionalClaimsA#essential}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#source ApplicationOptionalClaimsA#source}

---

### ApplicationOptionalClaimsSaml2TokenA <a name="ApplicationOptionalClaimsSaml2TokenA" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.Initializer"></a>

```java
import io.cdktn.providers.azuread.application_optional_claims.ApplicationOptionalClaimsSaml2TokenA;

ApplicationOptionalClaimsSaml2TokenA.builder()
    .name(java.lang.String)
//  .additionalProperties(java.util.List<java.lang.String>)
//  .essential(java.lang.Boolean|IResolvable)
//  .source(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.name">name</a></code> | <code>java.lang.String</code> | The name of the optional claim. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.additionalProperties">additionalProperties</a></code> | <code>java.util.List<java.lang.String></code> | List of additional properties of the claim. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.essential">essential</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.source">source</a></code> | <code>java.lang.String</code> | The source of the claim. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#name ApplicationOptionalClaimsA#name}

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.additionalProperties"></a>

```java
public java.util.List<java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.List<java.lang.String>

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#additional_properties ApplicationOptionalClaimsA#additional_properties}

---

##### `essential`<sup>Optional</sup> <a name="essential" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.essential"></a>

```java
public java.lang.Boolean|IResolvable getEssential();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#essential ApplicationOptionalClaimsA#essential}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#source ApplicationOptionalClaimsA#source}

---

### ApplicationOptionalClaimsTimeouts <a name="ApplicationOptionalClaimsTimeouts" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azuread.application_optional_claims.ApplicationOptionalClaimsTimeouts;

ApplicationOptionalClaimsTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#create ApplicationOptionalClaimsA#create}. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#delete ApplicationOptionalClaimsA#delete}. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#read ApplicationOptionalClaimsA#read}. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#update ApplicationOptionalClaimsA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#create ApplicationOptionalClaimsA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#delete ApplicationOptionalClaimsA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#read ApplicationOptionalClaimsA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_optional_claims#update ApplicationOptionalClaimsA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationOptionalClaimsAccessTokenAList <a name="ApplicationOptionalClaimsAccessTokenAList" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer"></a>

```java
import io.cdktn.providers.azuread.application_optional_claims.ApplicationOptionalClaimsAccessTokenAList;

new ApplicationOptionalClaimsAccessTokenAList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.get"></a>

```java
public ApplicationOptionalClaimsAccessTokenAOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA">ApplicationOptionalClaimsAccessTokenA</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApplicationOptionalClaimsAccessTokenA> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA">ApplicationOptionalClaimsAccessTokenA</a>>

---


### ApplicationOptionalClaimsAccessTokenAOutputReference <a name="ApplicationOptionalClaimsAccessTokenAOutputReference" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azuread.application_optional_claims.ApplicationOptionalClaimsAccessTokenAOutputReference;

new ApplicationOptionalClaimsAccessTokenAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resetEssential">resetEssential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resetAdditionalProperties"></a>

```java
public void resetAdditionalProperties()
```

##### `resetEssential` <a name="resetEssential" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resetEssential"></a>

```java
public void resetEssential()
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.resetSource"></a>

```java
public void resetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.essentialInput">essentialInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.additionalProperties">additionalProperties</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.essential">essential</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA">ApplicationOptionalClaimsAccessTokenA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.additionalPropertiesInput"></a>

```java
public java.util.List<java.lang.String> getAdditionalPropertiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `essentialInput`<sup>Optional</sup> <a name="essentialInput" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.essentialInput"></a>

```java
public java.lang.Boolean|IResolvable getEssentialInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.additionalProperties"></a>

```java
public java.util.List<java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.List<java.lang.String>

---

##### `essential`<sup>Required</sup> <a name="essential" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.essential"></a>

```java
public java.lang.Boolean|IResolvable getEssential();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenAOutputReference.property.internalValue"></a>

```java
public IResolvable|ApplicationOptionalClaimsAccessTokenA getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsAccessTokenA">ApplicationOptionalClaimsAccessTokenA</a>

---


### ApplicationOptionalClaimsIdTokenAList <a name="ApplicationOptionalClaimsIdTokenAList" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer"></a>

```java
import io.cdktn.providers.azuread.application_optional_claims.ApplicationOptionalClaimsIdTokenAList;

new ApplicationOptionalClaimsIdTokenAList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.get"></a>

```java
public ApplicationOptionalClaimsIdTokenAOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA">ApplicationOptionalClaimsIdTokenA</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApplicationOptionalClaimsIdTokenA> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA">ApplicationOptionalClaimsIdTokenA</a>>

---


### ApplicationOptionalClaimsIdTokenAOutputReference <a name="ApplicationOptionalClaimsIdTokenAOutputReference" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azuread.application_optional_claims.ApplicationOptionalClaimsIdTokenAOutputReference;

new ApplicationOptionalClaimsIdTokenAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resetEssential">resetEssential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resetAdditionalProperties"></a>

```java
public void resetAdditionalProperties()
```

##### `resetEssential` <a name="resetEssential" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resetEssential"></a>

```java
public void resetEssential()
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.resetSource"></a>

```java
public void resetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.essentialInput">essentialInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.additionalProperties">additionalProperties</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.essential">essential</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA">ApplicationOptionalClaimsIdTokenA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.additionalPropertiesInput"></a>

```java
public java.util.List<java.lang.String> getAdditionalPropertiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `essentialInput`<sup>Optional</sup> <a name="essentialInput" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.essentialInput"></a>

```java
public java.lang.Boolean|IResolvable getEssentialInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.additionalProperties"></a>

```java
public java.util.List<java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.List<java.lang.String>

---

##### `essential`<sup>Required</sup> <a name="essential" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.essential"></a>

```java
public java.lang.Boolean|IResolvable getEssential();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenAOutputReference.property.internalValue"></a>

```java
public IResolvable|ApplicationOptionalClaimsIdTokenA getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsIdTokenA">ApplicationOptionalClaimsIdTokenA</a>

---


### ApplicationOptionalClaimsSaml2TokenAList <a name="ApplicationOptionalClaimsSaml2TokenAList" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer"></a>

```java
import io.cdktn.providers.azuread.application_optional_claims.ApplicationOptionalClaimsSaml2TokenAList;

new ApplicationOptionalClaimsSaml2TokenAList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.get"></a>

```java
public ApplicationOptionalClaimsSaml2TokenAOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA">ApplicationOptionalClaimsSaml2TokenA</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApplicationOptionalClaimsSaml2TokenA> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA">ApplicationOptionalClaimsSaml2TokenA</a>>

---


### ApplicationOptionalClaimsSaml2TokenAOutputReference <a name="ApplicationOptionalClaimsSaml2TokenAOutputReference" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azuread.application_optional_claims.ApplicationOptionalClaimsSaml2TokenAOutputReference;

new ApplicationOptionalClaimsSaml2TokenAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resetEssential">resetEssential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resetAdditionalProperties"></a>

```java
public void resetAdditionalProperties()
```

##### `resetEssential` <a name="resetEssential" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resetEssential"></a>

```java
public void resetEssential()
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.resetSource"></a>

```java
public void resetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.essentialInput">essentialInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.additionalProperties">additionalProperties</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.essential">essential</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA">ApplicationOptionalClaimsSaml2TokenA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.additionalPropertiesInput"></a>

```java
public java.util.List<java.lang.String> getAdditionalPropertiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `essentialInput`<sup>Optional</sup> <a name="essentialInput" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.essentialInput"></a>

```java
public java.lang.Boolean|IResolvable getEssentialInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.additionalProperties"></a>

```java
public java.util.List<java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.List<java.lang.String>

---

##### `essential`<sup>Required</sup> <a name="essential" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.essential"></a>

```java
public java.lang.Boolean|IResolvable getEssential();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenAOutputReference.property.internalValue"></a>

```java
public IResolvable|ApplicationOptionalClaimsSaml2TokenA getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsSaml2TokenA">ApplicationOptionalClaimsSaml2TokenA</a>

---


### ApplicationOptionalClaimsTimeoutsOutputReference <a name="ApplicationOptionalClaimsTimeoutsOutputReference" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azuread.application_optional_claims.ApplicationOptionalClaimsTimeoutsOutputReference;

new ApplicationOptionalClaimsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts">ApplicationOptionalClaimsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApplicationOptionalClaimsTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azuread.applicationOptionalClaims.ApplicationOptionalClaimsTimeouts">ApplicationOptionalClaimsTimeouts</a>

---



