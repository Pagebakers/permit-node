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
import { RoleAssignmentDetailedRead } from './role-assignment-detailed-read';

/**
 *
 * @export
 * @interface PaginatedResultRoleAssignmentDetailedRead
 */
export interface PaginatedResultRoleAssignmentDetailedRead {
  /**
   * List of Role Assignment Detaileds
   * @type {Array<RoleAssignmentDetailedRead>}
   * @memberof PaginatedResultRoleAssignmentDetailedRead
   */
  data: Array<RoleAssignmentDetailedRead>;
  /**
   *
   * @type {number}
   * @memberof PaginatedResultRoleAssignmentDetailedRead
   */
  total_count: number;
  /**
   *
   * @type {number}
   * @memberof PaginatedResultRoleAssignmentDetailedRead
   */
  page_count?: number;
}