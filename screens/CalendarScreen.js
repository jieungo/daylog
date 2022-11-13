import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import CalendarView from '../components/CalendarView';
import { format } from 'date-fns';
import FeedList from '../components/FeedList';

function CalendarScreen() {
  const { log } = useSelector(state => state.text);
  const markedDates = useMemo(
    () =>
      log?.reduce((acc, cur) => {
        const formattedDate = format(new Date(cur.date), 'yyyy-MM-dd');
        acc[formattedDate] = { marked: true };
        return acc;
      }, {}),
    [log]
  );

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd')
  );

  const filteredLogs = log.filter(
    logs => format(new Date(logs.date), 'yyyy-MM-dd') === selectedDate
  );
  return (
    <FeedList
      logs={filteredLogs}
      ListHeaderComponent={
        <CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          onSelectedDate={setSelectedDate}
        />
      }
    />
  );
}

export default CalendarScreen;
