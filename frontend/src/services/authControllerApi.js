import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// const cryptoNewsHeaders = {
//     'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJCb24tSm92aSIsImlhdCI6MTY0NDk0MDcyNCwiZXhwIjoxNjQ1MDI3MTI0fQ.ZVudaEo4QCmeoP9pgHTvFdiv6C4l0uu72efVWj6h-CatgORbD3uoLsBsuxNPe1g6NFlSd4TP8rxNLDlnUG1eqQ',
// }

const baseUrl = 'http://54.237.207.128:8080/api/auth';

const  createRequest = (url) => ({url});

export const cryptoAuthApi = createApi({
    reducerPath: 'cryptoUsersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers, {getState}) => {
            const token = getState().auth.token;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        logIn: builder.mutation({
            query: (credentials) => ({
                url: `/signin`,
                method: 'POST',
                body: credentials,
                }),
            transformResponse: (response) => response.data,
        }),
        createUser: builder.mutation({
            query: (request) => ({
                 url: '/signup',
                 method: 'POST',
                 body: request,
            }),
            // invalidatesTags: ['Pokemons'],
       }),
    }),
});

export const { useLogInMutation , useCreateUserMutation } = cryptoAuthApi;