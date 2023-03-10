import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../Actions/cart';
import './Entity.css';

function Entity(props) {
  const dispatch = useDispatch();
  let [inCart, setInCart] = useState(false);

  /**
   * category is character or weapon
   * type = variations within each category
   */
  const { name, icon, id, type, typeIcon } = props.entity;
  const cartStoreData = useSelector((store) => store.cart);

  // on mount, check if entity is in cart
  useEffect(() => {
    if (cartStoreData.filter((e) => e.id === id).length === 1) {
      setInCart(true);
    }
  }, []);

  let nameType = '';
  let nameCheck = name.split(' ');

  // for second half of &&,
  // first part is to not shrink short names eg Yae Miko
  // second part is to catch multi line names with
  // short individual parts eg Fruit of Fulfillment
  if (
    nameCheck.length > 1 &&
    (nameCheck[0].length + nameCheck[1].length > 13 || nameCheck.length > 2)
  ) {
    nameType = 'multi-line-name';
  }

  function handleAdd() {
    dispatch(addToCart({ name, id, icon }));
    setInCart(true);
  }

  function handleRemove() {
    dispatch(removeFromCart(id));
    setInCart(false);
  }

  // heart filled in if in cart
  let heart = inCart ? (
    <i
      className="fas fa-heart filled-in-heart"
      onClick={() => handleRemove()}
    ></i>
  ) : (
    <i className="far fa-heart" onClick={() => handleAdd()}></i>
  );

  return (
    <div className="col d-flex justify-content-center">
      <div className="card align-items-center entity-card">
        <div className={`card-top-${type}`}>
          <img className="card-top-img" src={icon} alt={id}></img>
        </div>
        <div className="card-body">
          <h6 className={`card-title ${nameType}`}>
            <b>{name}</b>
          </h6>
          <p className="card-text">
            <img className="type-icon" src={typeIcon} alt={type}></img>
            <span className="heart-icon">{heart}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Entity;
