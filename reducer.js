/*
  | Reducer for [Module] ===================================
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
export default reducer = (state = INITIAL_STATE, action) => {
  const resourceObj = {}
  switch (action.type) {
    case Types.FETCH_RESOURCE:
      return {
        ...state,
        fetching: true
      }

    case Types.FETCH_RESOURCE_REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }

    case Types.FETCH_RESOURCE_FULFILLED:
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
