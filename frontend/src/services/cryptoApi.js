

import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders = {
    'x-rapidapi-host': import.meta.env.VITE_APP_CRYPTO_RAPIDAPI_HOST,
    'x-rapidapi-key': import.meta.env.VITE_APP_RAPIDAPI_KEY
}

const  createRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_APP_CRYPTO_API_URL}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
         query: (count) => createRequest(`/coins?limit=${count}`),
         }),
        getCryptoDetails: builder.query({
         query: (coinId) => createRequest(`/coin/${coinId}`),
         }),
         // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
         ///Qwsogvtv82FCd/history?timePeriod=24h
         //Optional param : referenceCurrencyUuid=yhjMzLPhuIDl is US Dollars, default and the only option for now. next version will have option
        getCryptoHistory: builder.query({
         query: ({ coinId, timeperiod }) => createRequest(`/coin/${coinId}/history?timePeriod=${timeperiod}`),
         })
}),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery,} = cryptoApi;

