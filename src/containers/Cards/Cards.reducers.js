import { SET_ID_TO_EDIT } from './Cards.actions'

const initialState = null

export default (state = initialState, action) => {
  if (SET_ID_TO_EDIT === action.type) {
    return action.payload
  } else {
    return state
  }
}
