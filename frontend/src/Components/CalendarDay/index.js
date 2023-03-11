import React from 'react';
import CalendarItem from '../CalendarItem';
import './CalendarDay.css';

function CalendarDay(props) {
  let { day, items } = props;

  return (
    <div className="col">
      <div className="row">
        <h3 className="calendar-day-title">
          <b>{day}</b>
        </h3>
      </div>
      <div className="row">
        {items.map((i) => (
          <CalendarItem key={`${i.itemId}-${i.entityId}`} item={i} />
        ))}
      </div>
    </div>
  );
}

export default CalendarDay;
