import React from 'react';
import './Entity.css';

function Entity(props) {
  let { name, id, type } = props.entity;

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
            <span className="heart-icon">
              <i className="fas fa-heart filled-in-heart"></i>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Entity;
