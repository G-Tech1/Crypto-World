import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://coinranking1.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        'd831108a87msh86b03aaeca72904p18b887jsn68d40f28d29a'
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => `/coins/?limit=${count}`,
    }),
    getCryptoDetails: builder.query({
      query: (uuid) => `/coin/${uuid}`,
    }),
    getCryptoHistory: builder.query({
      query: ({ uuid, timePeriod }) =>
        `/coin/${uuid}/history?timeperiod=${timePeriod}`,
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
