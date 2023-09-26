import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/reducer";
import regReducer from "../slice/regReducer";
import { setupListeners } from '@reduxjs/toolkit/query'
import { Api } from "../services/api";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    register: regReducer,
    [Api.reducerPath]: Api.reducer,
  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),

});
setupListeners(store.dispatch)
