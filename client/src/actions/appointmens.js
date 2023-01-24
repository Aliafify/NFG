import { createAppointment,getAppointments } from "../utils/API";
export const NEW_APPOINTMENT = "NEW_APPOINTMENT";
const newAppointment = (appointment) => {
  return {
    type: NEW_APPOINTMENT,
    appointment,
  };
};
export const New_Appointment = (appointment) => {
  return (dispatch) => {
    return createAppointment(appointment).then((res) => {
      if (res.status === 200) {
        dispatch(newAppointment);
        alert(res.data);
      } else {
        alert("fail to create", res.data);
      }
    });
  };
};
export const INETIALIZE_APPOINTMENTS = "INETIALIZE_APPOINTMENTS";
const inetializeAppointments = (appointments) => {
  return {
    type: INETIALIZE_APPOINTMENTS,
    appointments,
  };
};
export const Inetialize_Appointments = () => {
  return (dispatch) => {
    return getAppointments().then((res) => {
      if (res.status === 200) {
        dispatch(inetializeAppointments(res.data));
      }
    });
  };
};
