import React from 'react';
import CalendarItem from '../CalendarItem';
import './CalendarDay.css';

function CalendarDay(props) {
  let { day, items } = props;

  return (
    <div className="col calendar-day-container">
      <div className="row">
        <h3 className={`calendar-day-title calendar-${day}-title`}>
          <b>{day}</b>
        </h3>
      </div>
      <div className="row calendar-day-body">
        {items.map((i) => (
          <CalendarItem key={`${i.itemId}-${i.entityId}`} item={i} />
        ))}
      </div>
    </div>
  );
}

export default CalendarDay;
