/*
  | Test for [module] reducer ======================================
  ------------------------------------------------------------------
  [description]
*/

// Base Imports ====================================================
// -----------------------------------------------------------------
import reducer from '../reducer'
import * as types from '../actionTypes'
import INITIAL_STATE from '../reducer'

// Tests ===========================================================
// -----------------------------------------------------------------


describe('[module] reducer', () => {
  // Prove initial state works
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([INITIAL_STATE])
  })

  // How does namedAction effect the store?
  it('should handle namedAction', () => {
    expect(
      reducer([], {
        type: types.VERB_NOUN,
        payload: 'example content'
      })
    ).toEqual([
      {
        payload: 'example content',
        completed: false,
        id: 0
      }
    ])
  })
})