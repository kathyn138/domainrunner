import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import CalendarDay from '../CalendarDay';
import './CalendarContainer.css';
const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

function CalendarContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [calendar, setCalendar] = useState([]);
  const cartStoreData = useSelector((store) => store.cart);

  //TODO: check when this is running
  //ideally when cartStoreData changes & only then

  //TODO: rn it still runs if cart empty lol
  // put no items or w/e if cart empty
  useEffect(
    function generateCalendarWhenMounted() {
      async function generateCalendar() {
        if (cartStoreData) {
          let ok = [
            {
              name: 'Alhaitham',
              id: 'alhaitham',
              icon: 'https://paimon.moe/images/characters/alhaitham.png',
              category: 'characters',
            },
            {
              name: 'A Thousand Floating Dreams',
              id: 'a_thousand_floating_dreams',
              icon:
                'https://paimon.moe/images/weapons/a_thousand_floating_dreams.png',
              category: 'weapons',
            },
          ];
          let calendarResponse = await axios.post(`${BASE_URL}/calendar`, ok);
          setCalendar(calendarResponse.data);
          setIsLoading(false);
        }
      }
      generateCalendar();
    },
    [cartStoreData]
  );

  let days = Object.keys(calendar).map(d => {
    if (calendar[d].length) {
      if (d !== 'any') {
        return <CalendarDay key={d} day={d} items={calendar[d]} />
      } else {
        return (
          <div className="row">
            <CalendarDay key={d} day={d} items={calendar[d]} />
          </div>
        )
      }
    }
  });

  let loadingMessage = (
    <React.Fragment>
      <p className="loading-message">No items in calendar yet!</p>
    </React.Fragment>
  );

  let display = isLoading ? loadingMessage : days;

  return (
    <div className="col-8 text-center calendar-container">
      <div className="row">
        <h3 className="calendar-container-title">
          <b>Calendar</b>
        </h3>
      </div>
      <div className="row">{display}</div>
    </div>
  );
}

export default CalendarContainer;
