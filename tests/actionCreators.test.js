/*
  | Test for [module] reducer ======================================
  ------------------------------------------------------------------
  [description]
*/

// Base Imports ====================================================
// -----------------------------------------------------------------
import * as actions from '../actionCreators'
import * as types from '../actionTypes'

// Tests ===========================================================
// -----------------------------------------------------------------

describe('[module] actions', () => {
  it('should construct an action when VERB_NOUN is called.', () => {
    // test initial conditions
    const payload = {}

    // test expectations
    const expectedAction = {
      type: types.VERB_NOUN,
      payload
    }

    // test statement
    expect(actions.addTodo()).toEqual(expectedAction)
  })
})