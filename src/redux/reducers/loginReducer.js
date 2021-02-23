import {
  LOGIN_REQUEST, REGISTER_USER
} from './../actions/types'

// intialState
const initialState = {
  isLoggedIn: false,
  user: {
    email: 'abc@abc.com',
    password: '123456'
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