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
const namedAction = (/*Args*/)  => {
  // Do something
  return {
    type: types.VERB_NOUN,
    payload: {}
  }
}

export {
  namedAction
}