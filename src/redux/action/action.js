import axios from "axios";

export const loginUser = async (credentials, dispatch) => {
  try {
    const data = await axios.post("https://reqres.in/api/login", credentials);
    if (data.status === 200) {
      dispatch({
        type: "HANDLE_SUCCESS",
        data: data.token,
      });
      return "";
    }
  } catch (e) {
    return "Error : Failed to login !!";
  }
};
