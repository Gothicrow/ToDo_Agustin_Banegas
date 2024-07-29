import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiKey, baseAuthUrl } from "../databases/users";




export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseAuthUrl }),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: ({ ...auth }) => ({
                url: `accounts:signUp?key=${apiKey}`,
                method: "POST",
                body: auth
            })
        }),
        login: builder.mutation({
            query: ({ ...auth }) => ({
                url: `accounts:signInWithPassword?key=${apiKey}`,
                method: "POST",
                body: auth
            })
        })
    })
})

export const { useLoginMutation, useSignUpMutation } = authApi