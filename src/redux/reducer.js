import { ADD_REMINDER, FETCH_DATE } from './actions';

const initialState = {
  allDates: [],
  reminders: {}
};

export const reducer = (state = initialState, action) => {
  const { reminders } = state;
  switch (action.type) {
    case FETCH_DATE:
			return { ...state, allDates: action.payload };

    case ADD_REMINDER:
      const { date } = action.payload;
      const dateObj = new Date(`${date}`);
      const reminderKey = `${dateObj.getFullYear()}_${dateObj.getMonth()}`;
      const dateKey = `${dateObj.getDate()}`;

      if (reminders[reminderKey] === undefined) {
        reminders[reminderKey] = {};
        reminders[reminderKey][dateKey] = [action.payload];
        return { ...state, ...reminders };
      }

      if (reminders[reminderKey] && reminders[reminderKey][dateKey] === undefined) {
        reminders[reminderKey][dateKey] = [action.payload];
        return { ...state, ...reminders };
      }

      reminders[reminderKey][dateKey] = [...reminders[reminderKey][dateKey], action.payload];
      return { ...state, ...reminders };

    default:
      return state;
  }
};
