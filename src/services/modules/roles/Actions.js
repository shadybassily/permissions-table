import Types from "./Types";

//! roles
export const GetRoleDetails = (payload) => ({
  type: Types.GET_ROLE_DETAILS,
  payload,
});

export const CreateRole = (payload) => ({
  type: Types.CREATE_ROLE,
  payload,
});

export const DeleteRole = (payload) => ({
  type: Types.DELETE_ROLE,
  payload,
});

export const UpdateRole = (payload) => ({
  type: Types.UPDATE_ROLE,
  payload,
});

