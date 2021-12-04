import { APIURLS } from "../helpers/urls";
import {
  LOGIN_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  AUTHENTICATE_USER,
  LOG_OUT,
  SIGNUP_START,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
  CLEAR_AUTH_STATE,
  EDIT_USER_SUCCESSFULL,
  EDIT_USER_FAILED,
  EDIT_ITEM_SUCCESSFULL
} from "./actionTypes";
import { getFormBody } from "../helpers/utils";
import { getAuthTokenFromLocalStorage } from "../helpers/utils";
// import { fetchUserFriends } from '../actions/friends';

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAILED,
    error: errorMessage,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function login(email, password) {
  return (dispatch) => {
    dispatch(startLogin());
    const url = APIURLS.login();

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);

        if (data.success) {
          //dispatch action to save user
          localStorage.setItem("token", data.data.token);
          dispatch(loginSuccess(data.data.user));
          //   dispatch(fetchUserFriends(data.data.user._id));
          return;
        }
        dispatch(loginFailed(data.message));
      });
  };
}

export function signup(email, password, confirmPassword, name, restname) {
  return (dispatch) => {
    const url = APIURLS.signup();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({
        email,
        password,
        confirm_password: confirmPassword,
        name,
        restname,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('data', data);
        if (data.success) {
          // do something
          localStorage.setItem("token", data.data.token);
          dispatch(signupSuccessful(data.data.user));
          return;
        }
        dispatch(signupFailed(data.message));
      });
  };
}

export function startSingup() {
  return {
    type: SIGNUP_START,
  };
}

export function signupFailed(error) {
  return {
    type: SIGNUP_FAILED,
    error,
  };
}

export function signupSuccessful(user) {
  return {
    type: SIGNUP_SUCCESS,
    user,
  };
}
export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user,
  };
}

export function logoutUser() {
  return {
    type: LOG_OUT,
  };
}

export function clearAuthState() {
  return {
    type: CLEAR_AUTH_STATE,
  };
}

export function editUserSucessfull(user) {
  return {
    type: EDIT_USER_SUCCESSFULL,
    user,
  };
}

export function editUserFailed(error) {
  return {
    type: EDIT_USER_FAILED,
    error,
  };
}


export function editUser(
  name,
  password,
  confirmPassword,
  userId,
  
) {
  return (dispatch) => {
    const url = APIURLS.editProfile();

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        //'Authorization': `Bearer ${getAuthTokenFromLocalStorage()}`
      },
      body: getFormBody({
        name,
        password,
        confirm_password: confirmPassword,
        id: userId,
        
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("EDIT PROFILE data", data);
        if (data.success) {
          dispatch(editUserSucessfull(data.data.user));

          if (data.data.token) {
            localStorage.setItem("token", data.data.token);
          }
          return;
        }

        dispatch(editUserFailed(data.message));
      });
  };
}



export function editItem(
  itemname,
  quantity,
  
  
) {
  return (dispatch) => {
    const url = APIURLS.editItem();

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        //'Authorization': `Bearer ${getAuthTokenFromLocalStorage()}`
      },
      body: getFormBody({
        itemname,
        quantity
        
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("EDIT PROFILE data", data);
        if (data.success) {
          dispatch(editItemSucessfull(data.data.inventories));

          if (data.data.token) {
            localStorage.setItem("token", data.data.token);
          }
          return;
        }

        // dispatch(editItemFailed(data.message));
      });
  };
}


export function editItemSucessfull(inventories) {
  return {
    type: EDIT_ITEM_SUCCESSFULL,
    inventories,
  };
}

// export function editUserFailed(error) {
//   return {
//     type: EDIT_USER_FAILED,
//     error,
//   };
// }
