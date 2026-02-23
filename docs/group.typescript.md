# `group` Submodule <a name="`group` Submodule" id="@cdktn/provider-azuread.group"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Group <a name="Group" id="@cdktn/provider-azuread.group.Group"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group azuread_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.group.Group.Initializer"></a>

```typescript
import { group } from '@cdktn/provider-azuread'

new group.Group(scope: Construct, id: string, config: GroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.group.Group.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azuread.group.Group.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azuread.group.Group.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azuread.group.GroupConfig">GroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.group.Group.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.group.Group.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azuread.group.Group.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azuread.group.GroupConfig">GroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.group.Group.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azuread.group.Group.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azuread.group.Group.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azuread.group.Group.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azuread.group.Group.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azuread.group.Group.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azuread.group.Group.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azuread.group.Group.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azuread.group.Group.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azuread.group.Group.putDynamicMembership">putDynamicMembership</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.resetAdministrativeUnitIds">resetAdministrativeUnitIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.resetAssignableToRole">resetAssignableToRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.resetAutoSubscribeNewMembers">resetAutoSubscribeNewMembers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.resetBehaviors">resetBehaviors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.resetDynamicMembership">resetDynamicMembership</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.resetExternalSendersAllowed">resetExternalSendersAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.resetHideFromAddressLists">resetHideFromAddressLists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.resetHideFromOutlookClients">resetHideFromOutlookClients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.resetMailEnabled">resetMailEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.resetMailNickname">resetMailNickname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.resetMembers">resetMembers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.resetOnpremisesGroupType">resetOnpremisesGroupType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.resetOwners">resetOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.resetPreventDuplicateNames">resetPreventDuplicateNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.resetProvisioningOptions">resetProvisioningOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.resetSecurityEnabled">resetSecurityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.resetTheme">resetTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.resetTypes">resetTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.resetVisibility">resetVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.resetWritebackEnabled">resetWritebackEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.group.Group.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azuread.group.Group.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azuread.group.Group.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azuread.group.Group.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azuread.group.Group.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.group.Group.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azuread.group.Group.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azuread.group.Group.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azuread.group.Group.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azuread.group.Group.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azuread.group.Group.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azuread.group.Group.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azuread.group.Group.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azuread.group.Group.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.group.Group.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.Group.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.group.Group.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.Group.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.group.Group.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.Group.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.group.Group.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.Group.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.group.Group.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.Group.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.group.Group.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.Group.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.group.Group.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.Group.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.group.Group.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.Group.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.group.Group.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.Group.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azuread.group.Group.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azuread.group.Group.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.group.Group.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.group.Group.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.group.Group.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.Group.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azuread.group.Group.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.group.Group.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azuread.group.Group.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azuread.group.Group.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azuread.group.Group.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azuread.group.Group.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.group.Group.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDynamicMembership` <a name="putDynamicMembership" id="@cdktn/provider-azuread.group.Group.putDynamicMembership"></a>

