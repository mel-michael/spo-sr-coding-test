import React from 'react';
import { connect } from 'react-redux';

import './reminder.css';

const ReminderLabel = function({ cellDate, reminders, onClick }) {
  const reminderKey = `${cellDate.getFullYear()}_${cellDate.getMonth()}`;
  const dateKey = `${cellDate.getDate()}`;
  const cellReminders = reminders[reminderKey] && reminders[reminderKey][dateKey];

  const showReminder = (reminder) => e => {
    e.stopPropagation();
    onClick(reminder)(true);
  }

  return (
    <>
      {cellReminders &&
        cellReminders.length > 0 &&
        cellReminders.map(reminder => {
          return (
            <div className="reminder-label"
              key={`${reminder.date}_${reminder.time}`}
              onClick={showReminder(reminder)}
            >
              {reminder.title}
            </div>
          );
        })}
    </>
  );
};

const mapStateToProps = state => ({
  reminders: state
});

export default connect(
  mapStateToProps,
  null
)(ReminderLabel);
