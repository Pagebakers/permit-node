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

import { AttributeType } from './attribute-type';

/**
 *
 * @export
 * @interface ResourceAttributeCreate
 */
export interface ResourceAttributeCreate {
  /**
   * A URL-friendly name of the attribute (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the attribute.
   * @type {string}
   * @memberof ResourceAttributeCreate
   */
  key: string;
  /**
   * The type of the attribute, we currently support: `bool`, `number` (ints, floats), `time` (a timestamp), `string`, and `json`.
   * @type {AttributeType}
   * @memberof ResourceAttributeCreate
   */
  type: AttributeType;
  /**
   * An optional longer description of what this attribute respresents in your system
   * @type {string}
   * @memberof ResourceAttributeCreate
   */
  description?: string;
}