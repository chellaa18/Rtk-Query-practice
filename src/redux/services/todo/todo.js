import { Api } from "../api";

export const todoApi = Api.injectEndpoints({
    endpoints:(builder)=>({
        getTodos:builder.query({
            query:()=>({url:'todos'})
        }),
    })
})


export const { useGetTodosQuery } = Api;