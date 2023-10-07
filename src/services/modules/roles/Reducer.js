/* eslint-disable array-callback-return */
import Types from "./Types";

const INIT_STATE = {
  roles: [],
  role: {},
  resources: [
    {
      "id": 1,
      "name": "products",
      "presentation": "products"
    },
    {
      "id": 2,
      "name": "variants",
      "presentation": "variants"
    },
    {
      "id": 3,
      "name": "occasions",
      "presentation": "occasions"
    },
    {
      "id": 4,
      "name": "google_cities",
      "presentation": "google_cities"
    },
    {
      "id": 5,
      "name": "order_complaints",
      "presentation": "order_complaints"
    },
    {
      "id": 6,
      "name": "wishlists",
      "presentation": "wishlists"
    },
  ],
};

export default function adminUsersReducer(state = INIT_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    //! ROLES
    case Types.ROLES_LOADING: {
      return {
        ...state,
        load: payload,
      };
    }
    case Types.GET_ROLE_DETAILS: {

      return {
        ...state,
        role: state?.roles?.filter(role => role.id == payload.id)[0],
      };
    }
    case Types.CREATE_ROLE: {
      return {
        ...state,
        roles: [...state.roles, payload]
      };
    }
    case Types.DELETE_ROLE: {
      return {
        ...state,
        roles: state.roles.filter(role => role.id !== payload.id)
      };
    }
    case Types.UPDATE_ROLE: {
      return {
        ...state,
        roles: state.roles.map(role => role.id == payload.id ? payload : role)
      };
    }
    //! RESOURCES
    default: {
      return state;
    }
  }
}
