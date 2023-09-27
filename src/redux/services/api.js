import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Api = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => 'todos',
    }),
    getTodo: builder.query({
      query: (id) => `todos/${id}`,
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
    }),
    addTodo: builder.mutation({
      query:(todo)=>({
        url: 'todos',
        method: 'POST',
        body: todo,

      })
    })
  }),
});

export const { useGetTodosQuery, useGetTodoQuery, useDeleteTodoMutation, useAddTodoMutation } = Api;
