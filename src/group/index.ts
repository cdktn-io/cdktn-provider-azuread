/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * The administrative unit IDs in which the group should be. If empty, the group will be created at the tenant level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#administrative_unit_ids Group#administrative_unit_ids}
  */
  readonly administrativeUnitIds?: string[];
  /**
  * Indicates whether this group can be assigned to an Azure Active Directory role. This property can only be `true` for security-enabled groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#assignable_to_role Group#assignable_to_role}
  */
  readonly assignableToRole?: boolean | cdktn.IResolvable;
  /**
  * Indicates whether new members added to the group will be auto-subscribed to receive email notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#auto_subscribe_new_members Group#auto_subscribe_new_members}
  */
  readonly autoSubscribeNewMembers?: boolean | cdktn.IResolvable;
  /**
  * The group behaviours for a Microsoft 365 group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#behaviors Group#behaviors}
  */
  readonly behaviors?: string[];
  /**
  * The description for the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#description Group#description}
  */
  readonly description?: string;
  /**
  * The display name for the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#display_name Group#display_name}
  */
  readonly displayName: string;
  /**
  * Indicates whether people external to the organization can send messages to the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#external_senders_allowed Group#external_senders_allowed}
  */
  readonly externalSendersAllowed?: boolean | cdktn.IResolvable;
  /**
  * Indicates whether the group is displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#hide_from_address_lists Group#hide_from_address_lists}
  */
  readonly hideFromAddressLists?: boolean | cdktn.IResolvable;
  /**
  * Indicates whether the group is displayed in Outlook clients, such as Outlook for Windows and Outlook on the web.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#hide_from_outlook_clients Group#hide_from_outlook_clients}
  */
  readonly hideFromOutlookClients?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#id Group#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether the group is a mail enabled, with a shared group mailbox. At least one of `mail_enabled` or `security_enabled` must be specified. A group can be mail enabled _and_ security enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#mail_enabled Group#mail_enabled}
  */
  readonly mailEnabled?: boolean | cdktn.IResolvable;
  /**
  * The mail alias for the group, unique in the organisation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#mail_nickname Group#mail_nickname}
  */
  readonly mailNickname?: string;
  /**
  * A set of members who should be present in this group. Supported object types are Users, Groups or Service Principals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#members Group#members}
  */
  readonly members?: string[];
  /**
  * Indicates the target on-premise group type the group will be written back as
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#onpremises_group_type Group#onpremises_group_type}
  */
  readonly onpremisesGroupType?: string;
  /**
  * A set of owners who own this group. Supported object types are Users or Service Principals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#owners Group#owners}
  */
  readonly owners?: string[];
  /**
  * If `true`, will return an error if an existing group is found with the same name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#prevent_duplicate_names Group#prevent_duplicate_names}
  */
  readonly preventDuplicateNames?: boolean | cdktn.IResolvable;
  /**
  * The group provisioning options for a Microsoft 365 group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#provisioning_options Group#provisioning_options}
  */
  readonly provisioningOptions?: string[];
  /**
  * Whether the group is a security group for controlling access to in-app resources. At least one of `security_enabled` or `mail_enabled` must be specified. A group can be security enabled _and_ mail enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#security_enabled Group#security_enabled}
  */
  readonly securityEnabled?: boolean | cdktn.IResolvable;
  /**
  * The colour theme for a Microsoft 365 group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#theme Group#theme}
  */
  readonly theme?: string;
  /**
  * A set of group types to configure for the group. `Unified` specifies a Microsoft 365 group. Required when `mail_enabled` is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#types Group#types}
  */
  readonly types?: string[];
  /**
  * Specifies the group join policy and group content visibility
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#visibility Group#visibility}
  */
  readonly visibility?: string;
  /**
  * Whether this group should be synced from Azure AD to the on-premises directory when Azure AD Connect is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#writeback_enabled Group#writeback_enabled}
  */
  readonly writebackEnabled?: boolean | cdktn.IResolvable;
  /**
  * dynamic_membership block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#dynamic_membership Group#dynamic_membership}
  */
  readonly dynamicMembership?: GroupDynamicMembership;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#timeouts Group#timeouts}
  */
  readonly timeouts?: GroupTimeouts;
}
export interface GroupDynamicMembership {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#enabled Group#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Rule to determine members for a dynamic group. Required when `group_types` contains 'DynamicMembership'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#rule Group#rule}
  */
  readonly rule: string;
}

export function groupDynamicMembershipToTerraform(struct?: GroupDynamicMembershipOutputReference | GroupDynamicMembership): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    rule: cdktn.stringToTerraform(struct!.rule),
  }
}


