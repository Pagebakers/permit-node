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
import { Engine } from './engine';

/**
 * dummy engine class in case we couldn\'t parse the log but we didn\'t want to drop it
 * @export
 * @interface DummyEngineModel
 */
export interface DummyEngineModel {
  /**
   *
   * @type {Engine}
   * @memberof DummyEngineModel
   */
  engine?: Engine;
  /**
   *
   * @type {string}
   * @memberof DummyEngineModel
   */
  timestamp?: string;
}
