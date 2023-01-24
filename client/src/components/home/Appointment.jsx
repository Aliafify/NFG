import React, { useRef, useState } from "react";
import serializeForm from "form-serialize";
import { New_Appointment } from "../../actions/appointmens";
import { useDispatch,useSelector } from "react-redux";
// import {Contain,Col} from '../styled-components/index.js'

// infinit calender
import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";
// icons import
import {
  BsFillCalendar2MonthFill,
 
} from "react-icons/bs";
import ShowHideBtn from '../styled-components/showHideBtn'
import MultibleChoice from "../styled-components/multibleChoice"
import Moment from 'moment'
const Appointment=()=> {
  const{appointments} = useSelector(mapStateToProps);

  const [value, setValue] = useState(getDateXDays(0, new Date()));
  const dispatch = useDispatch();
  const form = useRef();
  function getFullDate(value) {
    return (
      value.getDate() + "-" + (value.getMonth() + 1) + "-" + value.getFullYear()
    );
  }
   // ------onSelect Time --------
 const [time, setTime] = useState(null)
 
 const onSelect =(e)=>{
  
  setTime(e)
 }
 //----------------------------------------------------------------
 //---------------------OnSubmit --------------------------------
  const Submite = (e) => {
    try{
      e.preventDefault();
    const data = serializeForm(form.current, { hash: true });
    data.day = getFullDate(value);
    data.date = new Date();
    data.time=Moment(new Date(value.setHours(time.toString())));
    data.end = Moment(new Date(value.setHours((time+1).toString())))
    if (data.password !== data.password1)return alert("password is not matched");
    if(!time)return alert("time is required");

    dispatch(New_Appointment(data));
    }catch(err){console.log(err);}
  };
  //------------------ Set Date -----------
  function getDateXDays(numOfDays, date = new Date()) {
    const daysAgo = new Date(date.getTime());
    daysAgo.setDate(date.getDate() + 1 + numOfDays);
    return daysAgo;
  }
  //---------------------------------------
const workHours= (s,e)=>{
  let hoursArray = [];
  for(let i = s; i <e;i++){
     hoursArray.push(i)
  }
  return hoursArray;
}
  return (
    <>
      <div className="form-row">    
          <ShowHideBtn
           element={
            <InfiniteCalendar
            width={400}
            height={"200px"}
            selected={value}
            disabledDays={[5, 6]}
            minDate={getDateXDays(0)}
            maxDate={getDateXDays(30)}
            min={
              new Date(new Date().getFullYear(), new Date().getMonth(), 6)
            }
            max={
              new Date(
                new Date().getFullYear(),
                new Date().getMonth() + 1,
                1
              )
            }
            // display='years'
            theme={{}}
            autoFocus={true}
            onSelect={(data) => setValue(data)}
            layout={"landscape"}
            showHeader={true}
          />
           }
           icon={<BsFillCalendar2MonthFill color='#009DEC' size='1.4em'/>}
           name="Day"
           width='74%'
           />

          <MultibleChoice options={workHours(9,17)} width='74%' name={'Time'} onChoose={onSelect} />
        

      </div>

      <form className="signup-form" ref={form} onSubmit={ Submite}>
        <div className="form-row">
          <input type="text" name="name" placeholder="YOUR NAME" required />
          <input type="email" name="email" placeholder="YOUR EMAIL" required />
        </div>
        <div className="form-row">
          <input type="password" name="password" placeholder="PASSWORD" required />
          <input
            type="password"
            name="password1"
            placeholder="RETYPE PASSWORD"
            required
          />
        </div>
        <div className="form-row">
          <input type="text" name="username" placeholder="USERNAME" required />
        <input
          type="submit"
        />
        </div>
      </form>
    </>
  );
}

function mapStateToProps({appointments}) {
    return {appointments}  
} 
export default Appointment;
