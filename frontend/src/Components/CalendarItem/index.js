import React from 'react';
import './CalendarItem.css';

function CalendarItem(props) {
  const {itemId, itemIcon, entityId, entityIcon} = props.item;
  console.log(props)
  return (
    <div className="col d-flex justify-content-center">
      <img src={itemIcon}></img>
      hi
    </div>
  );
}

export default CalendarItem;
