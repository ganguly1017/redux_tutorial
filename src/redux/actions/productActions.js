import {
 ADD_PRODUCT,
 DELETE_PROUCT
} from './types'


export const addProduct = (payload) => {
  return {
    type: ADD_PRODUCT,
    payload: payload
  }
}

export const deleteProduct = (payload) => {
  return {
    type: DELETE_PROUCT,
    payload: payload
  }
}