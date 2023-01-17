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
import { ElementsType } from './elements-type';
// May contain unused imports in some cases
// @ts-ignore
import { Settings } from './settings';
// May contain unused imports in some cases
// @ts-ignore
import { WebhookCreate } from './webhook-create';

/**
 *
 * @export
 * @interface ElementsConfigCreate
 */
export interface ElementsConfigCreate {
  /**
   * A URL-friendly name of the elements_config (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the elements_config.
   * @type {string}
   * @memberof ElementsConfigCreate
   */
  key: string;
  /**
   * The name of the elements_config
   * @type {string}
   * @memberof ElementsConfigCreate
   */
  name: string;
  /**
   * The type of the elements interface, e.g: user management
   * @type {ElementsType}
   * @memberof ElementsConfigCreate
   */
  elements_type: ElementsType;
  /**
   * Obj with the options of the elements interface, e.g: primary color
   * @type {{ [key: string]: Settings; }}
   * @memberof ElementsConfigCreate
   */
  settings: { [key: string]: Settings };
  /**
   * Obj with levels as keys and role ids as values
   * @type {{ [key: string]: Array<string>; }}
   * @memberof ElementsConfigCreate
   */
  roles_to_levels: { [key: string]: Array<string> };
  /**
   *
   * @type {WebhookCreate}
   * @memberof ElementsConfigCreate
   */
  webhook?: WebhookCreate;
}