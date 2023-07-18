import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Entity from '../Entity';
import './EntityList.css';

function EntityList(props) {
  const category = props.entityCategory;

  const [isLoading, setIsLoading] = useState(true);
  const [entityList, setEntityList] = useState([]);
  const entityStoreData = useSelector((store) => store.entities[category]);

  useEffect(
    function fetchEntityWhenMounted() {
      async function fetchEntity() {
        if (entityStoreData) {
          setEntityList(entityStoreData);
          setIsLoading(false);
        }
      }
      fetchEntity();
    },
    [entityStoreData]
  );

  let entities = entityList.map((e) => <Entity key={e.id} entity={e} />);

  let loadingMessage = (
    <React.Fragment>
      <p className="loading-message">
        <div className="spinner-border text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </p>
    </React.Fragment>
  );

  let display = isLoading ? loadingMessage : entities;

  return (
    <div className="col-8 text-center entity-list">
      <div className="row">
        <h3 className="entity-list-title">
          <b>{props.entityCategory}</b>
        </h3>
      </div>
      <div className="row">{display}</div>
    </div>
  );
}

export default EntityList;
