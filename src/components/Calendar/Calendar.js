import React, { Fragment } from 'react';

import './calendar.css';

export default function Calendar({ dates }) {
  // TODO: Fix empty cell issue
  return (
    <Fragment>
      {dates.map((dateRow, index) => {
        const row = dateRow[index] || new Date();
        return (
          <div key={`${row}_${index}`} className="calendar-row">
            <CalendarRow rowDates={dateRow} />
          </div>
        );
      })}
    </Fragment>
  );
}

function CalendarRow({ rowDates }) {
  return (
    <Fragment>
      {rowDates.map(cellDate => (
        <div key={cellDate.toString()} className="calendar-cell">
          {cellDate.getDate()}
        </div>
      ))}
    </Fragment>
  );
}
