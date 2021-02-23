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
      var product = state.product
      product.push(action.payload)
      return {
        ...state,
        product: product
      }
    case DELETE_PROUCT:
      var product = state.product
      product.slice(12)
      return {
        ...state,
        product: product
      }
    default:
      return state
  }
}


export default productReducer