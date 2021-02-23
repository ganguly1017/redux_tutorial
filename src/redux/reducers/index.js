import loginReducer from './loginReducer'
import productReducer from './productReducer'
import { combineReducers } from 'redux'


// Root Reducer
export default combineReducers({
  login: loginReducer,
  product: productReducer
})