```typescript
public putDynamicMembership(value: GroupDynamicMembership): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.group.Group.putDynamicMembership.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azuread.group.GroupDynamicMembership">GroupDynamicMembership</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azuread.group.Group.putTimeouts"></a>

```typescript
public putTimeouts(value: GroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azuread.group.Group.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azuread.group.GroupTimeouts">GroupTimeouts</a>

---

##### `resetAdministrativeUnitIds` <a name="resetAdministrativeUnitIds" id="@cdktn/provider-azuread.group.Group.resetAdministrativeUnitIds"></a>

```typescript
public resetAdministrativeUnitIds(): void
```

##### `resetAssignableToRole` <a name="resetAssignableToRole" id="@cdktn/provider-azuread.group.Group.resetAssignableToRole"></a>

```typescript
public resetAssignableToRole(): void
```

##### `resetAutoSubscribeNewMembers` <a name="resetAutoSubscribeNewMembers" id="@cdktn/provider-azuread.group.Group.resetAutoSubscribeNewMembers"></a>

```typescript
public resetAutoSubscribeNewMembers(): void
```

##### `resetBehaviors` <a name="resetBehaviors" id="@cdktn/provider-azuread.group.Group.resetBehaviors"></a>

```typescript
public resetBehaviors(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-azuread.group.Group.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDynamicMembership` <a name="resetDynamicMembership" id="@cdktn/provider-azuread.group.Group.resetDynamicMembership"></a>

```typescript
public resetDynamicMembership(): void
```

##### `resetExternalSendersAllowed` <a name="resetExternalSendersAllowed" id="@cdktn/provider-azuread.group.Group.resetExternalSendersAllowed"></a>

```typescript
public resetExternalSendersAllowed(): void
```

##### `resetHideFromAddressLists` <a name="resetHideFromAddressLists" id="@cdktn/provider-azuread.group.Group.resetHideFromAddressLists"></a>

```typescript
public resetHideFromAddressLists(): void
```

##### `resetHideFromOutlookClients` <a name="resetHideFromOutlookClients" id="@cdktn/provider-azuread.group.Group.resetHideFromOutlookClients"></a>

```typescript
public resetHideFromOutlookClients(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azuread.group.Group.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMailEnabled` <a name="resetMailEnabled" id="@cdktn/provider-azuread.group.Group.resetMailEnabled"></a>

```typescript
public resetMailEnabled(): void
```

##### `resetMailNickname` <a name="resetMailNickname" id="@cdktn/provider-azuread.group.Group.resetMailNickname"></a>

```typescript
public resetMailNickname(): void
```

##### `resetMembers` <a name="resetMembers" id="@cdktn/provider-azuread.group.Group.resetMembers"></a>

```typescript
public resetMembers(): void
```

##### `resetOnpremisesGroupType` <a name="resetOnpremisesGroupType" id="@cdktn/provider-azuread.group.Group.resetOnpremisesGroupType"></a>

```typescript
public resetOnpremisesGroupType(): void
```

##### `resetOwners` <a name="resetOwners" id="@cdktn/provider-azuread.group.Group.resetOwners"></a>

```typescript
public resetOwners(): void
```

##### `resetPreventDuplicateNames` <a name="resetPreventDuplicateNames" id="@cdktn/provider-azuread.group.Group.resetPreventDuplicateNames"></a>

```typescript
public resetPreventDuplicateNames(): void
```

##### `resetProvisioningOptions` <a name="resetProvisioningOptions" id="@cdktn/provider-azuread.group.Group.resetProvisioningOptions"></a>

```typescript
public resetProvisioningOptions(): void
```

##### `resetSecurityEnabled` <a name="resetSecurityEnabled" id="@cdktn/provider-azuread.group.Group.resetSecurityEnabled"></a>

```typescript
public resetSecurityEnabled(): void
```

##### `resetTheme` <a name="resetTheme" id="@cdktn/provider-azuread.group.Group.resetTheme"></a>

```typescript
public resetTheme(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azuread.group.Group.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTypes` <a name="resetTypes" id="@cdktn/provider-azuread.group.Group.resetTypes"></a>

```typescript
public resetTypes(): void
```

##### `resetVisibility` <a name="resetVisibility" id="@cdktn/provider-azuread.group.Group.resetVisibility"></a>

```typescript
public resetVisibility(): void
```

##### `resetWritebackEnabled` <a name="resetWritebackEnabled" id="@cdktn/provider-azuread.group.Group.resetWritebackEnabled"></a>

```typescript
public resetWritebackEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.group.Group.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azuread.group.Group.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Group resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azuread.group.Group.isConstruct"></a>

```typescript
import { group } from '@cdktn/provider-azuread'

group.Group.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.group.Group.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azuread.group.Group.isTerraformElement"></a>

```typescript
import { group } from '@cdktn/provider-azuread'

group.Group.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.group.Group.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azuread.group.Group.isTerraformResource"></a>

```typescript
import { group } from '@cdktn/provider-azuread'

group.Group.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azuread.group.Group.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azuread.group.Group.generateConfigForImport"></a>

```typescript
import { group } from '@cdktn/provider-azuread'

group.Group.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Group resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azuread.group.Group.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azuread.group.Group.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Group to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azuread.group.Group.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Group that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.group.Group.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Group to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.dynamicMembership">dynamicMembership</a></code> | <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference">GroupDynamicMembershipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.mail">mail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.onpremisesDomainName">onpremisesDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.onpremisesNetbiosName">onpremisesNetbiosName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.onpremisesSamAccountName">onpremisesSamAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.onpremisesSecurityIdentifier">onpremisesSecurityIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.onpremisesSyncEnabled">onpremisesSyncEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.preferredLanguage">preferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.proxyAddresses">proxyAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference">GroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.administrativeUnitIdsInput">administrativeUnitIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.assignableToRoleInput">assignableToRoleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.autoSubscribeNewMembersInput">autoSubscribeNewMembersInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.behaviorsInput">behaviorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.dynamicMembershipInput">dynamicMembershipInput</a></code> | <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembership">GroupDynamicMembership</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.externalSendersAllowedInput">externalSendersAllowedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.hideFromAddressListsInput">hideFromAddressListsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.hideFromOutlookClientsInput">hideFromOutlookClientsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.mailEnabledInput">mailEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.mailNicknameInput">mailNicknameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.onpremisesGroupTypeInput">onpremisesGroupTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.ownersInput">ownersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.preventDuplicateNamesInput">preventDuplicateNamesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.provisioningOptionsInput">provisioningOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.securityEnabledInput">securityEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.themeInput">themeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azuread.group.GroupTimeouts">GroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.typesInput">typesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.visibilityInput">visibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.writebackEnabledInput">writebackEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.administrativeUnitIds">administrativeUnitIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.assignableToRole">assignableToRole</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.autoSubscribeNewMembers">autoSubscribeNewMembers</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.behaviors">behaviors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.externalSendersAllowed">externalSendersAllowed</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.hideFromAddressLists">hideFromAddressLists</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.hideFromOutlookClients">hideFromOutlookClients</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.mailEnabled">mailEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.mailNickname">mailNickname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.onpremisesGroupType">onpremisesGroupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.owners">owners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.preventDuplicateNames">preventDuplicateNames</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.provisioningOptions">provisioningOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.securityEnabled">securityEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.theme">theme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.types">types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.writebackEnabled">writebackEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azuread.group.Group.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azuread.group.Group.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.group.Group.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azuread.group.Group.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azuread.group.Group.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azuread.group.Group.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azuread.group.Group.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.group.Group.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.group.Group.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.group.Group.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.group.Group.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.group.Group.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.group.Group.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.group.Group.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dynamicMembership`<sup>Required</sup> <a name="dynamicMembership" id="@cdktn/provider-azuread.group.Group.property.dynamicMembership"></a>

```typescript
public readonly dynamicMembership: GroupDynamicMembershipOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference">GroupDynamicMembershipOutputReference</a>

---

##### `mail`<sup>Required</sup> <a name="mail" id="@cdktn/provider-azuread.group.Group.property.mail"></a>

```typescript
public readonly mail: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-azuread.group.Group.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `onpremisesDomainName`<sup>Required</sup> <a name="onpremisesDomainName" id="@cdktn/provider-azuread.group.Group.property.onpremisesDomainName"></a>

```typescript
public readonly onpremisesDomainName: string;
```

- *Type:* string

---

##### `onpremisesNetbiosName`<sup>Required</sup> <a name="onpremisesNetbiosName" id="@cdktn/provider-azuread.group.Group.property.onpremisesNetbiosName"></a>

```typescript
public readonly onpremisesNetbiosName: string;
```

- *Type:* string

---

##### `onpremisesSamAccountName`<sup>Required</sup> <a name="onpremisesSamAccountName" id="@cdktn/provider-azuread.group.Group.property.onpremisesSamAccountName"></a>

```typescript
public readonly onpremisesSamAccountName: string;
```

- *Type:* string

---

##### `onpremisesSecurityIdentifier`<sup>Required</sup> <a name="onpremisesSecurityIdentifier" id="@cdktn/provider-azuread.group.Group.property.onpremisesSecurityIdentifier"></a>

```typescript
public readonly onpremisesSecurityIdentifier: string;
```

- *Type:* string

---

##### `onpremisesSyncEnabled`<sup>Required</sup> <a name="onpremisesSyncEnabled" id="@cdktn/provider-azuread.group.Group.property.onpremisesSyncEnabled"></a>

```typescript
public readonly onpremisesSyncEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="@cdktn/provider-azuread.group.Group.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* string

---

##### `proxyAddresses`<sup>Required</sup> <a name="proxyAddresses" id="@cdktn/provider-azuread.group.Group.property.proxyAddresses"></a>

```typescript
public readonly proxyAddresses: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azuread.group.Group.property.timeouts"></a>

```typescript
public readonly timeouts: GroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference">GroupTimeoutsOutputReference</a>

---

##### `administrativeUnitIdsInput`<sup>Optional</sup> <a name="administrativeUnitIdsInput" id="@cdktn/provider-azuread.group.Group.property.administrativeUnitIdsInput"></a>

```typescript
public readonly administrativeUnitIdsInput: string[];
```

- *Type:* string[]

---

##### `assignableToRoleInput`<sup>Optional</sup> <a name="assignableToRoleInput" id="@cdktn/provider-azuread.group.Group.property.assignableToRoleInput"></a>

```typescript
public readonly assignableToRoleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `autoSubscribeNewMembersInput`<sup>Optional</sup> <a name="autoSubscribeNewMembersInput" id="@cdktn/provider-azuread.group.Group.property.autoSubscribeNewMembersInput"></a>

```typescript
public readonly autoSubscribeNewMembersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `behaviorsInput`<sup>Optional</sup> <a name="behaviorsInput" id="@cdktn/provider-azuread.group.Group.property.behaviorsInput"></a>

```typescript
public readonly behaviorsInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-azuread.group.Group.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-azuread.group.Group.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `dynamicMembershipInput`<sup>Optional</sup> <a name="dynamicMembershipInput" id="@cdktn/provider-azuread.group.Group.property.dynamicMembershipInput"></a>

```typescript
public readonly dynamicMembershipInput: GroupDynamicMembership;
```

- *Type:* <a href="#@cdktn/provider-azuread.group.GroupDynamicMembership">GroupDynamicMembership</a>

---

##### `externalSendersAllowedInput`<sup>Optional</sup> <a name="externalSendersAllowedInput" id="@cdktn/provider-azuread.group.Group.property.externalSendersAllowedInput"></a>

```typescript
public readonly externalSendersAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `hideFromAddressListsInput`<sup>Optional</sup> <a name="hideFromAddressListsInput" id="@cdktn/provider-azuread.group.Group.property.hideFromAddressListsInput"></a>

```typescript
public readonly hideFromAddressListsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `hideFromOutlookClientsInput`<sup>Optional</sup> <a name="hideFromOutlookClientsInput" id="@cdktn/provider-azuread.group.Group.property.hideFromOutlookClientsInput"></a>

```typescript
public readonly hideFromOutlookClientsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azuread.group.Group.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mailEnabledInput`<sup>Optional</sup> <a name="mailEnabledInput" id="@cdktn/provider-azuread.group.Group.property.mailEnabledInput"></a>

```typescript
public readonly mailEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `mailNicknameInput`<sup>Optional</sup> <a name="mailNicknameInput" id="@cdktn/provider-azuread.group.Group.property.mailNicknameInput"></a>

```typescript
public readonly mailNicknameInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktn/provider-azuread.group.Group.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `onpremisesGroupTypeInput`<sup>Optional</sup> <a name="onpremisesGroupTypeInput" id="@cdktn/provider-azuread.group.Group.property.onpremisesGroupTypeInput"></a>

```typescript
public readonly onpremisesGroupTypeInput: string;
```

- *Type:* string

---

##### `ownersInput`<sup>Optional</sup> <a name="ownersInput" id="@cdktn/provider-azuread.group.Group.property.ownersInput"></a>

```typescript
public readonly ownersInput: string[];
```

- *Type:* string[]

---

##### `preventDuplicateNamesInput`<sup>Optional</sup> <a name="preventDuplicateNamesInput" id="@cdktn/provider-azuread.group.Group.property.preventDuplicateNamesInput"></a>

```typescript
public readonly preventDuplicateNamesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `provisioningOptionsInput`<sup>Optional</sup> <a name="provisioningOptionsInput" id="@cdktn/provider-azuread.group.Group.property.provisioningOptionsInput"></a>

```typescript
public readonly provisioningOptionsInput: string[];
```

- *Type:* string[]

---

##### `securityEnabledInput`<sup>Optional</sup> <a name="securityEnabledInput" id="@cdktn/provider-azuread.group.Group.property.securityEnabledInput"></a>

```typescript
public readonly securityEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `themeInput`<sup>Optional</sup> <a name="themeInput" id="@cdktn/provider-azuread.group.Group.property.themeInput"></a>

```typescript
public readonly themeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azuread.group.Group.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GroupTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azuread.group.GroupTimeouts">GroupTimeouts</a>

---

##### `typesInput`<sup>Optional</sup> <a name="typesInput" id="@cdktn/provider-azuread.group.Group.property.typesInput"></a>

```typescript
public readonly typesInput: string[];
```

- *Type:* string[]

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktn/provider-azuread.group.Group.property.visibilityInput"></a>

```typescript
public readonly visibilityInput: string;
```

- *Type:* string

---

##### `writebackEnabledInput`<sup>Optional</sup> <a name="writebackEnabledInput" id="@cdktn/provider-azuread.group.Group.property.writebackEnabledInput"></a>

```typescript
public readonly writebackEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `administrativeUnitIds`<sup>Required</sup> <a name="administrativeUnitIds" id="@cdktn/provider-azuread.group.Group.property.administrativeUnitIds"></a>

```typescript
public readonly administrativeUnitIds: string[];
```

- *Type:* string[]

---

##### `assignableToRole`<sup>Required</sup> <a name="assignableToRole" id="@cdktn/provider-azuread.group.Group.property.assignableToRole"></a>

```typescript
public readonly assignableToRole: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `autoSubscribeNewMembers`<sup>Required</sup> <a name="autoSubscribeNewMembers" id="@cdktn/provider-azuread.group.Group.property.autoSubscribeNewMembers"></a>

```typescript
public readonly autoSubscribeNewMembers: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `behaviors`<sup>Required</sup> <a name="behaviors" id="@cdktn/provider-azuread.group.Group.property.behaviors"></a>

```typescript
public readonly behaviors: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azuread.group.Group.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azuread.group.Group.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalSendersAllowed`<sup>Required</sup> <a name="externalSendersAllowed" id="@cdktn/provider-azuread.group.Group.property.externalSendersAllowed"></a>

```typescript
public readonly externalSendersAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `hideFromAddressLists`<sup>Required</sup> <a name="hideFromAddressLists" id="@cdktn/provider-azuread.group.Group.property.hideFromAddressLists"></a>

```typescript
public readonly hideFromAddressLists: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `hideFromOutlookClients`<sup>Required</sup> <a name="hideFromOutlookClients" id="@cdktn/provider-azuread.group.Group.property.hideFromOutlookClients"></a>

```typescript
public readonly hideFromOutlookClients: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azuread.group.Group.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mailEnabled`<sup>Required</sup> <a name="mailEnabled" id="@cdktn/provider-azuread.group.Group.property.mailEnabled"></a>

```typescript
public readonly mailEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `mailNickname`<sup>Required</sup> <a name="mailNickname" id="@cdktn/provider-azuread.group.Group.property.mailNickname"></a>

```typescript
public readonly mailNickname: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-azuread.group.Group.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `onpremisesGroupType`<sup>Required</sup> <a name="onpremisesGroupType" id="@cdktn/provider-azuread.group.Group.property.onpremisesGroupType"></a>

```typescript
public readonly onpremisesGroupType: string;
```

- *Type:* string

---

##### `owners`<sup>Required</sup> <a name="owners" id="@cdktn/provider-azuread.group.Group.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* string[]

---

##### `preventDuplicateNames`<sup>Required</sup> <a name="preventDuplicateNames" id="@cdktn/provider-azuread.group.Group.property.preventDuplicateNames"></a>

```typescript
public readonly preventDuplicateNames: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `provisioningOptions`<sup>Required</sup> <a name="provisioningOptions" id="@cdktn/provider-azuread.group.Group.property.provisioningOptions"></a>

```typescript
public readonly provisioningOptions: string[];
```

- *Type:* string[]

---

##### `securityEnabled`<sup>Required</sup> <a name="securityEnabled" id="@cdktn/provider-azuread.group.Group.property.securityEnabled"></a>

```typescript
public readonly securityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktn/provider-azuread.group.Group.property.theme"></a>

```typescript
public readonly theme: string;
```

- *Type:* string

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktn/provider-azuread.group.Group.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-azuread.group.Group.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

##### `writebackEnabled`<sup>Required</sup> <a name="writebackEnabled" id="@cdktn/provider-azuread.group.Group.property.writebackEnabled"></a>

```typescript
public readonly writebackEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.group.Group.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azuread.group.Group.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupConfig <a name="GroupConfig" id="@cdktn/provider-azuread.group.GroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.group.GroupConfig.Initializer"></a>

```typescript
import { group } from '@cdktn/provider-azuread'

const groupConfig: group.GroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name for the group. |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.administrativeUnitIds">administrativeUnitIds</a></code> | <code>string[]</code> | The administrative unit IDs in which the group should be. |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.assignableToRole">assignableToRole</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether this group can be assigned to an Azure Active Directory role. |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.autoSubscribeNewMembers">autoSubscribeNewMembers</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether new members added to the group will be auto-subscribed to receive email notifications. |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.behaviors">behaviors</a></code> | <code>string[]</code> | The group behaviours for a Microsoft 365 group. |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.description">description</a></code> | <code>string</code> | The description for the group. |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.dynamicMembership">dynamicMembership</a></code> | <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembership">GroupDynamicMembership</a></code> | dynamic_membership block. |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.externalSendersAllowed">externalSendersAllowed</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether people external to the organization can send messages to the group. |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.hideFromAddressLists">hideFromAddressLists</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the group is displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups. |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.hideFromOutlookClients">hideFromOutlookClients</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the group is displayed in Outlook clients, such as Outlook for Windows and Outlook on the web. |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#id Group#id}. |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.mailEnabled">mailEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the group is a mail enabled, with a shared group mailbox. |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.mailNickname">mailNickname</a></code> | <code>string</code> | The mail alias for the group, unique in the organisation. |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.members">members</a></code> | <code>string[]</code> | A set of members who should be present in this group. |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.onpremisesGroupType">onpremisesGroupType</a></code> | <code>string</code> | Indicates the target on-premise group type the group will be written back as. |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.owners">owners</a></code> | <code>string[]</code> | A set of owners who own this group. Supported object types are Users or Service Principals. |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.preventDuplicateNames">preventDuplicateNames</a></code> | <code>boolean \| cdktn.IResolvable</code> | If `true`, will return an error if an existing group is found with the same name. |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.provisioningOptions">provisioningOptions</a></code> | <code>string[]</code> | The group provisioning options for a Microsoft 365 group. |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.securityEnabled">securityEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the group is a security group for controlling access to in-app resources. |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.theme">theme</a></code> | <code>string</code> | The colour theme for a Microsoft 365 group. |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azuread.group.GroupTimeouts">GroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.types">types</a></code> | <code>string[]</code> | A set of group types to configure for the group. |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.visibility">visibility</a></code> | <code>string</code> | Specifies the group join policy and group content visibility. |
| <code><a href="#@cdktn/provider-azuread.group.GroupConfig.property.writebackEnabled">writebackEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether this group should be synced from Azure AD to the on-premises directory when Azure AD Connect is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azuread.group.GroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azuread.group.GroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azuread.group.GroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azuread.group.GroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azuread.group.GroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azuread.group.GroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azuread.group.GroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azuread.group.GroupConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#display_name Group#display_name}

---

##### `administrativeUnitIds`<sup>Optional</sup> <a name="administrativeUnitIds" id="@cdktn/provider-azuread.group.GroupConfig.property.administrativeUnitIds"></a>

```typescript
public readonly administrativeUnitIds: string[];
```

- *Type:* string[]

The administrative unit IDs in which the group should be.

If empty, the group will be created at the tenant level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#administrative_unit_ids Group#administrative_unit_ids}

---

##### `assignableToRole`<sup>Optional</sup> <a name="assignableToRole" id="@cdktn/provider-azuread.group.GroupConfig.property.assignableToRole"></a>

```typescript
public readonly assignableToRole: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether this group can be assigned to an Azure Active Directory role.

This property can only be `true` for security-enabled groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#assignable_to_role Group#assignable_to_role}

---

##### `autoSubscribeNewMembers`<sup>Optional</sup> <a name="autoSubscribeNewMembers" id="@cdktn/provider-azuread.group.GroupConfig.property.autoSubscribeNewMembers"></a>

```typescript
public readonly autoSubscribeNewMembers: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether new members added to the group will be auto-subscribed to receive email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#auto_subscribe_new_members Group#auto_subscribe_new_members}

---

##### `behaviors`<sup>Optional</sup> <a name="behaviors" id="@cdktn/provider-azuread.group.GroupConfig.property.behaviors"></a>

```typescript
public readonly behaviors: string[];
```

- *Type:* string[]

The group behaviours for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#behaviors Group#behaviors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azuread.group.GroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#description Group#description}

---

##### `dynamicMembership`<sup>Optional</sup> <a name="dynamicMembership" id="@cdktn/provider-azuread.group.GroupConfig.property.dynamicMembership"></a>

```typescript
public readonly dynamicMembership: GroupDynamicMembership;
```

- *Type:* <a href="#@cdktn/provider-azuread.group.GroupDynamicMembership">GroupDynamicMembership</a>

dynamic_membership block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#dynamic_membership Group#dynamic_membership}

---

##### `externalSendersAllowed`<sup>Optional</sup> <a name="externalSendersAllowed" id="@cdktn/provider-azuread.group.GroupConfig.property.externalSendersAllowed"></a>

```typescript
public readonly externalSendersAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether people external to the organization can send messages to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#external_senders_allowed Group#external_senders_allowed}

---

##### `hideFromAddressLists`<sup>Optional</sup> <a name="hideFromAddressLists" id="@cdktn/provider-azuread.group.GroupConfig.property.hideFromAddressLists"></a>

```typescript
public readonly hideFromAddressLists: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the group is displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#hide_from_address_lists Group#hide_from_address_lists}

---

##### `hideFromOutlookClients`<sup>Optional</sup> <a name="hideFromOutlookClients" id="@cdktn/provider-azuread.group.GroupConfig.property.hideFromOutlookClients"></a>

```typescript
public readonly hideFromOutlookClients: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the group is displayed in Outlook clients, such as Outlook for Windows and Outlook on the web.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#hide_from_outlook_clients Group#hide_from_outlook_clients}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azuread.group.GroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#id Group#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mailEnabled`<sup>Optional</sup> <a name="mailEnabled" id="@cdktn/provider-azuread.group.GroupConfig.property.mailEnabled"></a>

```typescript
public readonly mailEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the group is a mail enabled, with a shared group mailbox.

At least one of `mail_enabled` or `security_enabled` must be specified. A group can be mail enabled _and_ security enabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#mail_enabled Group#mail_enabled}

---

##### `mailNickname`<sup>Optional</sup> <a name="mailNickname" id="@cdktn/provider-azuread.group.GroupConfig.property.mailNickname"></a>

```typescript
public readonly mailNickname: string;
```

- *Type:* string

The mail alias for the group, unique in the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#mail_nickname Group#mail_nickname}

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktn/provider-azuread.group.GroupConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

A set of members who should be present in this group.

Supported object types are Users, Groups or Service Principals

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#members Group#members}

---

##### `onpremisesGroupType`<sup>Optional</sup> <a name="onpremisesGroupType" id="@cdktn/provider-azuread.group.GroupConfig.property.onpremisesGroupType"></a>

```typescript
public readonly onpremisesGroupType: string;
```

- *Type:* string

Indicates the target on-premise group type the group will be written back as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#onpremises_group_type Group#onpremises_group_type}

---

##### `owners`<sup>Optional</sup> <a name="owners" id="@cdktn/provider-azuread.group.GroupConfig.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* string[]

A set of owners who own this group. Supported object types are Users or Service Principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#owners Group#owners}

---

##### `preventDuplicateNames`<sup>Optional</sup> <a name="preventDuplicateNames" id="@cdktn/provider-azuread.group.GroupConfig.property.preventDuplicateNames"></a>

```typescript
public readonly preventDuplicateNames: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If `true`, will return an error if an existing group is found with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#prevent_duplicate_names Group#prevent_duplicate_names}

---

##### `provisioningOptions`<sup>Optional</sup> <a name="provisioningOptions" id="@cdktn/provider-azuread.group.GroupConfig.property.provisioningOptions"></a>

```typescript
public readonly provisioningOptions: string[];
```

- *Type:* string[]

The group provisioning options for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#provisioning_options Group#provisioning_options}

---

##### `securityEnabled`<sup>Optional</sup> <a name="securityEnabled" id="@cdktn/provider-azuread.group.GroupConfig.property.securityEnabled"></a>

```typescript
public readonly securityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the group is a security group for controlling access to in-app resources.

At least one of `security_enabled` or `mail_enabled` must be specified. A group can be security enabled _and_ mail enabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#security_enabled Group#security_enabled}

---

##### `theme`<sup>Optional</sup> <a name="theme" id="@cdktn/provider-azuread.group.GroupConfig.property.theme"></a>

```typescript
public readonly theme: string;
```

- *Type:* string

The colour theme for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#theme Group#theme}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azuread.group.GroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GroupTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azuread.group.GroupTimeouts">GroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#timeouts Group#timeouts}

---

##### `types`<sup>Optional</sup> <a name="types" id="@cdktn/provider-azuread.group.GroupConfig.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

A set of group types to configure for the group.

`Unified` specifies a Microsoft 365 group. Required when `mail_enabled` is true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#types Group#types}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktn/provider-azuread.group.GroupConfig.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

Specifies the group join policy and group content visibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#visibility Group#visibility}

---

##### `writebackEnabled`<sup>Optional</sup> <a name="writebackEnabled" id="@cdktn/provider-azuread.group.GroupConfig.property.writebackEnabled"></a>

```typescript
public readonly writebackEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether this group should be synced from Azure AD to the on-premises directory when Azure AD Connect is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#writeback_enabled Group#writeback_enabled}

---

### GroupDynamicMembership <a name="GroupDynamicMembership" id="@cdktn/provider-azuread.group.GroupDynamicMembership"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.group.GroupDynamicMembership.Initializer"></a>

```typescript
import { group } from '@cdktn/provider-azuread'

const groupDynamicMembership: group.GroupDynamicMembership = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembership.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#enabled Group#enabled}. |
| <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembership.property.rule">rule</a></code> | <code>string</code> | Rule to determine members for a dynamic group. Required when `group_types` contains 'DynamicMembership'. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-azuread.group.GroupDynamicMembership.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#enabled Group#enabled}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-azuread.group.GroupDynamicMembership.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

Rule to determine members for a dynamic group. Required when `group_types` contains 'DynamicMembership'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#rule Group#rule}

---

### GroupTimeouts <a name="GroupTimeouts" id="@cdktn/provider-azuread.group.GroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azuread.group.GroupTimeouts.Initializer"></a>

```typescript
import { group } from '@cdktn/provider-azuread'

const groupTimeouts: group.GroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#create Group#create}. |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#delete Group#delete}. |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#read Group#read}. |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#update Group#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azuread.group.GroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#create Group#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azuread.group.GroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#delete Group#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azuread.group.GroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#read Group#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azuread.group.GroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#update Group#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroupDynamicMembershipOutputReference <a name="GroupDynamicMembershipOutputReference" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.Initializer"></a>

```typescript
import { group } from '@cdktn/provider-azuread'

new group.GroupDynamicMembershipOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.property.ruleInput">ruleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.property.rule">rule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azuread.group.GroupDynamicMembership">GroupDynamicMembership</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.group.GroupDynamicMembershipOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroupDynamicMembership;
```

- *Type:* <a href="#@cdktn/provider-azuread.group.GroupDynamicMembership">GroupDynamicMembership</a>

---


### GroupTimeoutsOutputReference <a name="GroupTimeoutsOutputReference" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { group } from '@cdktn/provider-azuread'

new group.GroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azuread.group.GroupTimeouts">GroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azuread.group.GroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroupTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azuread.group.GroupTimeouts">GroupTimeouts</a>

---



