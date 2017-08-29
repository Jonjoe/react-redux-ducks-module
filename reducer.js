/*
  | Reducer for [Module] ==========================================
  -----------------------------------------------------------------
  ...
*/

// Base Imports ====================================================
// -----------------------------------------------------------------
import types from './actionTypes'
import actions from './actionCreators'

// Definition for inital state =====================================
// -----------------------------------------------------------------
const INITIAL_STATE = {}

// Reducer function ================================================
// -----------------------------------------------------------------
export default (state = INITIAL_STATE, action) => {
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
