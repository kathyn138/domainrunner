import React from 'react';
import './CalendarItem.css';

function CalendarItem(props) {
  const {itemIcon, entityIcon, entityType} = props.item;

  return (
    <div className="col d-flex align-items-center justify-content-center calendar-item">
      <img className={`calendar-entity-icon calendar-${entityType}`} src={entityIcon}></img>
      <img className="calendar-item-icon" src={itemIcon}></img>
    </div>
  );
}

export default CalendarItem;
