import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '6c32d6e633mshe9a2a00403bb2d4p1cdb50jsne55244eddcc0'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url:string) => ({ url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins')
    })
  })
});

export const { useGetCryptosQuery } = cryptoApi;
