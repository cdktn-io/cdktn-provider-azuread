/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AuthenticationStrengthPolicyFido2CombinationConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * A set of AAGUIDs allowed to be used as part of the `fido2` combination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#allowed_aaguids AuthenticationStrengthPolicyFido2CombinationConfiguration#allowed_aaguids}
  */
  readonly allowedAaguids: string[];
  /**
  * The object ID of the authentication strength policy to which this combination configuration applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#authentication_strength_policy_id AuthenticationStrengthPolicyFido2CombinationConfiguration#authentication_strength_policy_id}
  */
  readonly authenticationStrengthPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#id AuthenticationStrengthPolicyFido2CombinationConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#timeouts AuthenticationStrengthPolicyFido2CombinationConfiguration#timeouts}
  */
  readonly timeouts?: AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts;
}
export interface AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#create AuthenticationStrengthPolicyFido2CombinationConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#delete AuthenticationStrengthPolicyFido2CombinationConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#read AuthenticationStrengthPolicyFido2CombinationConfiguration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#update AuthenticationStrengthPolicyFido2CombinationConfiguration#update}
  */
  readonly update?: string;
}

export function authenticationStrengthPolicyFido2CombinationConfigurationTimeoutsToTerraform(struct?: AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    read: cdktn.stringToTerraform(struct!.read),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function authenticationStrengthPolicyFido2CombinationConfigurationTimeoutsToHclTerraform(struct?: AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration azuread_authentication_strength_policy_fido2_combination_configuration}
*/
export class AuthenticationStrengthPolicyFido2CombinationConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_authentication_strength_policy_fido2_combination_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AuthenticationStrengthPolicyFido2CombinationConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthenticationStrengthPolicyFido2CombinationConfiguration to import
  * @param importFromId The id of the existing AuthenticationStrengthPolicyFido2CombinationConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthenticationStrengthPolicyFido2CombinationConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azuread_authentication_strength_policy_fido2_combination_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azuread/3.10.0/docs/resources/authentication_strength_policy_fido2_combination_configuration azuread_authentication_strength_policy_fido2_combination_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationStrengthPolicyFido2CombinationConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationStrengthPolicyFido2CombinationConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_authentication_strength_policy_fido2_combination_configuration',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '3.10.0',
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
    this._allowedAaguids = config.allowedAaguids;
    this._authenticationStrengthPolicyId = config.authenticationStrengthPolicyId;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_aaguids - computed: false, optional: false, required: true
  private _allowedAaguids?: string[]; 
  public get allowedAaguids() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_aaguids'));
  }
  public set allowedAaguids(value: string[]) {
    this._allowedAaguids = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAaguidsInput() {
    return this._allowedAaguids;
  }

  // authentication_strength_policy_id - computed: false, optional: false, required: true
  private _authenticationStrengthPolicyId?: string; 
  public get authenticationStrengthPolicyId() {
    return this.getStringAttribute('authentication_strength_policy_id');
  }
  public set authenticationStrengthPolicyId(value: string) {
    this._authenticationStrengthPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationStrengthPolicyIdInput() {
    return this._authenticationStrengthPolicyId;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AuthenticationStrengthPolicyFido2CombinationConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts) {
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
      allowed_aaguids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedAaguids),
      authentication_strength_policy_id: cdktn.stringToTerraform(this._authenticationStrengthPolicyId),
      id: cdktn.stringToTerraform(this._id),
      timeouts: authenticationStrengthPolicyFido2CombinationConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_aaguids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedAaguids),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      authentication_strength_policy_id: {
        value: cdktn.stringToHclTerraform(this._authenticationStrengthPolicyId),
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
      timeouts: {
        value: authenticationStrengthPolicyFido2CombinationConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthenticationStrengthPolicyFido2CombinationConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
