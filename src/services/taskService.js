import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../databases/realtimeDataBase";




export const taskApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => `tasks.json`
        }),
        getTaskById: builder.query({
            query: (idProduct) => `tasks.json?orderBy="id"&equalTo=${idProduct}`,
            transformResponse: (res) => {
                const transformedResponse = Object.values(res)
                if(transformedResponse.length) return transformedResponse[0]
            }
        })
    })
})

export const {useGetTasksQuery, useGetTaskByIdQuery} = taskApi