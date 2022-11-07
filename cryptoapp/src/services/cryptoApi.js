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
      query: () => '/coins',
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': 'd831108a87msh86b03aaeca72904p18b887jsn68d40f28d29a',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };
