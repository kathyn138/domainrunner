import React from 'react';
import './CalendarItem.css';

function CalendarItem(props) {
  const {itemId, itemIcon, entityId, entityIcon, entityType} = props.item;
  console.log(props)
  return (
    <div className="col d-flex justify-content-center calendar-item">
      <img className={`calendar-entity-icon calendar-${entityType}`} src={entityIcon}></img>
      <img className="calendar-item-icon" src={itemIcon}></img>
      {/* todo: figure out if you want to remove indiv item from calendar
      it'll show up in the export/ss but also implement logic on how to */}
      {/* <span className="calendar-remove-icon">x</span> */}
    </div>
  );
}

export default CalendarItem;
