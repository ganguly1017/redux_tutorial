import {
  LOGIN_REQUEST
} from './../actions/types'

// intialState
const initialState = {
  isLoggedIn: false,
  user: {
    email: '',
    password: ''
  }
}

// Login Reducer
function loginReducer(state = initialState, action){
  switch (action.type){
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      }
    default:
      return state
  }
}

export default loginReducer