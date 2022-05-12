import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJCb24tSm92aSIsImlhdCI6MTY0NDk0MDcyNCwiZXhwIjoxNjQ1MDI3MTI0fQ.ZVudaEo4QCmeoP9pgHTvFdiv6C4l0uu72efVWj6h-CatgORbD3uoLsBsuxNPe1g6NFlSd4TP8rxNLDlnUG1eqQ',
}

const baseUrl = 'http://54.237.207.128:8080';

const  createRequest = (url) => ({url, headers: cryptoNewsHeaders});

export const cryptoProfileApi = createApi({
    reducerPath: 'cryptoUsersApi',
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (builder) => ({
        getProfile: builder.query({
         query: () => createRequest(`/api/test/all`),
         }),
}),
});

export const { useGetProfileQuery } = cryptoProfileApi;