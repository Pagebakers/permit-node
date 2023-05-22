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
import { Jwks } from './jwks';

/**
 *
 * @export
 * @interface EnvironmentCreate
 */
export interface EnvironmentCreate {
  /**
   * A URL-friendly name of the environment (i.e: slug). You will be able to query later using this key instead of the id (UUID) of the environment.
   * @type {string}
   * @memberof EnvironmentCreate
   */
  key: string;
  /**
   * The name of the environment
   * @type {string}
   * @memberof EnvironmentCreate
   */
  name: string;
  /**
   * an optional longer description of the environment
   * @type {string}
   * @memberof EnvironmentCreate
   */
  description?: string;
  /**
   * when using gitops feature, an optional branch name for the environment
   * @type {string}
   * @memberof EnvironmentCreate
   */
  custom_branch_name?: string;
  /**
   *
   * @type {Jwks}
   * @memberof EnvironmentCreate
   */
  jwks?: Jwks;
}
