import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
// import {Contain} from "../styled-components/index.js"
import WeekCalendar from 'react-week-calendar'; 
import 'react-week-calendar/dist/style.css';
import Moment from 'moment';
import {getFullDate,getDateXDays} from '../generalFunc';
import "./schedual.css"
function Schedual() { 

  const{intervals} = useSelector(mapStateToProps);
  
  let d1 = Moment('Jan 23, 2023 2:57 PM');

  let d2 = Moment('Jan 23, 2023 1:57 PM');
  console.log(intervals);
  return (
    
      <div className="container scroll-y">
        <WeekCalendar 
         scaleUnit='60'
         onIntervalSelect={(data)=>console.log(data)}
         selectedIntervals={intervals}
         startTime={Moment({h: 10, m: 0})}
         endTime={Moment({h: 17, m:0})}
         cellHeight={70}
         />
        </div>
  )
}
function mapStateToProps({appointments}) {
  const intervals = []
  const app= appointments
  app.forEach((e)=>{
    e.booking.map(nn=>{ 
      let b ={}
      b.start=Moment(nn.time); b.value=nn.email;

      b.end=Moment(nn.end)
      intervals.push(b)
    return b
    })
  })
  return {intervals}  
} 
export default Schedual