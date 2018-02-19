import React from 'react';
import {connect} from 'react-redux';
import R from 'ramda';
import {removePhoneFromBasket} from '../../../modules/actions';
import { getBasketPhonesWithCount, getTotalBasketPrice } from '../../selectors';

const BasketCart = ({basketphones, totalPrice, removePhoneFromBasket}) => {
  const isBasketEmpty = R.isEmpty(basketphones)
  const renderContent = () => (
      <div>
        {isBasketEmpty && <div className='emp'>Your cart is empty <i className="fa fa-shopping-cart" style={{fontSize: '25px', marginLeft: '5px'}}></i></div>}
        <div className="table-responsive">
          <table className="table-bordered table-striped">
            <tbody>
              {basketphones.map((phone1, index) => (
                <tr key={index} className="item-checkout">
                  <td><b>{phone1.brandname} {phone1.productname}</b></td>
                  <td>&#x20B9;{phone1.price}</td>
                  <td>{phone1.count}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => removePhoneFromBasket(phone1.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {
          R.not(isBasketEmpty) &&
          <div className="row">
            <div className="pull-left total-user-checkout">
              <b>Total: </b>
              ₹{totalPrice}
            </div>
          </div>
        }
      </div>
    )

  return (
    <div className="table-container">
        <div className="container">
          <div className="row">
            <div>
              {renderContent()}
            </div>
        </div>
      </div>
    </div>
    )
}

const mapStateToProps = state => ({
  basketphones: getBasketPhonesWithCount(state),
  totalPrice: getTotalBasketPrice(state)
})

const mapDispatchToProps = {
  removePhoneFromBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketCart)
