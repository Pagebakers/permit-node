import { ResourceDefinition, ActionDefinition } from "./registry";
import { authorizationClient } from "./client";
import { enforcer } from './enforcer';
import { sidecarUrl } from "./constants";
export const init = (config) => {
    console.log(`authorizon.init(), sidecarUrl: ${sidecarUrl}`);
    authorizationClient.initialize(config);
};
export const resource = (config) => {
    const resource = new ResourceDefinition(config.name, config.type, config.path, config.description, config.actions || [], config.attributes || {});
    return authorizationClient.addResource(resource);
};
export const action = (config) => {
    return new ActionDefinition(config.name, config.title, config.description, config.path, config.attributes || {});
};
export const syncUser = authorizationClient.syncUser;
export const syncOrg = authorizationClient.syncOrg;
export const deleteOrg = authorizationClient.deleteOrg;
export const addUserToOrg = authorizationClient.addUserToOrg;
export const getOrgsForUser = authorizationClient.getOrgsForUser;
export const assignRole = authorizationClient.assignRole;
export const updatePolicyData = authorizationClient.updatePolicyData;
export const isAllowed = enforcer.isAllowed;
export const transformResourceContext = enforcer.addTransform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2xFLE9BQU8sRUFBb0IsbUJBQW1CLEVBQWdCLE1BQU0sVUFBVSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQW1CekMsTUFBTSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQ2xCLE1BQXdCLEVBQ2xCLEVBQUU7SUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQzVELG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUE7QUFFRCxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsQ0FBQyxNQUFzQixFQUFnQixFQUFFO0lBQy9ELE1BQU0sUUFBUSxHQUFHLElBQUksa0JBQWtCLENBQ3JDLE1BQU0sQ0FBQyxJQUFJLEVBQ1gsTUFBTSxDQUFDLElBQUksRUFDWCxNQUFNLENBQUMsSUFBSSxFQUNYLE1BQU0sQ0FBQyxXQUFXLEVBQ2xCLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRSxFQUNwQixNQUFNLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FDeEIsQ0FBQztJQUNGLE9BQU8sbUJBQW1CLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQTtBQUVELE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRyxDQUFDLE1BQW9CLEVBQW9CLEVBQUU7SUFDL0QsT0FBTyxJQUFJLGdCQUFnQixDQUN6QixNQUFNLENBQUMsSUFBSSxFQUNYLE1BQU0sQ0FBQyxLQUFLLEVBQ1osTUFBTSxDQUFDLFdBQVcsRUFDbEIsTUFBTSxDQUFDLElBQUksRUFDWCxNQUFNLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FDeEIsQ0FBQztBQUNKLENBQUMsQ0FBQTtBQUVELE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxRQUFRLENBQUM7QUFDckQsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFHLG1CQUFtQixDQUFDLE9BQU8sQ0FBQztBQUNuRCxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsbUJBQW1CLENBQUMsU0FBUyxDQUFDO0FBQ3ZELE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxtQkFBbUIsQ0FBQyxZQUFZLENBQUM7QUFDN0QsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLG1CQUFtQixDQUFDLGNBQWMsQ0FBQztBQUNqRSxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsbUJBQW1CLENBQUMsVUFBVSxDQUFDO0FBQ3pELE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDO0FBRXJFLE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO0FBQzVDLE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMifQ==