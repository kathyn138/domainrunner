import React from 'react';
import './Entity.css';

function Entity() {
  return (
    <div className="card align-items-center entity-card">
      <img className="card-img-top" src="https://paimon.moe/images/characters/albedo.png" alt="Card image cap">
      </img>
      <div className="huh"></div>
      <div className="card-body">
        <h8 className="card-title"><b>AlbedoAlbedoAlbedoAlbedoAlbedoAlbedoAlbedoAlbedo</b><span className="entity-heart">hi</span></h8>
        <p className="card-text">
         {`<3`}
        </p>
      </div>
    </div>
  );
}

export default Entity;
