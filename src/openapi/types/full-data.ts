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
import { RoleData } from './role-data';
// May contain unused imports in some cases
// @ts-ignore
import { UserData } from './user-data';

/**
 *
 * @export
 * @interface FullData
 */
export interface FullData {
  /**
   *
   * @type {{ [key: string]: UserData; }}
   * @memberof FullData
   */
  users: { [key: string]: UserData };
  /**
   *
   * @type {{ [key: string]: RoleData; }}
   * @memberof FullData
   */
  roles: { [key: string]: RoleData };
  /**
   *
   * @type {{ [key: string]: { [key: string]: { [key: string]: Array<string>; }; }; }}
   * @memberof FullData
   */
  condition_set_rules: { [key: string]: { [key: string]: { [key: string]: Array<string> } } };
}
