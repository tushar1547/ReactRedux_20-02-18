import R from 'ramda';
import { FETCH_PHONES_SUCCESS, REMOVE_ELEMENT_FROM_BASKET } from '../actionTypes';

const initialState = {

}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      const newValues = R.indexBy(R.prop('id'), payload)
      return R.merge(state, newValues)

    default:
      return state
  }

}
