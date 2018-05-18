const initialState = {
  checkedSignedIn: false,
  signedIn: false
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return { ...state };
  }
}
