import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};
export const regSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser :(state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
      
    }
  },
});

export const { addUser, deleteUser } = regSlice.actions;

export default regSlice.reducer;
