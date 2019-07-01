import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addReminderAction } from '../../redux/actions';

import './reminder.css';

const Reminder = function(props) {
  const { setShowReminder, saveReminder, cellDetails } = props;
  const [reminderData, setReminder] = useState(cellDetails);

  const formatDate = cellDate => {
    if (!cellDetails.date) return;
    return cellDate
      .toLocaleDateString()
      .split('/')
      .reverse()
      .join('-');
  };

  return (
    <div className="reminder-container">
      <div className="reminder-content">
        <div className="close" onClick={() => setShowReminder(null)(false)}>
          &times;
        </div>
        <h3>Add Reminder</h3>
        <input
          type="text"
          maxLength="30"
          name="title"
          onChange={e => setReminder({ ...reminderData, title: e.target.value })}
          placeholder="Add title"
          value={reminderData.title || ''}
        />
        <input
          type="date"
          name="date"
          disabled={true}
          value={formatDate(cellDetails.date)}
          onChange={e => setReminder({ ...reminderData, date: e.target.value })}
        />
        <input
          type="text"
          name="time"
          placeholder="e.g. 17:30"
          onChange={e => setReminder({ ...reminderData, time: e.target.value })}
          value={reminderData.time || ''}
        />
        <button
          type="submit"
          onClick={() => {
            saveReminder(reminderData);
            setShowReminder(null)(false);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  saveReminder: addReminderAction(dispatch)
});

const mapStateToProps = state => ({
  store: state
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reminder);
