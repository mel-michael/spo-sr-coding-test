export const generateDaysInMonth = () => {
	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth();
  const date = new Date(currentYear, currentMonth, 1);
  const days = [];
  while (date.getMonth() === currentMonth) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}
