import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  addReminderAction,
  editReminderAction,
  deleteReminderAction
} from '../../redux/actions';

import './reminder.css';

const Reminder = function(props) {
  const {
    setShowReminder,
    saveReminder,
    cellDetails,
    updateReminder,
    deleteReminder
  } = props;
  const [reminderData, setReminder] = useState(cellDetails);

  const formatDate = cellDate => {
    if (!cellDetails.date) return;
    return cellDate
      .toLocaleDateString()
      .split('/')
      .reverse()
      .join('-');
  };

  const submitReminder = reminderData => {
    if (reminderData.id) {
      updateReminder(reminderData);
      setShowReminder(null)(false);
      return null;
    }
    reminderData.id = `${Math.random().toString(16).slice(2)}`;
    saveReminder(reminderData);
    setShowReminder(null)(false);
  };

  const handleDelete = reminderData => {
    deleteReminder(reminderData);
    setShowReminder(null)(false);
  };

  return (
    <div className="reminder-container">
      <div className="reminder-content">
        <div className="close" onClick={() => setShowReminder(null)(false)}>
          &times;
        </div>
        <h3>{reminderData.id ? 'Edit' : 'Add'} Reminder</h3>
        <input
          type="text"
          maxLength="30"
          name="title"
          onChange={e => setReminder({ ...reminderData, title: e.target.value })}
          placeholder="Add title"
          value={reminderData.title || ''}
          required
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
          required
        />
        <div className="button-group">
          {reminderData.id && (
            <button type="submit" name="deleteBtn"
              className="delete-btn"
              onClick={() => handleDelete(reminderData)}
            >
              Delete
            </button>
          )}
          <button type="submit" name="submitBtn"
            onClick={() => submitReminder(reminderData)}
          >
            {reminderData.id ? 'Update' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  saveReminder: addReminderAction(dispatch),
  updateReminder: editReminderAction(dispatch),
  deleteReminder: deleteReminderAction(dispatch)
});

const mapStateToProps = state => ({
  store: state
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reminder);
