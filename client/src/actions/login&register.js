import { getAuthedUser, intializeUser, logOut, register } from "../utils/API";

export const AUTH_LOGIN = "AUTH_LOGIN";
export const REGISTER_ADMIN = "REGISTER_ADMIN";
export const REGISTER_WORKERS = "REGISTER_WORKERS";
export const REGISTER_CLIENTS = "REGISTER_CLIENTS";
// ----- user is an object of data
const admin = (user) => {
  return {
    type: REGISTER_ADMIN,
    user,
  };
};
const teacher = (user) => {
  return {
    type: REGISTER_WORKERS,
    user,
  };
};
const client = (user) => {
  return {
    type: REGISTER_CLIENTS,
    user,
  };
};

export const Register_Admin = (user) => {
  return (dispatch) => {
    return register(user).then((res) => {
      if (res.data === "created") {
        dispatch(admin(user));
        alert(`account created with email: ${user.username}`);
      }
      if (res.data === "exist") {
        alert(`account with email: ${user.email} already exist`);
      }
    });
  };
};
export const Register_Teacher = (user) => {
  return (dispatch) => {
    return register(user).then((res) => {
      if (res.data === "created") {
        dispatch(teacher(user));
        alert(`account created with email: ${user.username}`);
      }
      if (res.data === "exist") {
        alert(`account with email: ${user.email} already exist`);
      }
    });
  };
};
export const Register_Client = (user) => {
  return (dispatch) => {
    return register(user).then((res) => {
      if (res.data === "created") {
        dispatch(client(user));
        alert(`account created with email: ${user.username}`);
      }
      if (res.data === "exist") {
        alert(`account with email: ${user.email} already exist`);
      }
    });
  };
};
const authedUser = (user) => {
  return {
    type: AUTH_LOGIN,
    user,
  };
};

export const logIn = (authentcation) => {
  return (dispatch) => {
    return getAuthedUser(authentcation).then((data) => {
    console.log(data)
      if(data.auth){
      dispatch(authedUser(data));  

    }
    else{
      alert('password is not correct')
    }

    });
  };
};
export const intializeLogIn = () => {
  return (dispatch) => {
    return intializeUser().then((user) => {
      dispatch(authedUser(user));
    });
  };
};
export const Log_Out = ()=>{
  return (dispatch) => {
    return logOut().then((res) => {
      dispatch(authedUser(null));
    });
  };
}