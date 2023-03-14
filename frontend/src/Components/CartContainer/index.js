import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem';
import './CartContainer.css';

function CartContainer() {
  const cartStoreData = useSelector((store) => store.cart);

  const emptyCartMessage = (
    <div className="row align-items-center">
      <div className="col">
        <img src="https://cdn.discordapp.com/attachments/709286174879121519/1085312872063709275/E2-VjLtWUAEN-Na.png"></img>
      </div>
      <div className="col">
        <p>Cart is currently empty!</p>
        <p>Select some characters or weapons to get started.</p>
      </div>
    </div>
  );

  let cartItems = cartStoreData.map((e) => <CartItem entity={e} />);

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
