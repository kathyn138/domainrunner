import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem';
import './CartContainer.css';

function CartContainer() {
  const cartStoreData = useSelector((store) => store.cart);
  
  const emptyCartMessage = (
    <React.Fragment>
      <p className="loading-message">Cart is currently empty!</p>
    </React.Fragment>
  );

  let cartItems = cartStoreData.map((e) =>
    <CartItem entity={e} />
  )

  let display = cartStoreData.length ? cartItems : emptyCartMessage

  return (
    <div className="col-8 text-center cart-container">
      <div className="row">
        <h3 className="cart-container-title">
          <b>Cart</b>
        </h3>
      </div>
      <div className="row">{display}</div>
    </div>
  );
}

export default CartContainer;
