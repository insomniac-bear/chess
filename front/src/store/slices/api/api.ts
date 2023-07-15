import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Endpoints } from './const';
import { getCookie } from '../../../util/cookie';

const baseQuery = fetchBaseQuery({
  baseUrl: Endpoints.BASE_URL,
  prepareHeaders: (headers) => {
    const accessToken = getCookie('access');
    if (accessToken !== undefined && accessToken !== '') {
      headers.set('Authorization', `Bearer ${accessToken}`);
    }
    return headers;
  }
});

export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ['User'],
});
