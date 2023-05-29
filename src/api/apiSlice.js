import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
      providesTags: ["Tasks"], //todo esto se llama tasks
      transformResponse: (response) => response.sort((a, b) => b.id - a.id), //para ordenar las tareas
    }),
    createTask: builder.mutation({
      query: (newTask) => ({
        url: "/tasks",
        method: "POST",
        body: newTask,
      }),
      invalidatesTags: ["Tasks"], //cuando yo cree una tarea se actualice la lista
    }),
  }),
});

export const { useGetTasksQuery, useCreateTaskMutation } = apiSlice;
