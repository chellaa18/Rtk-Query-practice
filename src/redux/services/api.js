
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const Api = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://calm-plum-jaguar-tutu.cyclic.app/' }),
  endpoints: () => ({
   
  }),
})
