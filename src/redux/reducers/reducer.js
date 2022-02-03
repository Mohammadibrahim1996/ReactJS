export const initialState = {
  token: "",
};

export const loginReducer = (state = { initialState }, action) => {
  if (action.type === "HANDLE_SUCCESS") {
    return {
      ...state,
      token: action.data.data,
    };
  }
  return state;
};
