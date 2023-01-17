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
/**
 * DecisionLogsIngressApi - axios parameter creator
 * @export
 */
export const DecisionLogsIngressApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * This ingress endpoint captures OPA decision logs.
     * @summary OPA Decision Logs Ingress
     * @param {Array<object>} requestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    insertOpaDecisionLogs: async (
      requestBody: Array<object>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'requestBody' is not null or undefined
      assertParamExists('insertOpaDecisionLogs', 'requestBody', requestBody);
      const localVarPath = `/v2/decision-logs/ingress`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication HTTPBearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        requestBody,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * DecisionLogsIngressApi - functional programming interface
 * @export
 */
export const DecisionLogsIngressApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = DecisionLogsIngressApiAxiosParamCreator(configuration);
  return {
    /**
     * This ingress endpoint captures OPA decision logs.
     * @summary OPA Decision Logs Ingress
     * @param {Array<object>} requestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async insertOpaDecisionLogs(
      requestBody: Array<object>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.insertOpaDecisionLogs(
        requestBody,
        options,
      );
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
  };
};

/**
 * DecisionLogsIngressApi - factory interface
 * @export
 */
export const DecisionLogsIngressApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = DecisionLogsIngressApiFp(configuration);
  return {
    /**
     * This ingress endpoint captures OPA decision logs.
     * @summary OPA Decision Logs Ingress
     * @param {Array<object>} requestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    insertOpaDecisionLogs(requestBody: Array<object>, options?: any): AxiosPromise<void> {
      return localVarFp
        .insertOpaDecisionLogs(requestBody, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for insertOpaDecisionLogs operation in DecisionLogsIngressApi.
 * @export
 * @interface DecisionLogsIngressApiInsertOpaDecisionLogsRequest
 */
export interface DecisionLogsIngressApiInsertOpaDecisionLogsRequest {
  /**
   *
   * @type {Array<object>}
   * @memberof DecisionLogsIngressApiInsertOpaDecisionLogs
   */
  readonly requestBody: Array<object>;
}

/**
 * DecisionLogsIngressApi - object-oriented interface
 * @export
 * @class DecisionLogsIngressApi
 * @extends {BaseAPI}
 */
export class DecisionLogsIngressApi extends BaseAPI {
  /**
   * This ingress endpoint captures OPA decision logs.
   * @summary OPA Decision Logs Ingress
   * @param {DecisionLogsIngressApiInsertOpaDecisionLogsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DecisionLogsIngressApi
   */
  public insertOpaDecisionLogs(
    requestParameters: DecisionLogsIngressApiInsertOpaDecisionLogsRequest,
    options?: AxiosRequestConfig,
  ) {
    return DecisionLogsIngressApiFp(this.configuration)
      .insertOpaDecisionLogs(requestParameters.requestBody, options)
      .then((request) => request(this.axios, this.basePath));
  }
}