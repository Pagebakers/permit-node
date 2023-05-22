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
 * @interface EnvironmentRegeneration
 */
export interface EnvironmentRegeneration {
  /**
   *
   * @type {string}
   * @memberof EnvironmentRegeneration
   */
  scope: EnvironmentRegenerationScopeEnum;
  /**
   *
   * @type {string}
   * @memberof EnvironmentRegeneration
   */
  org_id: string;
  /**
   *
   * @type {string}
   * @memberof EnvironmentRegeneration
   */
  proj_id: string;
  /**
   *
   * @type {string}
   * @memberof EnvironmentRegeneration
   */
  env_id: string;
}

export const EnvironmentRegenerationScopeEnum = {
  Environment: 'environment',
} as const;

export type EnvironmentRegenerationScopeEnum =
  typeof EnvironmentRegenerationScopeEnum[keyof typeof EnvironmentRegenerationScopeEnum];
