import React, { Fragment, useState } from 'react';

import Reminder from '../Reminder/Reminder';
import ReminderLabel  from '../Reminder/ReminderLabel';
import './calendar.css';

function Calendar({ dates }) {
  const [showReminder, setShowReminder] = useState(false);
  const [cellDetails, setCellDate] = useState({})
  // TODO: Fix empty cell issue
  const showReminderFn = cellDetails => {
    setCellDate(cellDetails);
    return state => {
      setShowReminder(state);
    }
  }

  return (
    <Fragment>
      {showReminder && <Reminder cellDetails={cellDetails} showReminder={showReminder} setShowReminder={showReminderFn} />}
      {dates.map((dateRow, index) => {
        const row = dateRow[index] || new Date();
        return (
          <div key={`${row}_${index}`} className="calendar-row">
            <CalendarRow rowDates={dateRow} setShowReminder={showReminderFn} />
          </div>
        );
      })}
    </Fragment>
  );
}

function CalendarCell({cellDate, showReminder}) {
  return (
    <div className="calendar-cell" onClick={() => showReminder({ date: cellDate })(true)}>
      {cellDate.getDate()}
      <ReminderLabel cellDate={cellDate} onClick={showReminder} />
    </div>
  )
}

function CalendarRow({ rowDates, setShowReminder }) {
  return (
    <Fragment>
      {rowDates.map(cellDate => <CalendarCell key={cellDate.toString()} cellDate={cellDate} showReminder={setShowReminder} />)}
    </Fragment>
  );
}

export default Calendar;