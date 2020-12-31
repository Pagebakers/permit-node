import axios, { AxiosInstance } from 'axios'; // eslint-disable-line

import { config } from './config';
import { logger } from './logger';
import {
  resourceRegistry,
  ResourceDefinition,
  ActionDefinition,
  ResourceRegistry,
} from './registry';

import { ActionConfig } from './interface';

export interface AuthorizonConfig {
  token: string;
  appName?: string;
  serviceName?: string;
}

export interface SyncObjectResponse {
  id: string;
}

type Dict = Record<string, any>;

export class ResourceStub {
  constructor(public readonly resourceName: string) { }

  public action(config: ActionConfig): void {
    const action = new ActionDefinition(
      config.name,
      config.title,
      config.description,
      config.path,
      config.attributes || {}
    );
    authorizationClient.addActionToResource(this.resourceName, action);
  }
}

export class AuthorizationClient {
  private initialized = false;
  private registry: ResourceRegistry;
  private config: AuthorizonConfig = { token: '' };
  private client: AxiosInstance = axios.create();

  constructor() {
    this.registry = resourceRegistry;
  }

  public initialize(configOptions: AuthorizonConfig): void {
    this.initialized = true;
    this.config = configOptions;
    this.client = axios.create({
      baseURL: `${config.sidecarUrl}/`,
      headers: {
        Authorization: `Bearer ${configOptions.token}`,
      },
    });
    this.syncResources();
  }

  public get token(): string {
    this.throwIfNotInitialized();
    return this.config.token;
  }

  public addResource(resource: ResourceDefinition): ResourceStub {
    this.registry.addResource(resource);
    this.maybeSyncResource(resource);
    return new ResourceStub(resource.name);
  }

  public addActionToResource(
    resourceName: string,
    actionDef: ActionDefinition
  ): void {
    const action = this.registry.addActionToResource(resourceName, actionDef);
    if (action) {
      this.maybeSyncAction(action);
    }
  }

  private maybeSyncResource(resource: ResourceDefinition): void {
    if (this.initialized && !this.registry.isSynced(resource)) {
      logger.info(`syncing resource: ${resource.repr()}`);
      this.client
        .put<SyncObjectResponse>('sdk/resource', resource.dict())
        .then((response) => {
          this.registry.markAsSynced(resource, response.data.id);
        })
        .catch((error) => {
          logger.error(
            `tried to sync resource ${resource.name}, got error: ${error}`
          );
        });
    }
  }

  private maybeSyncAction(action: ActionDefinition): void {
    if (!action.resourceId) {
      return;
    }
    const resourceId: string = action.resourceId;

    if (this.initialized && !this.registry.isSynced(action)) {
      logger.info(`syncing action: ${action.repr()}`);
      this.client
        .put<SyncObjectResponse>(
          `sdk/resource/${resourceId}/action`,
          action.dict()
        )
        .then((response) => {
          this.registry.markAsSynced(action, response.data.id);
        })
        .catch((error) => {
          logger.error(
            `tried to sync action ${action.name}, got error: ${error}`
          );
        });
    }
  }

  private syncResources(): void {
    // will also sync actions
    for (let resource of this.registry.resourceList) {
      this.maybeSyncResource(resource);
    }
  }

  public updatePolicy(): void {
    this.throwIfNotInitialized();
    this.client
      .post('update_policy')
      .catch((error) =>
        logger.error(`tried to trigger policy update, got error: ${error}`)
      );
  }

  public updatePolicyData(): void {
    this.throwIfNotInitialized();
    this.client
      .post('update_policy_data')
      .catch((error) =>
        logger.error(`tried to trigger policy update, got error: ${error}`)
      );
  }

  private throwIfNotInitialized() {
    if (!this.initialized) {
      throw new Error('You must call authorizon.init() first!');
    }
  }

  public async syncUser(userId: string, userData: Dict): Promise<Dict | Error> {
    this.throwIfNotInitialized();
    const data = {
      id: userId,
      data: userData,
    };

    return await this.client
      .put<Dict>('sdk/user', data)
      .then((response) => {
        return response.data;
      })
      .catch((error: Error) => {
        logger.error(
          `tried to sync user with id: ${userId}, got error: ${error}`
        );
        return error;
      });
  }

  public async syncOrg(
    orgId: string,
    orgName: string
    // orgMetadata: Dict = {}
  ): Promise<Dict | Error> {
    this.throwIfNotInitialized();
    const data = {
      external_id: orgId,
      name: orgName,
    };

    return await this.client
      .post<Dict>('sdk/organization', data)
      .then((response) => {
        return response.data;
      })
      .catch((error: Error) => {
        logger.error(
          `tried to sync org with id: ${orgId}, got error: ${error}`
        );
        return error;
      });
  }

  public async deleteOrg(orgId: string): Promise<void> {
    this.throwIfNotInitialized();

    this.client.delete(`sdk/organization/${orgId}`).catch((error: Error) => {
      logger.error(
        `tried to delete org with id: ${orgId}, got error: ${error}`
      );
    });
  }

  public async addUserToOrg(
    userId: string,
    orgId: string
  ): Promise<Dict | Error> {
    this.throwIfNotInitialized();
    const data = {
      user_id: userId,
      org_id: orgId,
    };

    return await this.client
      .post<Dict>('sdk/add_user_to_org', data)
      .then((response) => {
        return response.data;
      })
      .catch((error: Error) => {
        logger.error(
          `tried to assign user ${userId} to org ${orgId}, got error: ${error}`
        );
        return error;
      });
  }

  public async getOrgsForUser(userId: string): Promise<Dict | Error> {
    this.throwIfNotInitialized();
    return await this.client
      .get<Dict>(`sdk/get_orgs_for_user/${userId}`)
      .then((response) => {
        return response.data;
      })
      .catch((error: Error) => {
        logger.error(
          `could not get user orgs for user: ${userId}, got error: ${error}`
        );
        return error;
      });
  }

  public async assignRole(
    role: string,
    userId: string,
    orgId: string
  ): Promise<Dict | Error> {
    this.throwIfNotInitialized();
    const data = {
      role: role,
      user_id: userId,
      org_id: orgId,
    };

    return await this.client
      .post<Dict>('sdk/assign_role', data)
      .then((response) => {
        return response.data;
      })
      .catch((error: Error) => {
        logger.error(
          `could not assign role ${role} to ${userId} in org ${orgId}, got error: ${error}`
        );
        return error;
      });
  }
}

export const authorizationClient = new AuthorizationClient();
