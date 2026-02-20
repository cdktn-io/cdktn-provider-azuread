/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/administrative_unit_role_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AdministrativeUnitRoleMemberConfig extends cdktn.TerraformMetaArguments {
  /**
  * The object ID of the administrative unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/administrative_unit_role_member#administrative_unit_object_id AdministrativeUnitRoleMember#administrative_unit_object_id}
  */
  readonly administrativeUnitObjectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/administrative_unit_role_member#id AdministrativeUnitRoleMember#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The object ID of the member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/administrative_unit_role_member#member_object_id AdministrativeUnitRoleMember#member_object_id}
  */
  readonly memberObjectId: string;
  /**
  * The object ID of the directory role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/administrative_unit_role_member#role_object_id AdministrativeUnitRoleMember#role_object_id}
  */
  readonly roleObjectId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/administrative_unit_role_member#timeouts AdministrativeUnitRoleMember#timeouts}
  */
  readonly timeouts?: AdministrativeUnitRoleMemberTimeouts;
}
export interface AdministrativeUnitRoleMemberTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/administrative_unit_role_member#create AdministrativeUnitRoleMember#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/administrative_unit_role_member#delete AdministrativeUnitRoleMember#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/administrative_unit_role_member#read AdministrativeUnitRoleMember#read}
  */
  readonly read?: string;
}

export function administrativeUnitRoleMemberTimeoutsToTerraform(struct?: AdministrativeUnitRoleMemberTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    read: cdktn.stringToTerraform(struct!.read),
  }
}


export function administrativeUnitRoleMemberTimeoutsToHclTerraform(struct?: AdministrativeUnitRoleMemberTimeouts | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdministrativeUnitRoleMemberTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdministrativeUnitRoleMemberTimeouts | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdministrativeUnitRoleMemberTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/administrative_unit_role_member azuread_administrative_unit_role_member}
*/
export class AdministrativeUnitRoleMember extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_administrative_unit_role_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AdministrativeUnitRoleMember resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdministrativeUnitRoleMember to import
  * @param importFromId The id of the existing AdministrativeUnitRoleMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/administrative_unit_role_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdministrativeUnitRoleMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azuread_administrative_unit_role_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/administrative_unit_role_member azuread_administrative_unit_role_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdministrativeUnitRoleMemberConfig
  */
  public constructor(scope: Construct, id: string, config: AdministrativeUnitRoleMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_administrative_unit_role_member',
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
    this._administrativeUnitObjectId = config.administrativeUnitObjectId;
    this._id = config.id;
    this._memberObjectId = config.memberObjectId;
    this._roleObjectId = config.roleObjectId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrative_unit_object_id - computed: false, optional: false, required: true
  private _administrativeUnitObjectId?: string; 
  public get administrativeUnitObjectId() {
    return this.getStringAttribute('administrative_unit_object_id');
  }
  public set administrativeUnitObjectId(value: string) {
    this._administrativeUnitObjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get administrativeUnitObjectIdInput() {
    return this._administrativeUnitObjectId;
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

  // member_object_id - computed: false, optional: false, required: true
  private _memberObjectId?: string; 
  public get memberObjectId() {
    return this.getStringAttribute('member_object_id');
  }
  public set memberObjectId(value: string) {
    this._memberObjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberObjectIdInput() {
    return this._memberObjectId;
  }

  // role_object_id - computed: false, optional: false, required: true
  private _roleObjectId?: string; 
  public get roleObjectId() {
    return this.getStringAttribute('role_object_id');
  }
  public set roleObjectId(value: string) {
    this._roleObjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleObjectIdInput() {
    return this._roleObjectId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AdministrativeUnitRoleMemberTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AdministrativeUnitRoleMemberTimeouts) {
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
      administrative_unit_object_id: cdktn.stringToTerraform(this._administrativeUnitObjectId),
      id: cdktn.stringToTerraform(this._id),
      member_object_id: cdktn.stringToTerraform(this._memberObjectId),
      role_object_id: cdktn.stringToTerraform(this._roleObjectId),
      timeouts: administrativeUnitRoleMemberTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      administrative_unit_object_id: {
        value: cdktn.stringToHclTerraform(this._administrativeUnitObjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_object_id: {
        value: cdktn.stringToHclTerraform(this._memberObjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_object_id: {
        value: cdktn.stringToHclTerraform(this._roleObjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: administrativeUnitRoleMemberTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AdministrativeUnitRoleMemberTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
