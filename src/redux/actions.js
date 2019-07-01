import Axios from 'axios';

import { generateDaysInMonth } from '../utils/helper';

export const FETCH_DATE = 'FETCH_DATE';
export const ADD_REMINDER = 'ADD_REMINDER';
export const EDIT_REMINDER = 'EDIT_REMINDER';
export const DELETE_REMINDER = 'DELETE_REMINDER';

const DB_URL = 'http://localhost:4000/dates';

const formatDate = function(dates) {
  const allDates = dates || generateDaysInMonth();
  let parent = [[], [], [], [], [], []];
	let row = 0;

  allDates.forEach(date => {
    const column = date && date.getDay();
    if (row < parent.length) {
      parent[row][column] = date;
    }
    if (column === 6) {
      row++;
    }
  });
  return parent;
};

export const addReminderAction = dispatch => data => {
  return dispatch({ type: ADD_REMINDER, payload: data });
};

export const editReminderAction = dispatch => data => {
  return dispatch({ type: EDIT_REMINDER, payload: data });
};

export const deleteReminderAction = dispatch => data => {
  return dispatch({ type: DELETE_REMINDER, payload: data });
};

export const getDate = dispatch => () => {
  return Axios.get(DB_URL)
    .then(result => {
			console.log(result)
			const formattedDate = formatDate(result.data);
			console.log(formattedDate)
      return dispatch({ type: FETCH_DATE, payload: formattedDate });
    })
    .catch(err => {
			console.error(err);
			// Generate date DATA if api fails 
			return dispatch({ type: FETCH_DATE, payload: formatDate() });
    });
};
