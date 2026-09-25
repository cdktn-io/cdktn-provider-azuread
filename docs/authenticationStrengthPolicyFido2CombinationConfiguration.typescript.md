# `authenticationStrengthPolicyFido2CombinationConfiguration` Submodule <a name="`authenticationStrengthPolicyFido2CombinationConfiguration` Submodule" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthenticationStrengthPolicyFido2CombinationConfiguration <a name="AuthenticationStrengthPolicyFido2CombinationConfiguration" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration azuread_authentication_strength_policy_fido2_combination_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer"></a>

```typescript
import { authenticationStrengthPolicyFido2CombinationConfiguration } from '@cdktn/provider-azuread'

new authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration(scope: Construct, id: string, config: AuthenticationStrengthPolicyFido2CombinationConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig">AuthenticationStrengthPolicyFido2CombinationConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig">AuthenticationStrengthPolicyFido2CombinationConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.putTimeouts"></a>

```typescript
public putTimeouts(value: AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AuthenticationStrengthPolicyFido2CombinationConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isConstruct"></a>

```typescript
import { authenticationStrengthPolicyFido2CombinationConfiguration } from '@cdktn/provider-azuread'

authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isTerraformElement"></a>

```typescript
import { authenticationStrengthPolicyFido2CombinationConfiguration } from '@cdktn/provider-azuread'

authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isTerraformResource"></a>

```typescript
import { authenticationStrengthPolicyFido2CombinationConfiguration } from '@cdktn/provider-azuread'

authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.generateConfigForImport"></a>

```typescript
import { authenticationStrengthPolicyFido2CombinationConfiguration } from '@cdktn/provider-azuread'

authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AuthenticationStrengthPolicyFido2CombinationConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AuthenticationStrengthPolicyFido2CombinationConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

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
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.allowedAaguidsInput">allowedAaguidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.authenticationStrengthPolicyIdInput">authenticationStrengthPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.allowedAaguids">allowedAaguids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.authenticationStrengthPolicyId">authenticationStrengthPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.timeouts"></a>

```typescript
public readonly timeouts: AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference</a>

---

##### `allowedAaguidsInput`<sup>Optional</sup> <a name="allowedAaguidsInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.allowedAaguidsInput"></a>

```typescript
public readonly allowedAaguidsInput: string[];
```

- *Type:* string[]

---

##### `authenticationStrengthPolicyIdInput`<sup>Optional</sup> <a name="authenticationStrengthPolicyIdInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.authenticationStrengthPolicyIdInput"></a>

```typescript
public readonly authenticationStrengthPolicyIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts</a>

---

##### `allowedAaguids`<sup>Required</sup> <a name="allowedAaguids" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.allowedAaguids"></a>

```typescript
public readonly allowedAaguids: string[];
```

- *Type:* string[]

---

##### `authenticationStrengthPolicyId`<sup>Required</sup> <a name="authenticationStrengthPolicyId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.authenticationStrengthPolicyId"></a>

```typescript
public readonly authenticationStrengthPolicyId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthenticationStrengthPolicyFido2CombinationConfigurationConfig <a name="AuthenticationStrengthPolicyFido2CombinationConfigurationConfig" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.Initializer"></a>

```typescript
import { authenticationStrengthPolicyFido2CombinationConfiguration } from '@cdktn/provider-azuread'

const authenticationStrengthPolicyFido2CombinationConfigurationConfig: authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.allowedAaguids">allowedAaguids</a></code> | <code>string[]</code> | A set of AAGUIDs allowed to be used as part of the `fido2` combination. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.authenticationStrengthPolicyId">authenticationStrengthPolicyId</a></code> | <code>string</code> | The object ID of the authentication strength policy to which this combination configuration applies. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#id AuthenticationStrengthPolicyFido2CombinationConfiguration#id}. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `allowedAaguids`<sup>Required</sup> <a name="allowedAaguids" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.allowedAaguids"></a>

```typescript
public readonly allowedAaguids: string[];
```

- *Type:* string[]

A set of AAGUIDs allowed to be used as part of the `fido2` combination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#allowed_aaguids AuthenticationStrengthPolicyFido2CombinationConfiguration#allowed_aaguids}

---

##### `authenticationStrengthPolicyId`<sup>Required</sup> <a name="authenticationStrengthPolicyId" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.authenticationStrengthPolicyId"></a>

```typescript
public readonly authenticationStrengthPolicyId: string;
```

- *Type:* string

The object ID of the authentication strength policy to which this combination configuration applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#authentication_strength_policy_id AuthenticationStrengthPolicyFido2CombinationConfiguration#authentication_strength_policy_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#id AuthenticationStrengthPolicyFido2CombinationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#timeouts AuthenticationStrengthPolicyFido2CombinationConfiguration#timeouts}

---

### AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts <a name="AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.Initializer"></a>

```typescript
import { authenticationStrengthPolicyFido2CombinationConfiguration } from '@cdktn/provider-azuread'

const authenticationStrengthPolicyFido2CombinationConfigurationTimeouts: authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#create AuthenticationStrengthPolicyFido2CombinationConfiguration#create}. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#delete AuthenticationStrengthPolicyFido2CombinationConfiguration#delete}. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#read AuthenticationStrengthPolicyFido2CombinationConfiguration#read}. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#update AuthenticationStrengthPolicyFido2CombinationConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#create AuthenticationStrengthPolicyFido2CombinationConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#delete AuthenticationStrengthPolicyFido2CombinationConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#read AuthenticationStrengthPolicyFido2CombinationConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#update AuthenticationStrengthPolicyFido2CombinationConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference <a name="AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.Initializer"></a>

```typescript
import { authenticationStrengthPolicyFido2CombinationConfiguration } from '@cdktn/provider-azuread'

new authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azuread.authenticationStrengthPolicyFido2CombinationConfiguration.AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts">AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts</a>

---



