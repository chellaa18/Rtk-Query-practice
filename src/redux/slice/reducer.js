import { createSlice } from '@reduxjs/toolkit';


export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => {
        // console.log(state);
       return state + 1;
    },
    decrement: (state) => {
        if (state > 0) {
          return state - 1;
          }else{
            return null
          }
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
