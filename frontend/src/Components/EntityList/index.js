import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Entity from '../Entity';
import './EntityList.css';

function EntityList(props) {
  const category = props.entityCategory;

  // TODO: fix bug where if you go directly to entity url
  // store will empty bc haven't yet invoked initial api call
  // potential fix is to save entity data in session
  // or look up entitydata after store is populated

  const [isLoading, setIsLoading] = useState(true);
  // const [entityList, setEntityList] = useState([]);
  const entityList = useSelector(store => store.entities[category]);

  // useEffect(function fetchEntityWhenMounted() {
  //   async function fetchEntity() {
  //     if (entityList.keys.length > 0) {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchEntity();
  // }, []);


  // TODO: check if it's ok to pass strings
  // instead of entire obj

  // category = character or weapon
  // type = variations within each category
  let entities = entityList.map((e) => (
    <Entity
      entity={e}
      category={category}
    />
  ));

  let loadingMessage = (
    <React.Fragment>
      <img
        className="loading-gif"
        alt=""
        src="https://cdn.discordapp.com/attachments/709643259789705317/732414740134887545/tenor.gif"
      ></img>
      <p className="loading-message">Loading...</p>
    </React.Fragment>
  );

  let entityListData = entityList ? entities : loadingMessage;

  return (
    <div className="col-8 text-center entity-list">
      <div className="row">
        <h3 className="entity-list-title">
          <b>{props.entityCategory}</b>
        </h3>
      </div>
      <div className="row">{entityListData}</div>
    </div>
  );
}

export default EntityList;
