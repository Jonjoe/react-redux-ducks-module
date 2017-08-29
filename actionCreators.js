/*
  | ActionCreators for [Module] ===================================
  -----------------------------------------------------------------
  Basic react higher roder component.
*/

// Base Imports ====================================================
// -----------------------------------------------------------------
import types from './actionTypes'

// Named Action ====================================================
// -----------------------------------------------------------------
export function namedAction (/*Args*/) {
  // Do something
  return {
    type: types.VERB_NOUN,
    payload: {}
  }
}