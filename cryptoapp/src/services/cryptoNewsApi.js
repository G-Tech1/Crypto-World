import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-key': 'd831108a87msh86b03aaeca72904p18b887jsn68d40f28d29a',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://bing-news-search1.p.rapidapi.com',
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

// export const cryptoNewsApi = createApi({
//   reducerPath: 'cryptoNewsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'bing-news-search1.p.rapidapi.com',
//     prepareHeaders: (headers) => {
//       headers.set(
//         'X-RapidAPI-Key',
//         'd831108a87msh86b03aaeca72904p18b887jsn68d40f28d29a'
//       );
//       headers.append('X-BingApis-SDK', 'true');
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     getCryptoNews: builder.query({
//       query: (newsCategory, count) =>
//         `news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
//     }),
//   }),
// });

// export const { useGetCryptoNewsQuery } = cryptoNewsApi;
