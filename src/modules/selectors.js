import R from 'ramda';
import { removePhoneFromBasket, removeElementFromBasket } from '../modules/actions';

var currentState = [];
const getPhoneById = (state, id) => {
   var i=1,j=0;
   while(i<=state.phonesPage.ids.length){
    state.phones[i].count = 0;
    while(j<state.basket.length){
      if(state.phones[i].id == state.basket[j]){
        state.phones[i].count++;
      }
      j++;
    }

  i++; j= 0;
   }


  return R.prop(id, state.phones)
}
export const getPhones = state => {
  const phones = R.map(id => getPhoneById(state, id), state.phonesPage.ids);
  return phones;
}

export const getTotalBasketCount = state => R.length(state.basket);

export const getTotalBasketPrice = state => {
  const totalPrice = R.compose(
      R.sum,
      R.pluck('price'),
      R.map(id => getPhoneById(state, id))
    )(state.basket)
    return totalPrice;

}


export const getBasketPhonesWithCount = state => {

  const uniqueIds = R.uniq(state.basket);

  const phoneCount = id => R.compose(
      R.length,
      R.filter(basketId => R.equals(id, basketId))
    )(state.basket)

  const phoneWithCount = phone => R.assoc('count', phoneCount(phone.id), phone);

  const phones = R.compose(
    R.map(phoneWithCount),
      R.map(id => getPhoneById(state, id))
  )(uniqueIds)

    return phones
}

