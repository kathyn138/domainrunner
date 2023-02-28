import React from 'react';
import './Entity.css';

function Entity() {
  return (
    <div className="card align-items-center entity-card">
      <img
        className="card-img-top"
        src="https://paimon.moe/images/characters/albedo.png"
        alt="Card image cap">
      </img>
      <div className="huh"></div>
      <div className="card-body">
        <h8 className="card-title">
          <b>Albedo</b>
        </h8>
        <span className="element-icon">
          <img
            src="https://paimon.moe/images/elements/pyro.png"
            alt="element"
          ></img>
        </span>
        <p className="card-text">
        <i className="fas fa-heart filled-in-heart"></i>
        </p>

        {/* for element icon next to heart */}
        {/* <p className="card-text">
          <span className="element-icon">
            <img
              src="https://paimon.moe/images/elements/pyro.png"
              alt="element"
            ></img>
          </span>
          <i className="fas fa-heart filled-in-heart"></i>
        </p> */}
      </div>
    </div>
  );
}

export default Entity;
