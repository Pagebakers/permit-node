/* tslint:disable */
/* eslint-disable */
/**
 * Permit.io API
 *  Authorization as a service
 *
 * The version of the OpenAPI document: 2.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { ActionBlockEditable } from './action-block-editable';
// May contain unused imports in some cases
// @ts-ignore
import { AttributeBlockEditable } from './attribute-block-editable';

/**
 *
 * @export
 * @interface ResourceCreate
 */
export interface ResourceCreate {
  /**
   * A URL-friendly name of the resource (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the resource.
   * @type {string}
   * @memberof ResourceCreate
   */
  key: string;
  /**
   * The name of the resource
   * @type {string}
   * @memberof ResourceCreate
   */
  name: string;
  /**
   * The [URN](https://en.wikipedia.org/wiki/Uniform_Resource_Name) (Uniform Resource Name) of the resource
   * @type {string}
   * @memberof ResourceCreate
   */
  urn?: string;
  /**
   * An optional longer description of what this resource respresents in your system
   * @type {string}
   * @memberof ResourceCreate
   */
  description?: string;
  /**
   *          A actions definition block, typically contained within a resource type definition block.         The actions represents the ways you can interact with a protected resource.
   * @type {{ [key: string]: ActionBlockEditable; }}
   * @memberof ResourceCreate
   */
  actions: { [key: string]: ActionBlockEditable };
  /**
   * Attributes that each resource of this type defines, and can be used in your ABAC policies.
   * @type {{ [key: string]: AttributeBlockEditable; }}
   * @memberof ResourceCreate
   */
  attributes?: { [key: string]: AttributeBlockEditable };
  /**
   * Roles defined on this resource. The key is the role name, and the value contains the role properties such as granted permissions, base roles, etc.
   * @type {object}
   * @memberof ResourceCreate
   */
  roles?: object;
  /**
   * Relations to other resources. The key is the relation key, and the value is the related resource.
   * @type {object}
   * @memberof ResourceCreate
   */
  relations?: object;
}
