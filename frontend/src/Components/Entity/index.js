import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../Actions/cart';
import './Entity.css';

function Entity(props) {
  const dispatch = useDispatch();
  let [inCart, setInCart] = useState(false);

  const { name, id, type } = props.entity;
  const category = props.category;
  const cartStoreData = useSelector((store) => store.cart[category]);

  // on mount, check if entity is in cart
  useEffect(() => {
    if (cartStoreData.includes(id)) {
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

  // directory for type-icon changes on entity type
  // directory for char !== char
  let typeIconDir = '';

  if (props.category === 'characters') {
    typeIconDir = 'elements';
  } else {
    typeIconDir = 'weapons';
  }

  function handleAdd() {
    dispatch(addToCart(props.category, id));
    setInCart(true);
  }

  function handleRemove() {
    dispatch(removeFromCart(props.category, id));
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
          <img
            className="card-top-img"
            src={`https://paimon.moe/images/${props.category}/${id}.png`}
            alt="Card image cap"
          ></img>
        </div>
        <div className="card-body">
          <h6 className={`card-title ${nameType}`}>
            <b>{name}</b>
          </h6>
          <p className="card-text">
            <img
              className="type-icon"
              src={`https://paimon.moe/images/${typeIconDir}/${type}.png`}
              alt={type}
            ></img>
            <span className="heart-icon">{heart}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Entity;
