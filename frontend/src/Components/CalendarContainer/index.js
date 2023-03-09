import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

function CalendarContainer() {
  const [calendar, setCalendar] = useState([]);
  const cartStoreData = useSelector((store) => store.cart);

  useEffect(
    function generateCalendarWhenMounted() {
      async function generateCalendar() {
        if (cartStoreData) {
          let calendarResponse = await axios.post(
            `${BASE_URL}/calendar`,
            cartStoreData
          );
          setCalendar(calendarResponse.data);
        }
      }
      generateCalendar();
    },
    [cartStoreData]
  );

  console.log(calendar);
  return (
    <div className="col-8 text-center">
      <div className="row">
        <h3 className="something">
          <b>calenar title</b>
        </h3>
      </div>
      <div className="row">calendar row 2</div>
    </div>
  );
}

export default CalendarContainer;
