# `applicationRegistration` Submodule <a name="`applicationRegistration` Submodule" id="@cdktn/provider-azuread.applicationRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationRegistration <a name="ApplicationRegistration" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration azuread_application_registration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer"></a>

```java
import io.cdktn.providers.azuread.application_registration.ApplicationRegistration;

ApplicationRegistration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
//  .description(java.lang.String)
//  .groupMembershipClaims(java.util.List<java.lang.String>)
//  .homepageUrl(java.lang.String)
//  .id(java.lang.String)
//  .implicitAccessTokenIssuanceEnabled(java.lang.Boolean|IResolvable)
//  .implicitIdTokenIssuanceEnabled(java.lang.Boolean|IResolvable)
//  .logoutUrl(java.lang.String)
//  .marketingUrl(java.lang.String)
//  .notes(java.lang.String)
//  .privacyStatementUrl(java.lang.String)
//  .requestedAccessTokenVersion(java.lang.Number)
//  .serviceManagementReference(java.lang.String)
//  .signInAudience(java.lang.String)
//  .supportUrl(java.lang.String)
//  .termsOfServiceUrl(java.lang.String)
//  .timeouts(ApplicationRegistrationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the application. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the application as shown to end users. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.groupMembershipClaims">groupMembershipClaims</a></code> | <code>java.util.List<java.lang.String></code> | Configures the `groups` claim that the app expects issued in a user or OAuth access token. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.homepageUrl">homepageUrl</a></code> | <code>java.lang.String</code> | URL of the home page for the application. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#id ApplicationRegistration#id}. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.implicitAccessTokenIssuanceEnabled">implicitAccessTokenIssuanceEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether this application can request an access token using OAuth implicit flow. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.implicitIdTokenIssuanceEnabled">implicitIdTokenIssuanceEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether this application can request an ID token using OAuth implicit flow. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.logoutUrl">logoutUrl</a></code> | <code>java.lang.String</code> | URL of the logout page for the application, where the session is cleared for single sign-out. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.marketingUrl">marketingUrl</a></code> | <code>java.lang.String</code> | URL of the marketing page for the application. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.notes">notes</a></code> | <code>java.lang.String</code> | User-specified notes relevant for the management of the application. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.privacyStatementUrl">privacyStatementUrl</a></code> | <code>java.lang.String</code> | URL of the privacy statement for the application. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.requestedAccessTokenVersion">requestedAccessTokenVersion</a></code> | <code>java.lang.Number</code> | The access token version expected by this resource. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.serviceManagementReference">serviceManagementReference</a></code> | <code>java.lang.String</code> | References application or contact information from a service or asset management database. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.signInAudience">signInAudience</a></code> | <code>java.lang.String</code> | The Microsoft account types that are supported for the current application. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | URL of the support page for the application. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.termsOfServiceUrl">termsOfServiceUrl</a></code> | <code>java.lang.String</code> | URL of the terms of service statement for the application. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#display_name ApplicationRegistration#display_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the application as shown to end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#description ApplicationRegistration#description}

---

##### `groupMembershipClaims`<sup>Optional</sup> <a name="groupMembershipClaims" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.groupMembershipClaims"></a>

- *Type:* java.util.List<java.lang.String>

Configures the `groups` claim that the app expects issued in a user or OAuth access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#group_membership_claims ApplicationRegistration#group_membership_claims}

---

##### `homepageUrl`<sup>Optional</sup> <a name="homepageUrl" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.homepageUrl"></a>

- *Type:* java.lang.String

URL of the home page for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#homepage_url ApplicationRegistration#homepage_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#id ApplicationRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `implicitAccessTokenIssuanceEnabled`<sup>Optional</sup> <a name="implicitAccessTokenIssuanceEnabled" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.implicitAccessTokenIssuanceEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether this application can request an access token using OAuth implicit flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#implicit_access_token_issuance_enabled ApplicationRegistration#implicit_access_token_issuance_enabled}

---

##### `implicitIdTokenIssuanceEnabled`<sup>Optional</sup> <a name="implicitIdTokenIssuanceEnabled" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.implicitIdTokenIssuanceEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether this application can request an ID token using OAuth implicit flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#implicit_id_token_issuance_enabled ApplicationRegistration#implicit_id_token_issuance_enabled}

---

##### `logoutUrl`<sup>Optional</sup> <a name="logoutUrl" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.logoutUrl"></a>

- *Type:* java.lang.String

URL of the logout page for the application, where the session is cleared for single sign-out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#logout_url ApplicationRegistration#logout_url}

---

##### `marketingUrl`<sup>Optional</sup> <a name="marketingUrl" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.marketingUrl"></a>

- *Type:* java.lang.String

URL of the marketing page for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#marketing_url ApplicationRegistration#marketing_url}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.notes"></a>

- *Type:* java.lang.String

User-specified notes relevant for the management of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#notes ApplicationRegistration#notes}

---

##### `privacyStatementUrl`<sup>Optional</sup> <a name="privacyStatementUrl" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.privacyStatementUrl"></a>

- *Type:* java.lang.String

URL of the privacy statement for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#privacy_statement_url ApplicationRegistration#privacy_statement_url}

---

##### `requestedAccessTokenVersion`<sup>Optional</sup> <a name="requestedAccessTokenVersion" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.requestedAccessTokenVersion"></a>

- *Type:* java.lang.Number

The access token version expected by this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#requested_access_token_version ApplicationRegistration#requested_access_token_version}

---

##### `serviceManagementReference`<sup>Optional</sup> <a name="serviceManagementReference" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.serviceManagementReference"></a>

- *Type:* java.lang.String

References application or contact information from a service or asset management database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#service_management_reference ApplicationRegistration#service_management_reference}

---

##### `signInAudience`<sup>Optional</sup> <a name="signInAudience" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.signInAudience"></a>

- *Type:* java.lang.String

The Microsoft account types that are supported for the current application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#sign_in_audience ApplicationRegistration#sign_in_audience}

---

##### `supportUrl`<sup>Optional</sup> <a name="supportUrl" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.supportUrl"></a>

- *Type:* java.lang.String

URL of the support page for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#support_url ApplicationRegistration#support_url}

---

##### `termsOfServiceUrl`<sup>Optional</sup> <a name="termsOfServiceUrl" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.termsOfServiceUrl"></a>

- *Type:* java.lang.String

URL of the terms of service statement for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#terms_of_service_url ApplicationRegistration#terms_of_service_url}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#timeouts ApplicationRegistration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetGroupMembershipClaims">resetGroupMembershipClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetHomepageUrl">resetHomepageUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetImplicitAccessTokenIssuanceEnabled">resetImplicitAccessTokenIssuanceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetImplicitIdTokenIssuanceEnabled">resetImplicitIdTokenIssuanceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetLogoutUrl">resetLogoutUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetMarketingUrl">resetMarketingUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetPrivacyStatementUrl">resetPrivacyStatementUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetRequestedAccessTokenVersion">resetRequestedAccessTokenVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetServiceManagementReference">resetServiceManagementReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetSignInAudience">resetSignInAudience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetSupportUrl">resetSupportUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetTermsOfServiceUrl">resetTermsOfServiceUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.putTimeouts"></a>

```java
public void putTimeouts(ApplicationRegistrationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGroupMembershipClaims` <a name="resetGroupMembershipClaims" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetGroupMembershipClaims"></a>

```java
public void resetGroupMembershipClaims()
```

##### `resetHomepageUrl` <a name="resetHomepageUrl" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetHomepageUrl"></a>

```java
public void resetHomepageUrl()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetId"></a>

```java
public void resetId()
```

##### `resetImplicitAccessTokenIssuanceEnabled` <a name="resetImplicitAccessTokenIssuanceEnabled" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetImplicitAccessTokenIssuanceEnabled"></a>

```java
public void resetImplicitAccessTokenIssuanceEnabled()
```

##### `resetImplicitIdTokenIssuanceEnabled` <a name="resetImplicitIdTokenIssuanceEnabled" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetImplicitIdTokenIssuanceEnabled"></a>

```java
public void resetImplicitIdTokenIssuanceEnabled()
```

##### `resetLogoutUrl` <a name="resetLogoutUrl" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetLogoutUrl"></a>

```java
public void resetLogoutUrl()
```

##### `resetMarketingUrl` <a name="resetMarketingUrl" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetMarketingUrl"></a>

```java
public void resetMarketingUrl()
```

##### `resetNotes` <a name="resetNotes" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetNotes"></a>

```java
public void resetNotes()
```

##### `resetPrivacyStatementUrl` <a name="resetPrivacyStatementUrl" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetPrivacyStatementUrl"></a>

```java
public void resetPrivacyStatementUrl()
```

##### `resetRequestedAccessTokenVersion` <a name="resetRequestedAccessTokenVersion" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetRequestedAccessTokenVersion"></a>

```java
public void resetRequestedAccessTokenVersion()
```

##### `resetServiceManagementReference` <a name="resetServiceManagementReference" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetServiceManagementReference"></a>

```java
public void resetServiceManagementReference()
```

##### `resetSignInAudience` <a name="resetSignInAudience" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetSignInAudience"></a>

```java
public void resetSignInAudience()
```

##### `resetSupportUrl` <a name="resetSupportUrl" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetSupportUrl"></a>

```java
public void resetSupportUrl()
```

##### `resetTermsOfServiceUrl` <a name="resetTermsOfServiceUrl" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetTermsOfServiceUrl"></a>

```java
public void resetTermsOfServiceUrl()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApplicationRegistration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.isConstruct"></a>

```java
import io.cdktn.providers.azuread.application_registration.ApplicationRegistration;

ApplicationRegistration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformElement"></a>

```java
import io.cdktn.providers.azuread.application_registration.ApplicationRegistration;

ApplicationRegistration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformResource"></a>

```java
import io.cdktn.providers.azuread.application_registration.ApplicationRegistration;

ApplicationRegistration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport"></a>

```java
import io.cdktn.providers.azuread.application_registration.ApplicationRegistration;

ApplicationRegistration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApplicationRegistration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApplicationRegistration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApplicationRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApplicationRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApplicationRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.disabledByMicrosoft">disabledByMicrosoft</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.publisherDomain">publisherDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference">ApplicationRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.groupMembershipClaimsInput">groupMembershipClaimsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.homepageUrlInput">homepageUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitAccessTokenIssuanceEnabledInput">implicitAccessTokenIssuanceEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitIdTokenIssuanceEnabledInput">implicitIdTokenIssuanceEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.logoutUrlInput">logoutUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.marketingUrlInput">marketingUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.notesInput">notesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.privacyStatementUrlInput">privacyStatementUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.requestedAccessTokenVersionInput">requestedAccessTokenVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.serviceManagementReferenceInput">serviceManagementReferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.signInAudienceInput">signInAudienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.supportUrlInput">supportUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.termsOfServiceUrlInput">termsOfServiceUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.groupMembershipClaims">groupMembershipClaims</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.homepageUrl">homepageUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitAccessTokenIssuanceEnabled">implicitAccessTokenIssuanceEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitIdTokenIssuanceEnabled">implicitIdTokenIssuanceEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.logoutUrl">logoutUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.marketingUrl">marketingUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.notes">notes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.privacyStatementUrl">privacyStatementUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.requestedAccessTokenVersion">requestedAccessTokenVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.serviceManagementReference">serviceManagementReference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.signInAudience">signInAudience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.termsOfServiceUrl">termsOfServiceUrl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `disabledByMicrosoft`<sup>Required</sup> <a name="disabledByMicrosoft" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.disabledByMicrosoft"></a>

```java
public java.lang.String getDisabledByMicrosoft();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `publisherDomain`<sup>Required</sup> <a name="publisherDomain" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.publisherDomain"></a>

```java
public java.lang.String getPublisherDomain();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.timeouts"></a>

```java
public ApplicationRegistrationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference">ApplicationRegistrationTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `groupMembershipClaimsInput`<sup>Optional</sup> <a name="groupMembershipClaimsInput" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.groupMembershipClaimsInput"></a>

```java
public java.util.List<java.lang.String> getGroupMembershipClaimsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `homepageUrlInput`<sup>Optional</sup> <a name="homepageUrlInput" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.homepageUrlInput"></a>

```java
public java.lang.String getHomepageUrlInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `implicitAccessTokenIssuanceEnabledInput`<sup>Optional</sup> <a name="implicitAccessTokenIssuanceEnabledInput" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitAccessTokenIssuanceEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getImplicitAccessTokenIssuanceEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `implicitIdTokenIssuanceEnabledInput`<sup>Optional</sup> <a name="implicitIdTokenIssuanceEnabledInput" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitIdTokenIssuanceEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getImplicitIdTokenIssuanceEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `logoutUrlInput`<sup>Optional</sup> <a name="logoutUrlInput" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.logoutUrlInput"></a>

```java
public java.lang.String getLogoutUrlInput();
```

- *Type:* java.lang.String

---

##### `marketingUrlInput`<sup>Optional</sup> <a name="marketingUrlInput" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.marketingUrlInput"></a>

```java
public java.lang.String getMarketingUrlInput();
```

- *Type:* java.lang.String

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.notesInput"></a>

```java
public java.lang.String getNotesInput();
```

- *Type:* java.lang.String

---

##### `privacyStatementUrlInput`<sup>Optional</sup> <a name="privacyStatementUrlInput" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.privacyStatementUrlInput"></a>

```java
public java.lang.String getPrivacyStatementUrlInput();
```

- *Type:* java.lang.String

---

##### `requestedAccessTokenVersionInput`<sup>Optional</sup> <a name="requestedAccessTokenVersionInput" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.requestedAccessTokenVersionInput"></a>

```java
public java.lang.Number getRequestedAccessTokenVersionInput();
```

- *Type:* java.lang.Number

---

##### `serviceManagementReferenceInput`<sup>Optional</sup> <a name="serviceManagementReferenceInput" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.serviceManagementReferenceInput"></a>

```java
public java.lang.String getServiceManagementReferenceInput();
```

- *Type:* java.lang.String

---

##### `signInAudienceInput`<sup>Optional</sup> <a name="signInAudienceInput" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.signInAudienceInput"></a>

```java
public java.lang.String getSignInAudienceInput();
```

- *Type:* java.lang.String

---

##### `supportUrlInput`<sup>Optional</sup> <a name="supportUrlInput" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.supportUrlInput"></a>

```java
public java.lang.String getSupportUrlInput();
```

- *Type:* java.lang.String

---

##### `termsOfServiceUrlInput`<sup>Optional</sup> <a name="termsOfServiceUrlInput" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.termsOfServiceUrlInput"></a>

```java
public java.lang.String getTermsOfServiceUrlInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.timeoutsInput"></a>

```java
public IResolvable|ApplicationRegistrationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `groupMembershipClaims`<sup>Required</sup> <a name="groupMembershipClaims" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.groupMembershipClaims"></a>

```java
public java.util.List<java.lang.String> getGroupMembershipClaims();
```

- *Type:* java.util.List<java.lang.String>

---

##### `homepageUrl`<sup>Required</sup> <a name="homepageUrl" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.homepageUrl"></a>

```java
public java.lang.String getHomepageUrl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `implicitAccessTokenIssuanceEnabled`<sup>Required</sup> <a name="implicitAccessTokenIssuanceEnabled" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitAccessTokenIssuanceEnabled"></a>

```java
public java.lang.Boolean|IResolvable getImplicitAccessTokenIssuanceEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `implicitIdTokenIssuanceEnabled`<sup>Required</sup> <a name="implicitIdTokenIssuanceEnabled" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitIdTokenIssuanceEnabled"></a>

```java
public java.lang.Boolean|IResolvable getImplicitIdTokenIssuanceEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `logoutUrl`<sup>Required</sup> <a name="logoutUrl" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.logoutUrl"></a>

```java
public java.lang.String getLogoutUrl();
```

- *Type:* java.lang.String

---

##### `marketingUrl`<sup>Required</sup> <a name="marketingUrl" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.marketingUrl"></a>

```java
public java.lang.String getMarketingUrl();
```

- *Type:* java.lang.String

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

---

##### `privacyStatementUrl`<sup>Required</sup> <a name="privacyStatementUrl" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.privacyStatementUrl"></a>

```java
public java.lang.String getPrivacyStatementUrl();
```

- *Type:* java.lang.String

---

##### `requestedAccessTokenVersion`<sup>Required</sup> <a name="requestedAccessTokenVersion" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.requestedAccessTokenVersion"></a>

```java
public java.lang.Number getRequestedAccessTokenVersion();
```

- *Type:* java.lang.Number

---

##### `serviceManagementReference`<sup>Required</sup> <a name="serviceManagementReference" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.serviceManagementReference"></a>

```java
public java.lang.String getServiceManagementReference();
```

- *Type:* java.lang.String

---

##### `signInAudience`<sup>Required</sup> <a name="signInAudience" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.signInAudience"></a>

```java
public java.lang.String getSignInAudience();
```

- *Type:* java.lang.String

---

##### `supportUrl`<sup>Required</sup> <a name="supportUrl" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.supportUrl"></a>

```java
public java.lang.String getSupportUrl();
```

- *Type:* java.lang.String

---

##### `termsOfServiceUrl`<sup>Required</sup> <a name="termsOfServiceUrl" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.termsOfServiceUrl"></a>

```java
public java.lang.String getTermsOfServiceUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationRegistrationConfig <a name="ApplicationRegistrationConfig" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.Initializer"></a>

```java
import io.cdktn.providers.azuread.application_registration.ApplicationRegistrationConfig;

ApplicationRegistrationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
//  .description(java.lang.String)
//  .groupMembershipClaims(java.util.List<java.lang.String>)
//  .homepageUrl(java.lang.String)
//  .id(java.lang.String)
//  .implicitAccessTokenIssuanceEnabled(java.lang.Boolean|IResolvable)
//  .implicitIdTokenIssuanceEnabled(java.lang.Boolean|IResolvable)
//  .logoutUrl(java.lang.String)
//  .marketingUrl(java.lang.String)
//  .notes(java.lang.String)
//  .privacyStatementUrl(java.lang.String)
//  .requestedAccessTokenVersion(java.lang.Number)
//  .serviceManagementReference(java.lang.String)
//  .signInAudience(java.lang.String)
//  .supportUrl(java.lang.String)
//  .termsOfServiceUrl(java.lang.String)
//  .timeouts(ApplicationRegistrationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the application. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the application as shown to end users. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.groupMembershipClaims">groupMembershipClaims</a></code> | <code>java.util.List<java.lang.String></code> | Configures the `groups` claim that the app expects issued in a user or OAuth access token. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.homepageUrl">homepageUrl</a></code> | <code>java.lang.String</code> | URL of the home page for the application. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#id ApplicationRegistration#id}. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.implicitAccessTokenIssuanceEnabled">implicitAccessTokenIssuanceEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether this application can request an access token using OAuth implicit flow. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.implicitIdTokenIssuanceEnabled">implicitIdTokenIssuanceEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether this application can request an ID token using OAuth implicit flow. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.logoutUrl">logoutUrl</a></code> | <code>java.lang.String</code> | URL of the logout page for the application, where the session is cleared for single sign-out. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.marketingUrl">marketingUrl</a></code> | <code>java.lang.String</code> | URL of the marketing page for the application. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.notes">notes</a></code> | <code>java.lang.String</code> | User-specified notes relevant for the management of the application. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.privacyStatementUrl">privacyStatementUrl</a></code> | <code>java.lang.String</code> | URL of the privacy statement for the application. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.requestedAccessTokenVersion">requestedAccessTokenVersion</a></code> | <code>java.lang.Number</code> | The access token version expected by this resource. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.serviceManagementReference">serviceManagementReference</a></code> | <code>java.lang.String</code> | References application or contact information from a service or asset management database. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.signInAudience">signInAudience</a></code> | <code>java.lang.String</code> | The Microsoft account types that are supported for the current application. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | URL of the support page for the application. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.termsOfServiceUrl">termsOfServiceUrl</a></code> | <code>java.lang.String</code> | URL of the terms of service statement for the application. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#display_name ApplicationRegistration#display_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the application as shown to end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#description ApplicationRegistration#description}

---

##### `groupMembershipClaims`<sup>Optional</sup> <a name="groupMembershipClaims" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.groupMembershipClaims"></a>

```java
public java.util.List<java.lang.String> getGroupMembershipClaims();
```

- *Type:* java.util.List<java.lang.String>

Configures the `groups` claim that the app expects issued in a user or OAuth access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#group_membership_claims ApplicationRegistration#group_membership_claims}

---

##### `homepageUrl`<sup>Optional</sup> <a name="homepageUrl" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.homepageUrl"></a>

```java
public java.lang.String getHomepageUrl();
```

- *Type:* java.lang.String

URL of the home page for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#homepage_url ApplicationRegistration#homepage_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#id ApplicationRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `implicitAccessTokenIssuanceEnabled`<sup>Optional</sup> <a name="implicitAccessTokenIssuanceEnabled" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.implicitAccessTokenIssuanceEnabled"></a>

```java
public java.lang.Boolean|IResolvable getImplicitAccessTokenIssuanceEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether this application can request an access token using OAuth implicit flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#implicit_access_token_issuance_enabled ApplicationRegistration#implicit_access_token_issuance_enabled}

---

##### `implicitIdTokenIssuanceEnabled`<sup>Optional</sup> <a name="implicitIdTokenIssuanceEnabled" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.implicitIdTokenIssuanceEnabled"></a>

```java
public java.lang.Boolean|IResolvable getImplicitIdTokenIssuanceEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether this application can request an ID token using OAuth implicit flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#implicit_id_token_issuance_enabled ApplicationRegistration#implicit_id_token_issuance_enabled}

---

##### `logoutUrl`<sup>Optional</sup> <a name="logoutUrl" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.logoutUrl"></a>

```java
public java.lang.String getLogoutUrl();
```

- *Type:* java.lang.String

URL of the logout page for the application, where the session is cleared for single sign-out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#logout_url ApplicationRegistration#logout_url}

---

##### `marketingUrl`<sup>Optional</sup> <a name="marketingUrl" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.marketingUrl"></a>

```java
public java.lang.String getMarketingUrl();
```

- *Type:* java.lang.String

URL of the marketing page for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#marketing_url ApplicationRegistration#marketing_url}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

User-specified notes relevant for the management of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#notes ApplicationRegistration#notes}

---

##### `privacyStatementUrl`<sup>Optional</sup> <a name="privacyStatementUrl" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.privacyStatementUrl"></a>

```java
public java.lang.String getPrivacyStatementUrl();
```

- *Type:* java.lang.String

URL of the privacy statement for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#privacy_statement_url ApplicationRegistration#privacy_statement_url}

---

##### `requestedAccessTokenVersion`<sup>Optional</sup> <a name="requestedAccessTokenVersion" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.requestedAccessTokenVersion"></a>

```java
public java.lang.Number getRequestedAccessTokenVersion();
```

- *Type:* java.lang.Number

The access token version expected by this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#requested_access_token_version ApplicationRegistration#requested_access_token_version}

---

##### `serviceManagementReference`<sup>Optional</sup> <a name="serviceManagementReference" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.serviceManagementReference"></a>

```java
public java.lang.String getServiceManagementReference();
```

- *Type:* java.lang.String

References application or contact information from a service or asset management database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#service_management_reference ApplicationRegistration#service_management_reference}

---

##### `signInAudience`<sup>Optional</sup> <a name="signInAudience" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.signInAudience"></a>

```java
public java.lang.String getSignInAudience();
```

- *Type:* java.lang.String

The Microsoft account types that are supported for the current application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#sign_in_audience ApplicationRegistration#sign_in_audience}

---

##### `supportUrl`<sup>Optional</sup> <a name="supportUrl" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.supportUrl"></a>

```java
public java.lang.String getSupportUrl();
```

- *Type:* java.lang.String

URL of the support page for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#support_url ApplicationRegistration#support_url}

---

##### `termsOfServiceUrl`<sup>Optional</sup> <a name="termsOfServiceUrl" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.termsOfServiceUrl"></a>

```java
public java.lang.String getTermsOfServiceUrl();
```

- *Type:* java.lang.String

URL of the terms of service statement for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#terms_of_service_url ApplicationRegistration#terms_of_service_url}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.timeouts"></a>

```java
public ApplicationRegistrationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#timeouts ApplicationRegistration#timeouts}

---

### ApplicationRegistrationTimeouts <a name="ApplicationRegistrationTimeouts" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azuread.application_registration.ApplicationRegistrationTimeouts;

ApplicationRegistrationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#create ApplicationRegistration#create}. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#delete ApplicationRegistration#delete}. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#read ApplicationRegistration#read}. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#update ApplicationRegistration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#create ApplicationRegistration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#delete ApplicationRegistration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#read ApplicationRegistration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.9.0/docs/resources/application_registration#update ApplicationRegistration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationRegistrationTimeoutsOutputReference <a name="ApplicationRegistrationTimeoutsOutputReference" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azuread.application_registration.ApplicationRegistrationTimeoutsOutputReference;

new ApplicationRegistrationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApplicationRegistrationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a>

---



