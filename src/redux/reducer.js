import { generateDaysInMonth} from '../utils/helper';


const formatDate = function() {
	const allDates = generateDaysInMonth();
	let parent = [[],[],[],[],[],[]];
  let row = 0;

	allDates.forEach((date, index) => {
		const column = date.getDay();
    if(row < parent.length) {
      parent[row][column] = date;
    }
    if(column === 6) {
      row++;
    }
	})

  return parent;
}

const initialState = {
	allDates: formatDate(),
  reminders: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
