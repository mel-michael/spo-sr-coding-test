import React, { Fragment } from 'react';

export default function Calendar({ dates }) {
  return (
    <Fragment>
      {dates.map(dateRow => {
        return (
          <> {/* Short form for using Fragment */}
            <CalendarRow rowDates={dateRow} />
            <br />
          </>
        );
      })}
    </Fragment>
  );
}

function CalendarRow({ rowDates }) {
  return (
    <Fragment>
      {rowDates.map(cellDate => (
        <span>{cellDate.getDate()} | </span>
      ))}
    </Fragment>
  );
}
