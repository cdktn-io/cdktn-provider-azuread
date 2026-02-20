/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_optional_claims
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApplicationOptionalClaimsAConfig extends cdktn.TerraformMetaArguments {
  /**
  * The resource ID of the application to which these optional claims belong
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_optional_claims#application_id ApplicationOptionalClaimsA#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_optional_claims#id ApplicationOptionalClaimsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * access_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_optional_claims#access_token ApplicationOptionalClaimsA#access_token}
  */
  readonly accessToken?: ApplicationOptionalClaimsAccessTokenA[] | cdktn.IResolvable;
  /**
  * id_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_optional_claims#id_token ApplicationOptionalClaimsA#id_token}
  */
  readonly idToken?: ApplicationOptionalClaimsIdTokenA[] | cdktn.IResolvable;
  /**
  * saml2_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_optional_claims#saml2_token ApplicationOptionalClaimsA#saml2_token}
  */
  readonly saml2Token?: ApplicationOptionalClaimsSaml2TokenA[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_optional_claims#timeouts ApplicationOptionalClaimsA#timeouts}
  */
  readonly timeouts?: ApplicationOptionalClaimsTimeouts;
}
export interface ApplicationOptionalClaimsAccessTokenA {
  /**
  * List of additional properties of the claim. If a property exists in this list, it modifies the behaviour of the optional claim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_optional_claims#additional_properties ApplicationOptionalClaimsA#additional_properties}
  */
  readonly additionalProperties?: string[];
  /**
  * Whether the claim specified by the client is necessary to ensure a smooth authorization experience
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_optional_claims#essential ApplicationOptionalClaimsA#essential}
  */
  readonly essential?: boolean | cdktn.IResolvable;
  /**
  * The name of the optional claim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_optional_claims#name ApplicationOptionalClaimsA#name}
  */
  readonly name: string;
  /**
  * The source of the claim. If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_optional_claims#source ApplicationOptionalClaimsA#source}
  */
  readonly source?: string;
}

export function applicationOptionalClaimsAccessTokenAToTerraform(struct?: ApplicationOptionalClaimsAccessTokenA | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.additionalProperties),
    essential: cdktn.booleanToTerraform(struct!.essential),
    name: cdktn.stringToTerraform(struct!.name),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function applicationOptionalClaimsAccessTokenAToHclTerraform(struct?: ApplicationOptionalClaimsAccessTokenA | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.additionalProperties),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    essential: {
      value: cdktn.booleanToHclTerraform(struct!.essential),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationOptionalClaimsAccessTokenAOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationOptionalClaimsAccessTokenA | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._essential !== undefined) {
      hasAnyValues = true;
      internalValueResult.essential = this._essential;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationOptionalClaimsAccessTokenA | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._essential = undefined;
      this._name = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._essential = value.essential;
      this._name = value.name;
      this._source = value.source;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string[]; 
  public get additionalProperties() {
    return this.getListAttribute('additional_properties');
  }
  public set additionalProperties(value: string[]) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // essential - computed: false, optional: true, required: false
  private _essential?: boolean | cdktn.IResolvable; 
  public get essential() {
    return this.getBooleanAttribute('essential');
  }
  public set essential(value: boolean | cdktn.IResolvable) {
    this._essential = value;
  }
  public resetEssential() {
    this._essential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get essentialInput() {
    return this._essential;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ApplicationOptionalClaimsAccessTokenAList extends cdktn.ComplexList {
  public internalValue? : ApplicationOptionalClaimsAccessTokenA[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationOptionalClaimsAccessTokenAOutputReference {
    return new ApplicationOptionalClaimsAccessTokenAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationOptionalClaimsIdTokenA {
  /**
  * List of additional properties of the claim. If a property exists in this list, it modifies the behaviour of the optional claim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_optional_claims#additional_properties ApplicationOptionalClaimsA#additional_properties}
  */
  readonly additionalProperties?: string[];
  /**
  * Whether the claim specified by the client is necessary to ensure a smooth authorization experience
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_optional_claims#essential ApplicationOptionalClaimsA#essential}
  */
  readonly essential?: boolean | cdktn.IResolvable;
  /**
  * The name of the optional claim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_optional_claims#name ApplicationOptionalClaimsA#name}
  */
  readonly name: string;
  /**
  * The source of the claim. If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_optional_claims#source ApplicationOptionalClaimsA#source}
  */
  readonly source?: string;
}

export function applicationOptionalClaimsIdTokenAToTerraform(struct?: ApplicationOptionalClaimsIdTokenA | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.additionalProperties),
    essential: cdktn.booleanToTerraform(struct!.essential),
    name: cdktn.stringToTerraform(struct!.name),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function applicationOptionalClaimsIdTokenAToHclTerraform(struct?: ApplicationOptionalClaimsIdTokenA | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.additionalProperties),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    essential: {
      value: cdktn.booleanToHclTerraform(struct!.essential),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationOptionalClaimsIdTokenAOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationOptionalClaimsIdTokenA | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._essential !== undefined) {
      hasAnyValues = true;
      internalValueResult.essential = this._essential;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationOptionalClaimsIdTokenA | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._essential = undefined;
      this._name = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._essential = value.essential;
      this._name = value.name;
      this._source = value.source;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string[]; 
  public get additionalProperties() {
    return this.getListAttribute('additional_properties');
  }
  public set additionalProperties(value: string[]) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // essential - computed: false, optional: true, required: false
  private _essential?: boolean | cdktn.IResolvable; 
  public get essential() {
    return this.getBooleanAttribute('essential');
  }
  public set essential(value: boolean | cdktn.IResolvable) {
    this._essential = value;
  }
  public resetEssential() {
    this._essential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get essentialInput() {
    return this._essential;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ApplicationOptionalClaimsIdTokenAList extends cdktn.ComplexList {
  public internalValue? : ApplicationOptionalClaimsIdTokenA[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationOptionalClaimsIdTokenAOutputReference {
    return new ApplicationOptionalClaimsIdTokenAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationOptionalClaimsSaml2TokenA {
  /**
  * List of additional properties of the claim. If a property exists in this list, it modifies the behaviour of the optional claim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_optional_claims#additional_properties ApplicationOptionalClaimsA#additional_properties}
  */
  readonly additionalProperties?: string[];
  /**
  * Whether the claim specified by the client is necessary to ensure a smooth authorization experience
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_optional_claims#essential ApplicationOptionalClaimsA#essential}
  */
  readonly essential?: boolean | cdktn.IResolvable;
  /**
  * The name of the optional claim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_optional_claims#name ApplicationOptionalClaimsA#name}
  */
  readonly name: string;
  /**
  * The source of the claim. If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_optional_claims#source ApplicationOptionalClaimsA#source}
  */
  readonly source?: string;
}

export function applicationOptionalClaimsSaml2TokenAToTerraform(struct?: ApplicationOptionalClaimsSaml2TokenA | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.additionalProperties),
    essential: cdktn.booleanToTerraform(struct!.essential),
    name: cdktn.stringToTerraform(struct!.name),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function applicationOptionalClaimsSaml2TokenAToHclTerraform(struct?: ApplicationOptionalClaimsSaml2TokenA | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.additionalProperties),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    essential: {
      value: cdktn.booleanToHclTerraform(struct!.essential),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationOptionalClaimsSaml2TokenAOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationOptionalClaimsSaml2TokenA | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._essential !== undefined) {
      hasAnyValues = true;
      internalValueResult.essential = this._essential;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationOptionalClaimsSaml2TokenA | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._essential = undefined;
      this._name = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._essential = value.essential;
      this._name = value.name;
      this._source = value.source;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string[]; 
  public get additionalProperties() {
    return this.getListAttribute('additional_properties');
  }
  public set additionalProperties(value: string[]) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // essential - computed: false, optional: true, required: false
  private _essential?: boolean | cdktn.IResolvable; 
  public get essential() {
    return this.getBooleanAttribute('essential');
  }
  public set essential(value: boolean | cdktn.IResolvable) {
    this._essential = value;
  }
  public resetEssential() {
    this._essential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get essentialInput() {
    return this._essential;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ApplicationOptionalClaimsSaml2TokenAList extends cdktn.ComplexList {
  public internalValue? : ApplicationOptionalClaimsSaml2TokenA[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationOptionalClaimsSaml2TokenAOutputReference {
    return new ApplicationOptionalClaimsSaml2TokenAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationOptionalClaimsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_optional_claims#create ApplicationOptionalClaimsA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_optional_claims#delete ApplicationOptionalClaimsA#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_optional_claims#read ApplicationOptionalClaimsA#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_optional_claims#update ApplicationOptionalClaimsA#update}
  */
  readonly update?: string;
}

export function applicationOptionalClaimsTimeoutsToTerraform(struct?: ApplicationOptionalClaimsTimeouts | cdktn.IResolvable): any {
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


export function applicationOptionalClaimsTimeoutsToHclTerraform(struct?: ApplicationOptionalClaimsTimeouts | cdktn.IResolvable): any {
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

export class ApplicationOptionalClaimsTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationOptionalClaimsTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ApplicationOptionalClaimsTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_optional_claims azuread_application_optional_claims}
*/
export class ApplicationOptionalClaimsA extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_application_optional_claims";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApplicationOptionalClaimsA resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationOptionalClaimsA to import
  * @param importFromId The id of the existing ApplicationOptionalClaimsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_optional_claims#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationOptionalClaimsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azuread_application_optional_claims", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azuread/3.8.0/docs/resources/application_optional_claims azuread_application_optional_claims} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationOptionalClaimsAConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationOptionalClaimsAConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_application_optional_claims',
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
    this._applicationId = config.applicationId;
    this._id = config.id;
    this._accessToken.internalValue = config.accessToken;
    this._idToken.internalValue = config.idToken;
    this._saml2Token.internalValue = config.saml2Token;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
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

  // access_token - computed: false, optional: true, required: false
  private _accessToken = new ApplicationOptionalClaimsAccessTokenAList(this, "access_token", false);
  public get accessToken() {
    return this._accessToken;
  }
  public putAccessToken(value: ApplicationOptionalClaimsAccessTokenA[] | cdktn.IResolvable) {
    this._accessToken.internalValue = value;
  }
  public resetAccessToken() {
    this._accessToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken.internalValue;
  }

  // id_token - computed: false, optional: true, required: false
  private _idToken = new ApplicationOptionalClaimsIdTokenAList(this, "id_token", false);
  public get idToken() {
    return this._idToken;
  }
  public putIdToken(value: ApplicationOptionalClaimsIdTokenA[] | cdktn.IResolvable) {
    this._idToken.internalValue = value;
  }
  public resetIdToken() {
    this._idToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenInput() {
    return this._idToken.internalValue;
  }

  // saml2_token - computed: false, optional: true, required: false
  private _saml2Token = new ApplicationOptionalClaimsSaml2TokenAList(this, "saml2_token", false);
  public get saml2Token() {
    return this._saml2Token;
  }
  public putSaml2Token(value: ApplicationOptionalClaimsSaml2TokenA[] | cdktn.IResolvable) {
    this._saml2Token.internalValue = value;
  }
  public resetSaml2Token() {
    this._saml2Token.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2TokenInput() {
    return this._saml2Token.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApplicationOptionalClaimsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApplicationOptionalClaimsTimeouts) {
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
      application_id: cdktn.stringToTerraform(this._applicationId),
      id: cdktn.stringToTerraform(this._id),
      access_token: cdktn.listMapper(applicationOptionalClaimsAccessTokenAToTerraform, true)(this._accessToken.internalValue),
      id_token: cdktn.listMapper(applicationOptionalClaimsIdTokenAToTerraform, true)(this._idToken.internalValue),
      saml2_token: cdktn.listMapper(applicationOptionalClaimsSaml2TokenAToTerraform, true)(this._saml2Token.internalValue),
      timeouts: applicationOptionalClaimsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktn.stringToHclTerraform(this._applicationId),
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
      access_token: {
        value: cdktn.listMapperHcl(applicationOptionalClaimsAccessTokenAToHclTerraform, true)(this._accessToken.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationOptionalClaimsAccessTokenAList",
      },
      id_token: {
        value: cdktn.listMapperHcl(applicationOptionalClaimsIdTokenAToHclTerraform, true)(this._idToken.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationOptionalClaimsIdTokenAList",
      },
      saml2_token: {
        value: cdktn.listMapperHcl(applicationOptionalClaimsSaml2TokenAToHclTerraform, true)(this._saml2Token.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationOptionalClaimsSaml2TokenAList",
      },
      timeouts: {
        value: applicationOptionalClaimsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationOptionalClaimsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
