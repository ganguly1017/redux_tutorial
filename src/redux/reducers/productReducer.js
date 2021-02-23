import {
  ADD_PRODUCT, DELETE_PROUCT
} from './../actions/types'

// intialState
const initialState = {
  product: []
}

// Login Reducer
function productReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      var p = state.product
      p.push(action.payload)
      return {
        ...state,
        product: p
      }
    case DELETE_PROUCT:
      var a = state.product
      a.slice(12)
      return {
        ...state,
        product: a
      }
    default:
      return state
  }
}


export default productReducer