export function groupDynamicMembershipToHclTerraform(struct?: GroupDynamicMembershipOutputReference | GroupDynamicMembership): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rule: {
      value: cdktn.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupDynamicMembershipOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupDynamicMembership | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupDynamicMembership | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._rule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._rule = value.rule;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }
}
export interface GroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#create Group#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#delete Group#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#read Group#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#update Group#update}
  */
  readonly update?: string;
}

export function groupTimeoutsToTerraform(struct?: GroupTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    read: cdktn.stringToTerraform(struct!.read),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function groupTimeoutsToHclTerraform(struct?: GroupTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktn.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group azuread_group}
*/
export class Group extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Group resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azuread_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/group azuread_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_group',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '3.8.0',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._administrativeUnitIds = config.administrativeUnitIds;
    this._assignableToRole = config.assignableToRole;
    this._autoSubscribeNewMembers = config.autoSubscribeNewMembers;
    this._behaviors = config.behaviors;
    this._description = config.description;
    this._displayName = config.displayName;
    this._externalSendersAllowed = config.externalSendersAllowed;
    this._hideFromAddressLists = config.hideFromAddressLists;
    this._hideFromOutlookClients = config.hideFromOutlookClients;
    this._id = config.id;
    this._mailEnabled = config.mailEnabled;
    this._mailNickname = config.mailNickname;
    this._members = config.members;
    this._onpremisesGroupType = config.onpremisesGroupType;
    this._owners = config.owners;
    this._preventDuplicateNames = config.preventDuplicateNames;
    this._provisioningOptions = config.provisioningOptions;
    this._securityEnabled = config.securityEnabled;
    this._theme = config.theme;
    this._types = config.types;
    this._visibility = config.visibility;
    this._writebackEnabled = config.writebackEnabled;
    this._dynamicMembership.internalValue = config.dynamicMembership;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrative_unit_ids - computed: false, optional: true, required: false
  private _administrativeUnitIds?: string[]; 
  public get administrativeUnitIds() {
    return cdktn.Fn.tolist(this.getListAttribute('administrative_unit_ids'));
  }
  public set administrativeUnitIds(value: string[]) {
    this._administrativeUnitIds = value;
  }
  public resetAdministrativeUnitIds() {
    this._administrativeUnitIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administrativeUnitIdsInput() {
    return this._administrativeUnitIds;
  }

  // assignable_to_role - computed: false, optional: true, required: false
  private _assignableToRole?: boolean | cdktn.IResolvable; 
  public get assignableToRole() {
    return this.getBooleanAttribute('assignable_to_role');
  }
  public set assignableToRole(value: boolean | cdktn.IResolvable) {
    this._assignableToRole = value;
  }
  public resetAssignableToRole() {
    this._assignableToRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignableToRoleInput() {
    return this._assignableToRole;
  }

  // auto_subscribe_new_members - computed: true, optional: true, required: false
  private _autoSubscribeNewMembers?: boolean | cdktn.IResolvable; 
  public get autoSubscribeNewMembers() {
    return this.getBooleanAttribute('auto_subscribe_new_members');
  }
  public set autoSubscribeNewMembers(value: boolean | cdktn.IResolvable) {
    this._autoSubscribeNewMembers = value;
  }
  public resetAutoSubscribeNewMembers() {
    this._autoSubscribeNewMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSubscribeNewMembersInput() {
    return this._autoSubscribeNewMembers;
  }

  // behaviors - computed: false, optional: true, required: false
  private _behaviors?: string[]; 
  public get behaviors() {
    return cdktn.Fn.tolist(this.getListAttribute('behaviors'));
  }
  public set behaviors(value: string[]) {
    this._behaviors = value;
  }
  public resetBehaviors() {
    this._behaviors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorsInput() {
    return this._behaviors;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // external_senders_allowed - computed: true, optional: true, required: false
  private _externalSendersAllowed?: boolean | cdktn.IResolvable; 
  public get externalSendersAllowed() {
    return this.getBooleanAttribute('external_senders_allowed');
  }
  public set externalSendersAllowed(value: boolean | cdktn.IResolvable) {
    this._externalSendersAllowed = value;
  }
  public resetExternalSendersAllowed() {
    this._externalSendersAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSendersAllowedInput() {
    return this._externalSendersAllowed;
  }

  // hide_from_address_lists - computed: true, optional: true, required: false
  private _hideFromAddressLists?: boolean | cdktn.IResolvable; 
  public get hideFromAddressLists() {
    return this.getBooleanAttribute('hide_from_address_lists');
  }
  public set hideFromAddressLists(value: boolean | cdktn.IResolvable) {
    this._hideFromAddressLists = value;
  }
  public resetHideFromAddressLists() {
    this._hideFromAddressLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideFromAddressListsInput() {
    return this._hideFromAddressLists;
  }

  // hide_from_outlook_clients - computed: true, optional: true, required: false
  private _hideFromOutlookClients?: boolean | cdktn.IResolvable; 
  public get hideFromOutlookClients() {
    return this.getBooleanAttribute('hide_from_outlook_clients');
  }
  public set hideFromOutlookClients(value: boolean | cdktn.IResolvable) {
    this._hideFromOutlookClients = value;
  }
  public resetHideFromOutlookClients() {
    this._hideFromOutlookClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideFromOutlookClientsInput() {
    return this._hideFromOutlookClients;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // mail - computed: true, optional: false, required: false
  public get mail() {
    return this.getStringAttribute('mail');
  }

  // mail_enabled - computed: false, optional: true, required: false
  private _mailEnabled?: boolean | cdktn.IResolvable; 
  public get mailEnabled() {
    return this.getBooleanAttribute('mail_enabled');
  }
  public set mailEnabled(value: boolean | cdktn.IResolvable) {
    this._mailEnabled = value;
  }
  public resetMailEnabled() {
    this._mailEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailEnabledInput() {
    return this._mailEnabled;
  }

  // mail_nickname - computed: true, optional: true, required: false
  private _mailNickname?: string; 
  public get mailNickname() {
    return this.getStringAttribute('mail_nickname');
  }
  public set mailNickname(value: string) {
    this._mailNickname = value;
  }
  public resetMailNickname() {
    this._mailNickname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailNicknameInput() {
    return this._mailNickname;
  }

  // members - computed: true, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return cdktn.Fn.tolist(this.getListAttribute('members'));
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // onpremises_domain_name - computed: true, optional: false, required: false
  public get onpremisesDomainName() {
    return this.getStringAttribute('onpremises_domain_name');
  }

  // onpremises_group_type - computed: true, optional: true, required: false
  private _onpremisesGroupType?: string; 
  public get onpremisesGroupType() {
    return this.getStringAttribute('onpremises_group_type');
  }
  public set onpremisesGroupType(value: string) {
    this._onpremisesGroupType = value;
  }
  public resetOnpremisesGroupType() {
    this._onpremisesGroupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onpremisesGroupTypeInput() {
    return this._onpremisesGroupType;
  }

  // onpremises_netbios_name - computed: true, optional: false, required: false
  public get onpremisesNetbiosName() {
    return this.getStringAttribute('onpremises_netbios_name');
  }

  // onpremises_sam_account_name - computed: true, optional: false, required: false
  public get onpremisesSamAccountName() {
    return this.getStringAttribute('onpremises_sam_account_name');
  }

  // onpremises_security_identifier - computed: true, optional: false, required: false
  public get onpremisesSecurityIdentifier() {
    return this.getStringAttribute('onpremises_security_identifier');
  }

  // onpremises_sync_enabled - computed: true, optional: false, required: false
  public get onpremisesSyncEnabled() {
    return this.getBooleanAttribute('onpremises_sync_enabled');
  }

  // owners - computed: true, optional: true, required: false
  private _owners?: string[]; 
  public get owners() {
    return cdktn.Fn.tolist(this.getListAttribute('owners'));
  }
  public set owners(value: string[]) {
    this._owners = value;
  }
  public resetOwners() {
    this._owners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners;
  }

  // preferred_language - computed: true, optional: false, required: false
  public get preferredLanguage() {
    return this.getStringAttribute('preferred_language');
  }

  // prevent_duplicate_names - computed: false, optional: true, required: false
  private _preventDuplicateNames?: boolean | cdktn.IResolvable; 
  public get preventDuplicateNames() {
    return this.getBooleanAttribute('prevent_duplicate_names');
  }
  public set preventDuplicateNames(value: boolean | cdktn.IResolvable) {
    this._preventDuplicateNames = value;
  }
  public resetPreventDuplicateNames() {
    this._preventDuplicateNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventDuplicateNamesInput() {
    return this._preventDuplicateNames;
  }

  // provisioning_options - computed: false, optional: true, required: false
  private _provisioningOptions?: string[]; 
  public get provisioningOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('provisioning_options'));
  }
  public set provisioningOptions(value: string[]) {
    this._provisioningOptions = value;
  }
  public resetProvisioningOptions() {
    this._provisioningOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningOptionsInput() {
    return this._provisioningOptions;
  }

  // proxy_addresses - computed: true, optional: false, required: false
  public get proxyAddresses() {
    return this.getListAttribute('proxy_addresses');
  }

  // security_enabled - computed: false, optional: true, required: false
  private _securityEnabled?: boolean | cdktn.IResolvable; 
  public get securityEnabled() {
    return this.getBooleanAttribute('security_enabled');
  }
  public set securityEnabled(value: boolean | cdktn.IResolvable) {
    this._securityEnabled = value;
  }
  public resetSecurityEnabled() {
    this._securityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityEnabledInput() {
    return this._securityEnabled;
  }

  // theme - computed: false, optional: true, required: false
  private _theme?: string; 
  public get theme() {
    return this.getStringAttribute('theme');
  }
  public set theme(value: string) {
    this._theme = value;
  }
  public resetTheme() {
    this._theme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get themeInput() {
    return this._theme;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return cdktn.Fn.tolist(this.getListAttribute('types'));
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // visibility - computed: true, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // writeback_enabled - computed: false, optional: true, required: false
  private _writebackEnabled?: boolean | cdktn.IResolvable; 
  public get writebackEnabled() {
    return this.getBooleanAttribute('writeback_enabled');
  }
  public set writebackEnabled(value: boolean | cdktn.IResolvable) {
    this._writebackEnabled = value;
  }
  public resetWritebackEnabled() {
    this._writebackEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writebackEnabledInput() {
    return this._writebackEnabled;
  }

  // dynamic_membership - computed: false, optional: true, required: false
  private _dynamicMembership = new GroupDynamicMembershipOutputReference(this, "dynamic_membership");
  public get dynamicMembership() {
    return this._dynamicMembership;
  }
  public putDynamicMembership(value: GroupDynamicMembership) {
    this._dynamicMembership.internalValue = value;
  }
  public resetDynamicMembership() {
    this._dynamicMembership.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicMembershipInput() {
    return this._dynamicMembership.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GroupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      administrative_unit_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._administrativeUnitIds),
      assignable_to_role: cdktn.booleanToTerraform(this._assignableToRole),
      auto_subscribe_new_members: cdktn.booleanToTerraform(this._autoSubscribeNewMembers),
      behaviors: cdktn.listMapper(cdktn.stringToTerraform, false)(this._behaviors),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      external_senders_allowed: cdktn.booleanToTerraform(this._externalSendersAllowed),
      hide_from_address_lists: cdktn.booleanToTerraform(this._hideFromAddressLists),
      hide_from_outlook_clients: cdktn.booleanToTerraform(this._hideFromOutlookClients),
      id: cdktn.stringToTerraform(this._id),
      mail_enabled: cdktn.booleanToTerraform(this._mailEnabled),
      mail_nickname: cdktn.stringToTerraform(this._mailNickname),
      members: cdktn.listMapper(cdktn.stringToTerraform, false)(this._members),
      onpremises_group_type: cdktn.stringToTerraform(this._onpremisesGroupType),
      owners: cdktn.listMapper(cdktn.stringToTerraform, false)(this._owners),
      prevent_duplicate_names: cdktn.booleanToTerraform(this._preventDuplicateNames),
      provisioning_options: cdktn.listMapper(cdktn.stringToTerraform, false)(this._provisioningOptions),
      security_enabled: cdktn.booleanToTerraform(this._securityEnabled),
      theme: cdktn.stringToTerraform(this._theme),
      types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._types),
      visibility: cdktn.stringToTerraform(this._visibility),
      writeback_enabled: cdktn.booleanToTerraform(this._writebackEnabled),
      dynamic_membership: groupDynamicMembershipToTerraform(this._dynamicMembership.internalValue),
      timeouts: groupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      administrative_unit_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._administrativeUnitIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      assignable_to_role: {
        value: cdktn.booleanToHclTerraform(this._assignableToRole),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_subscribe_new_members: {
        value: cdktn.booleanToHclTerraform(this._autoSubscribeNewMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      behaviors: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._behaviors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_senders_allowed: {
        value: cdktn.booleanToHclTerraform(this._externalSendersAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hide_from_address_lists: {
        value: cdktn.booleanToHclTerraform(this._hideFromAddressLists),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hide_from_outlook_clients: {
        value: cdktn.booleanToHclTerraform(this._hideFromOutlookClients),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mail_enabled: {
        value: cdktn.booleanToHclTerraform(this._mailEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mail_nickname: {
        value: cdktn.stringToHclTerraform(this._mailNickname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      members: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._members),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      onpremises_group_type: {
        value: cdktn.stringToHclTerraform(this._onpremisesGroupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owners: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._owners),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      prevent_duplicate_names: {
        value: cdktn.booleanToHclTerraform(this._preventDuplicateNames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      provisioning_options: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._provisioningOptions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      security_enabled: {
        value: cdktn.booleanToHclTerraform(this._securityEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      theme: {
        value: cdktn.stringToHclTerraform(this._theme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      types: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._types),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      visibility: {
        value: cdktn.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      writeback_enabled: {
        value: cdktn.booleanToHclTerraform(this._writebackEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dynamic_membership: {
        value: groupDynamicMembershipToHclTerraform(this._dynamicMembership.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroupDynamicMembershipList",
      },
      timeouts: {
        value: groupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
