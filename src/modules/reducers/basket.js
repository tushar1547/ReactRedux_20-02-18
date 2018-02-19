import { ADD_PHONE_TO_BASKET, REMOVE_PHONE_FROM_BASKET , REMOVE_ELEMENT_FROM_BASKET} from '../actionTypes';
import R from 'ramda';

const initialState = []

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_PHONE_TO_BASKET:

      return R.append(payload, state)

    case REMOVE_PHONE_FROM_BASKET:

      return R.without(R.of(payload), state)

    case REMOVE_ELEMENT_FROM_BASKET:

    var i = state.indexOf(payload);

    if(i !== -1) {
    state.splice(i, 1);
    }

    var isNotNull = x => x !== null;

    return R.takeWhile(isNotNull, state);
    default:
      return state
  }
}
