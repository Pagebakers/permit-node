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
 * @interface ResourceActionGroupUpdate
 */
export interface ResourceActionGroupUpdate {
  /**
   * The name of the action group
   * @type {string}
   * @memberof ResourceActionGroupUpdate
   */
  name?: string;
  /**
   * An optional longer description of what this action group represents in your system
   * @type {string}
   * @memberof ResourceActionGroupUpdate
   */
  description?: string;
  /**
   * optional dictionary of key-value pairs that can be used to store arbitrary metadata about this action group. This metadata can be used to filter action groups using query parameters with attr_ prefix
   * @type {object}
   * @memberof ResourceActionGroupUpdate
   */
  attributes?: object;
  /**
   *
   * @type {Array<string>}
   * @memberof ResourceActionGroupUpdate
   */
  actions?: Array<string>;
}