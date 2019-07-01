import Axios from 'axios';

import { generateDaysInMonth } from '../utils/helper';

export const FETCH_DATE = 'FETCH_DATE';

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
