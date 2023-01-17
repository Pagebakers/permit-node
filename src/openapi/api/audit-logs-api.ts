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

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { HTTPValidationError } from '../types';
// @ts-ignore
import { PaginatedResultAuditLog } from '../types';
/**
 * AuditLogsApi - axios parameter creator
 * @export
 */
export const AuditLogsApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary List Audit Logs
     * @param {string} projId Either the unique id of the project, or the URL-friendly key of the project (i.e: the \&quot;slug\&quot;).
     * @param {string} envId Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the \&quot;slug\&quot;).
     * @param {string} [pdpId] Filter by pdp config id
     * @param {Array<string>} [users] List of user keys or emails to filter by
     * @param {boolean} [decision] Filter by decision result
     * @param {Array<string>} [resources] Filter by resources
     * @param {string} [tenant] Filter by tenant
     * @param {string} [action] Filter by action
     * @param {number} [timestampFrom] Filter by timestamp from
     * @param {number} [timestampTo] Filter by timestamp to
     * @param {number} [page] Page number of the results to fetch, starting at 1.
     * @param {number} [perPage] The number of results per page (max 100).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAuditLogs: async (
      projId: string,
      envId: string,
      pdpId?: string,
      users?: Array<string>,
      decision?: boolean,
      resources?: Array<string>,
      tenant?: string,
      action?: string,
      timestampFrom?: number,
      timestampTo?: number,
      page?: number,
      perPage?: number,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'projId' is not null or undefined
      assertParamExists('listAuditLogs', 'projId', projId);
      // verify required parameter 'envId' is not null or undefined
      assertParamExists('listAuditLogs', 'envId', envId);
      const localVarPath = `/v2/pdps/{proj_id}/{env_id}/audit_logs`
        .replace(`{${'proj_id'}}`, encodeURIComponent(String(projId)))
        .replace(`{${'env_id'}}`, encodeURIComponent(String(envId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication HTTPBearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (pdpId !== undefined) {
        localVarQueryParameter['pdp_id'] = pdpId;
      }

      if (users) {
        localVarQueryParameter['users'] = users;
      }

      if (decision !== undefined) {
        localVarQueryParameter['decision'] = decision;
      }

      if (resources) {
        localVarQueryParameter['resources'] = resources;
      }

      if (tenant !== undefined) {
        localVarQueryParameter['tenant'] = tenant;
      }

      if (action !== undefined) {
        localVarQueryParameter['action'] = action;
      }

      if (timestampFrom !== undefined) {
        localVarQueryParameter['timestamp_from'] = timestampFrom;
      }

      if (timestampTo !== undefined) {
        localVarQueryParameter['timestamp_to'] = timestampTo;
      }

      if (page !== undefined) {
        localVarQueryParameter['page'] = page;
      }

      if (perPage !== undefined) {
        localVarQueryParameter['per_page'] = perPage;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * AuditLogsApi - functional programming interface
 * @export
 */
export const AuditLogsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = AuditLogsApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary List Audit Logs
     * @param {string} projId Either the unique id of the project, or the URL-friendly key of the project (i.e: the \&quot;slug\&quot;).
     * @param {string} envId Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the \&quot;slug\&quot;).
     * @param {string} [pdpId] Filter by pdp config id
     * @param {Array<string>} [users] List of user keys or emails to filter by
     * @param {boolean} [decision] Filter by decision result
     * @param {Array<string>} [resources] Filter by resources
     * @param {string} [tenant] Filter by tenant
     * @param {string} [action] Filter by action
     * @param {number} [timestampFrom] Filter by timestamp from
     * @param {number} [timestampTo] Filter by timestamp to
     * @param {number} [page] Page number of the results to fetch, starting at 1.
     * @param {number} [perPage] The number of results per page (max 100).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAuditLogs(
      projId: string,
      envId: string,
      pdpId?: string,
      users?: Array<string>,
      decision?: boolean,
      resources?: Array<string>,
      tenant?: string,
      action?: string,
      timestampFrom?: number,
      timestampTo?: number,
      page?: number,
      perPage?: number,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaginatedResultAuditLog>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listAuditLogs(
        projId,
        envId,
        pdpId,
        users,
        decision,
        resources,
        tenant,
        action,
        timestampFrom,
        timestampTo,
        page,
        perPage,
        options,
      );
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
  };
};

/**
 * AuditLogsApi - factory interface
 * @export
 */
export const AuditLogsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = AuditLogsApiFp(configuration);
  return {
    /**
     *
     * @summary List Audit Logs
     * @param {string} projId Either the unique id of the project, or the URL-friendly key of the project (i.e: the \&quot;slug\&quot;).
     * @param {string} envId Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the \&quot;slug\&quot;).
     * @param {string} [pdpId] Filter by pdp config id
     * @param {Array<string>} [users] List of user keys or emails to filter by
     * @param {boolean} [decision] Filter by decision result
     * @param {Array<string>} [resources] Filter by resources
     * @param {string} [tenant] Filter by tenant
     * @param {string} [action] Filter by action
     * @param {number} [timestampFrom] Filter by timestamp from
     * @param {number} [timestampTo] Filter by timestamp to
     * @param {number} [page] Page number of the results to fetch, starting at 1.
     * @param {number} [perPage] The number of results per page (max 100).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAuditLogs(
      projId: string,
      envId: string,
      pdpId?: string,
      users?: Array<string>,
      decision?: boolean,
      resources?: Array<string>,
      tenant?: string,
      action?: string,
      timestampFrom?: number,
      timestampTo?: number,
      page?: number,
      perPage?: number,
      options?: any,
    ): AxiosPromise<PaginatedResultAuditLog> {
      return localVarFp
        .listAuditLogs(
          projId,
          envId,
          pdpId,
          users,
          decision,
          resources,
          tenant,
          action,
          timestampFrom,
          timestampTo,
          page,
          perPage,
          options,
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for listAuditLogs operation in AuditLogsApi.
 * @export
 * @interface AuditLogsApiListAuditLogsRequest
 */
export interface AuditLogsApiListAuditLogsRequest {
  /**
   * Either the unique id of the project, or the URL-friendly key of the project (i.e: the \&quot;slug\&quot;).
   * @type {string}
   * @memberof AuditLogsApiListAuditLogs
   */
  readonly projId: string;

  /**
   * Either the unique id of the environment, or the URL-friendly key of the environment (i.e: the \&quot;slug\&quot;).
   * @type {string}
   * @memberof AuditLogsApiListAuditLogs
   */
  readonly envId: string;

  /**
   * Filter by pdp config id
   * @type {string}
   * @memberof AuditLogsApiListAuditLogs
   */
  readonly pdpId?: string;

  /**
   * List of user keys or emails to filter by
   * @type {Array<string>}
   * @memberof AuditLogsApiListAuditLogs
   */
  readonly users?: Array<string>;

  /**
   * Filter by decision result
   * @type {boolean}
   * @memberof AuditLogsApiListAuditLogs
   */
  readonly decision?: boolean;

  /**
   * Filter by resources
   * @type {Array<string>}
   * @memberof AuditLogsApiListAuditLogs
   */
  readonly resources?: Array<string>;

  /**
   * Filter by tenant
   * @type {string}
   * @memberof AuditLogsApiListAuditLogs
   */
  readonly tenant?: string;

  /**
   * Filter by action
   * @type {string}
   * @memberof AuditLogsApiListAuditLogs
   */
  readonly action?: string;

  /**
   * Filter by timestamp from
   * @type {number}
   * @memberof AuditLogsApiListAuditLogs
   */
  readonly timestampFrom?: number;

  /**
   * Filter by timestamp to
   * @type {number}
   * @memberof AuditLogsApiListAuditLogs
   */
  readonly timestampTo?: number;

  /**
   * Page number of the results to fetch, starting at 1.
   * @type {number}
   * @memberof AuditLogsApiListAuditLogs
   */
  readonly page?: number;

  /**
   * The number of results per page (max 100).
   * @type {number}
   * @memberof AuditLogsApiListAuditLogs
   */
  readonly perPage?: number;
}

/**
 * AuditLogsApi - object-oriented interface
 * @export
 * @class AuditLogsApi
 * @extends {BaseAPI}
 */
export class AuditLogsApi extends BaseAPI {
  /**
   *
   * @summary List Audit Logs
   * @param {AuditLogsApiListAuditLogsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuditLogsApi
   */
  public listAuditLogs(
    requestParameters: AuditLogsApiListAuditLogsRequest,
    options?: AxiosRequestConfig,
  ) {
    return AuditLogsApiFp(this.configuration)
      .listAuditLogs(
        requestParameters.projId,
        requestParameters.envId,
        requestParameters.pdpId,
        requestParameters.users,
        requestParameters.decision,
        requestParameters.resources,
        requestParameters.tenant,
        requestParameters.action,
        requestParameters.timestampFrom,
        requestParameters.timestampTo,
        requestParameters.page,
        requestParameters.perPage,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }
}