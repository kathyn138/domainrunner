import React, { useState, useEffect }  from 'react';
import axios from 'axios';

function EntityContainer(props) {
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

  if (isLoading) return <i>Loading...</i>;

  return (
    console.log(entityList)
  )
}

export default EntityContainer;
