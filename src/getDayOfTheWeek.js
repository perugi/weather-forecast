import { getDay } from 'date-fns';

export default function getDayOfTheWeek(date) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return days[getDay(date)];
}
