import React from 'react';
import './Entity.css';

function Entity(props) {
  return (
    <div className="col">

    <div className="card align-items-center entity-card">
      {/* TODO:  add color/bg to char icon depending on their element
       * issue lies with if entity list represents weapons
       */}

       {/* TODO: fix multi line names
       * makes the cards look uneven rn
       */}
      <img
        className="card-img-top"
        src={`https://paimon.moe/images/characters/${props.id}.png`}
        alt="Card image cap"
      ></img>
      <div className="card-body">
        <h6 className="card-title">
          <b>{props.name}</b>
        </h6>
        <p className="card-text">
          <img
            className="element-icon"
            src={`https://paimon.moe/images/elements/${props.element}.png`}
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
