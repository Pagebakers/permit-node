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
import { AttributeType } from './attribute-type';

/**
 *
 * @export
 * @interface ResourceAttributeUpdate
 */
export interface ResourceAttributeUpdate {
  /**
   * The type of the attribute, we currently support: `bool`, `number` (ints, floats), `time` (a timestamp), `string`, and `json`.
   * @type {AttributeType}
   * @memberof ResourceAttributeUpdate
   */
  type?: AttributeType;
  /**
   * An optional longer description of what this attribute respresents in your system
   * @type {string}
   * @memberof ResourceAttributeUpdate
   */
  description?: string;
}
