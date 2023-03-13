import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../Actions/cart';

function CartItem(props) {
  const dispatch = useDispatch();
  /**
   * category is character or weapon
   * type = variations within each category
   */
  const { name, icon, id, type, typeIcon } = props.entity;

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

  function handleRemove() {
    dispatch(removeFromCart(id));
  }

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
            <span className="heart-icon">
              <i
                className="fas fa-heart filled-in-heart"
                onClick={() => handleRemove()}
              ></i>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
