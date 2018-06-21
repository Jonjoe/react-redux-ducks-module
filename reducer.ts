/*
  | Reducer for [Module] 
  ------------------------------------------------------------------
  [description]
*/

// Base Imports
// -----------------------------------------------------------------
import * as types from "./actionTypes";
import { IState, IAction } from "./interfaces";

// Initial State for reducer
// -----------------------------------------------------------------
export const INITIAL_STATE: IState = {
  fetching: true,
  fetched: true,
  collection: [],
  error: ""
};

// Reducer function
// -----------------------------------------------------------------
const reducer = (state: IState = INITIAL_STATE, action: IAction): IState => {
  switch (action.type) {
    case types.FETCH_RESOURCE:
      return {
        ...state,
        fetching: true,
        fetched: false
      };

    case types.FETCH_RESOURCE_REJECTED:
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.error
      };

    case types.FETCH_RESOURCE_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: "",
        collection: action.data
      };

    default:
      return state;
  }
};

// Export Definition
// -----------------------------------------------------------------
export { reducer as default };
