import Moment from 'moment';

export function getFullDate(value) {
  return (
    value.getDate() + "-" + (value.getMonth() + 1) + "-" + value.getFullYear()
  );
}
export function getDateXDays(numOfDays, date = new Date()) {
  const daysAgo = new Date(date.getTime());
  daysAgo.setDate(date.getDate() + 1 + numOfDays);
  return daysAgo;
}
function getappointments(arr){
    const keys = Object.keys(arr);
    let appointmens = [];
   const booking = arr.forEach((a,i)=>{
    a.booking.forEach((b,j) => {
        const date = keys.split("-");

    })})
}