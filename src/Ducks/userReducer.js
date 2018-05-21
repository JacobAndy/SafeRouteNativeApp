import axios from "axios";
const initialState = {
  user: [],
  loading: false,
  userLat: null,
  userLong: null
};

//CONSTANTS
const CREATE_USER = "CREATE_USER";
const USER_SIGN_IN = "USER_SIGN_IN";
const UPDATE_USER_LOCATION = "UPDATE_USER_LOCATION";

//REDUCER FUNCTION
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_LOCATION:
      return {
        ...state,
        userLat: action.payload.lat,
        userLong: action.payload.long
      };

    case `${CREATE_USER}_PENDING`:
    case `${USER_SIGN_IN}_PENDING`:
      return { ...state, loading: true };

    case `${CREATE_USER}_FULFILLED`:
      return { ...state };

    case `${USER_SIGN_IN}_FULFILLED`:
      console.log(action.payload.data);
      return { ...state, loading: false, user: action.payload.data };
    default:
      return { ...state };
  }
}

//ACTION CREATORS
export function createUser(
  userName,
  email,
  firstName,
  lastName,
  phoneNumber,
  password
) {
  console.log(userName, email, firstName, lastName, phoneNumber, password);
  return {
    type: CREATE_USER,
    payload: axios.post("http://localhost:3001/api/user/created", {
      userName,
      email,
      firstName,
      lastName,
      phoneNumber,
      password
    })
  };
}

export function userSignIn(userName, password) {
  console.log("hey" + userName, password);
  return {
    type: USER_SIGN_IN,
    payload: axios.get(
      `http://localhost:3001/api/user/signin?user=${userName}&pass=${password}`
    )
  };
}

export function updateUserLocation(lat, long) {
  console.log(lat, long);
  return {
    type: UPDATE_USER_LOCATION,
    payload: { lat, long }
  };
}
