import { combineReducers } from 'redux'
import formReducer from '../containers/Form/Form.reducer'
import CardsReducers from '../containers/Cards/Cards.reducers'

export default combineReducers({ formReducer, idToEdit: CardsReducers })
