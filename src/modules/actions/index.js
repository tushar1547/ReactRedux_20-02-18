import {
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILURE,
  ADD_PHONE_TO_BASKET,
  REMOVE_PHONE_FROM_BASKET,
  REMOVE_ELEMENT_FROM_BASKET

} from '../actionTypes';

import { fetchPhones as fetchPhonesApi } from '../api';

export const fetchPhones = () => async dispatch => {
  try{
    dispatch({type: FETCH_PHONES_START})

    const phones = await fetchPhonesApi()

    dispatch({
      type: FETCH_PHONES_SUCCESS,
      payload: phones
    })
  } catch(err){
    dispatch({
      type: FETCH_PHONES_FAILURE,
      payload: err,
      error: true
    })
  }
}

export const addPhoneToBasket = id => dispatch => {
  dispatch({
    type: ADD_PHONE_TO_BASKET,
    payload: id
  })
}

export const removePhoneFromBasket = id => async dispatch => {
  dispatch({
    type: REMOVE_PHONE_FROM_BASKET,
    payload: id
  })
}

export const removeElementFromBasket = id => async dispatch => {
  dispatch({
    type: REMOVE_ELEMENT_FROM_BASKET,
    payload: id
  })
}
