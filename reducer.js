/*
  | Reducer for [Module] ==========================================
  -----------------------------------------------------------------
  [description]
*/

// Base Imports ====================================================
// -----------------------------------------------------------------
import * as types from './actionTypes'

// Definition for inital state =====================================
// -----------------------------------------------------------------
export const INITIAL_STATE = {}

// Reducer function ================================================
// -----------------------------------------------------------------
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_RESOURCE:
      return {
        ...state,
        fetching: true
      }

    case types.FETCH_RESOURCE_REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }

    case types.FETCH_RESOURCE_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        collection: action.payload.data
      }

    default:
      return state
  }
}

// Export Definition ===============================================
// -----------------------------------------------------------------
export {
  reducer as default
}
