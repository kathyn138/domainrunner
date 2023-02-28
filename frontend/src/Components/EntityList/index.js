import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import Entity from '../Entity';
import './EntityList.css';

function EntityList(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [entityList, setEntityList] = useState([]);

  useEffect(function fetchEntityWhenMounted() {
    async function fetchEntity() {
      const userResult = await axios.get(`http://localhost:5000/${props.entity}`);
      setEntityList(userResult.data);
      setIsLoading(false);
    }
    fetchEntity();
  }, []);

  // if (isLoading) return <i>Loading...</i>;
  console.log(entityList)

  return (
    <div className="col-8 text-center entity-list">
      <h3 className="entity-list-title"><b>{props.entity}</b></h3>
      <Entity />
    </div>
  )
}

export default EntityList;
