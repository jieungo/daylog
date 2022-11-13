import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CalendarView from '../components/CalendarView';
import { format } from 'date-fns';

function CalendarScreen() {
  const { log } = useSelector(state => state.text);
  const markedDates = log?.reduce((acc, cur) => {
    const formattedDate = format(new Date(cur.date), 'yyyy-MM-dd');
    acc[formattedDate] = { marked: true };
    return acc;
  }, {});

  useEffect(() => {
    console.log(format(new Date(), 'yyyy-MM-dd'));
  }, []);

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd')
  );
  return (
    <CalendarView
      markedDates={markedDates}
      selectedDate={selectedDate}
      onSelectedDate={setSelectedDate}
    />
  );
}

export default CalendarScreen;
