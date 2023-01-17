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
import { PermissionLevelRoleRead } from './permission-level-role-read';
// May contain unused imports in some cases
// @ts-ignore
import { Settings } from './settings';
// May contain unused imports in some cases
// @ts-ignore
import { WebhookRead } from './webhook-read';

/**
 *
 * @export
 * @interface ElementsConfigRead
 */
export interface ElementsConfigRead {
  /**
   * A URL-friendly name of the elements_config (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the elements_config.
   * @type {string}
   * @memberof ElementsConfigRead
   */
  key: string;
  /**
   * Unique id of the elements_config
   * @type {string}
   * @memberof ElementsConfigRead
   */
  id: string;
  /**
   * Unique id of the organization that the elements_config belongs to.
   * @type {string}
   * @memberof ElementsConfigRead
   */
  organization_id: string;
  /**
   * Unique id of the project that the elements_config belongs to.
   * @type {string}
   * @memberof ElementsConfigRead
   */
  project_id: string;
  /**
   * Unique id of the environment that the elements_config belongs to.
   * @type {string}
   * @memberof ElementsConfigRead
   */
  environment_id: string;
  /**
   * Date and time when the elements_config was created (ISO_8601 format).
   * @type {string}
   * @memberof ElementsConfigRead
   */
  created_at: string;
  /**
   * Date and time when the elements_config was last updated/modified (ISO_8601 format).
   * @type {string}
   * @memberof ElementsConfigRead
   */
  updated_at: string;
  /**
   *
   * @type {boolean}
   * @memberof ElementsConfigRead
   */
  is_active: boolean;
  /**
   * The name of the elements_config
   * @type {string}
   * @memberof ElementsConfigRead
   */
  name: string;
  /**
   * The type of the elements interface, e.g: user management
   * @type {ElementsType}
   * @memberof ElementsConfigRead
   */
  elements_type: ElementsType;
  /**
   * Obj with the options of the elements interface, e.g: primary color
   * @type {{ [key: string]: Settings; }}
   * @memberof ElementsConfigRead
   */
  settings: { [key: string]: Settings };
  /**
   * Obj with levels as keys and role ids as values
   * @type {{ [key: string]: Array<PermissionLevelRoleRead>; }}
   * @memberof ElementsConfigRead
   */
  roles_to_levels: { [key: string]: Array<PermissionLevelRoleRead> };
  /**
   *
   * @type {WebhookRead}
   * @memberof ElementsConfigRead
   */
  webhook?: WebhookRead;
}
