import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import storage from "redux-persist/lib/storage";
import { toast } from "react-toastify";

const initialState = {
  authToken: { id: localStorage.getItem("authToken") } ?? { id: "" },
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setAuthToken: (state, { payload }) => {
      state.authToken = { id: payload };
    },
    logoutUser: (state, action) => {
      toast.success("Logout successful");
    },
  },
});
export const authenticationReducer = authenticationSlice.reducer;
export const { logoutUser, setAuthToken } = authenticationSlice.actions;
