import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem';
import './CartContainer.css';

function CartContainer() {
  const cartStoreData = useSelector((store) => store.cart);

  const emptyCartMessage = (
    <div className="row align-items-center">
      <div className="col">
        <img
          src="https://github.com/kathyn138/farmingimpact/blob/main/frontend/src/Assets/paimon-cart-empty.png?raw=true"
          alt="empty cart logo"
        ></img>
      </div>
      <div className="col">
        <p>Cart is currently empty!</p>
        <p>Select some characters or weapons to get started.</p>
      </div>
    </div>
  );

  let cartItems = cartStoreData.map((e) => (
    <CartItem key={`cart-${e.id}`} entity={e} />
  ));

  let display = cartStoreData.length ? cartItems : emptyCartMessage;

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
