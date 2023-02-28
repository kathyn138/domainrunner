import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Entity from '../Entity';
import './EntityList.css';

function EntityList(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [entityList, setEntityList] = useState([]);

  useEffect(function fetchEntityWhenMounted() {
    async function fetchEntity() {
      const userResult = await axios.get(
        `http://localhost:5000/${props.entityCategory}`
      );
      setEntityList(userResult.data);
      setIsLoading(false);
    }
    fetchEntity();
  }, []);

  console.log(entityList);

  // TODO: check if it's ok to pass strings
  // instead of entire obj

  let entities = entityList.map((e) => (
    <Entity
      name={e.name}
      key={e.id}
      id={e.id}
      icon={e.icon}
      type={e.type}
      category={props.entityCategory}
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
