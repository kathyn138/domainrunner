import React from 'react';
import './Entity.css';

function Entity(props) {
  let nameType = '';
  let name = props.name.split(' ');

  if (name.length > 1 && name[1].length > 4) {
    nameType = 'multi-line-name';
  }

  return (
    <div className="col">
      <div className="card align-items-center entity-card">
        <div className={`card-top-${props.element}`}>
          <img
            className="card-top-img"
            src={`https://paimon.moe/images/${props.category}/${props.id}.png`}
            alt="Card image cap"
          ></img>
        </div>
        <div className="card-body">
          <h6 className={`card-title ${nameType}`}>
            <b>{props.name}</b>
          </h6>
          <p className="card-text">
            <img
              className="element-icon"
              src={`https://paimon.moe/images/${props.category}/${props.type}.png`}
              alt="element"
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
