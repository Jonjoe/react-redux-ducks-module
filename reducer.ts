/*
  | Reducer for [Module] ===========================================
  ------------------------------------------------------------------
  [description]
*/

// Base Imports ====================================================
// -----------------------------------------------------------------
import * as types from './actionTypes';

// Type Definitions ================================================
// -----------------------------------------------------------------
export interface State {}

export interface CustomError {}

export interface DataPoint {
  _id: number;
  __v: number;
}

export interface Action {
  type: string;
  data?: DataPoint[]; 
  error?: Error; 
}

// Initial State for reducer =======================================
// -----------------------------------------------------------------
export const INITIAL_STATE: State = {};

// Reducer function ================================================
// -----------------------------------------------------------------
const reducer = (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case types.FETCH_RESOURCE:
      return {
        ...state,
        fetching: true
      };

    case types.FETCH_RESOURCE_REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.error
      };

    case types.FETCH_RESOURCE_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        collection: action.data
      };

    default:
      return state;
  }
};

// Export Definition ===============================================
// -----------------------------------------------------------------
export {
  reducer as default
};
