import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhones, addPhoneToBasket, removePhoneFromBasket, removeElementFromBasket } from '../../../modules/actions';
import { getPhones } from '../../selectors';
import { getBasketPhonesWithCount,getTotalBasketPrice } from '../../selectors';

class Phones extends Component {
  componentDidMount(){
    this.props.fetchPhones();
  }

  renderPhone(phone, index){
    const {addPhoneToBasket, removePhoneFromBasket, removeElementFromBasket}=this.props;
    return (
        <div className="col-sm-4 col-lg-4 col-md-4 book-list" key={index}>
          <div className="thumbnail">
            <img
              className="img-thumbnail"
              className="image"
              src={phone.image}
              alt={phone.name}
            />
          </div>
          <div className="caption">
            <h3>{phone.brandname}</h3>
            <h4><b>{phone.productname}</b></h4>
            <p>{phone.description}</p>
            <h4><b>&#x20B9;{phone.price}</b></h4>
            <p className="itemButton">
              <button
                className="btn btn-primary"
                onClick={() => addPhoneToBasket(phone.id)}
              >
                +
              </button>
               <span> {phone.count} in cart </span>
              <button
                className="btn btn-danger"
                onClick={() => removeElementFromBasket(phone.id)}
              >
                -
              </button>
            </p>
          </div>
        </div>
      )
  }

  render(){
    const {allphones}=this.props;
    return (
        <div className="books row">
          {allphones.map((phone1, index) => this.renderPhone(phone1, index))}
        </div>
      )
   }
}

const mapStateToProps = state => ({
  phone: getBasketPhonesWithCount(state),
  allphones: getPhones(state),
  totalPrice: getTotalBasketPrice(state)
})

const mapDispatchToProps = {
  fetchPhones,
  addPhoneToBasket,
removePhoneFromBasket, removeElementFromBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(Phones);
