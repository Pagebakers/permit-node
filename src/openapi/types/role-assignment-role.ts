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

/**
 *
 * @export
 * @interface RoleAssignmentRole
 */
export interface RoleAssignmentRole {
  /**
   *
   * @type {string}
   * @memberof RoleAssignmentRole
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof RoleAssignmentRole
   */
  key: string;
  /**
   *
   * @type {string}
   * @memberof RoleAssignmentRole
   */
  name: string;
  /**
   *
   * @type {Array<string>}
   * @memberof RoleAssignmentRole
   */
  permissions?: Array<string>;
}