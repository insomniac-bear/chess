import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Endpoints } from './const';
import { ISignupRequest, ITokenResponse } from './auth.types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: Endpoints.BASE_URL,
  }),
  endpoints: (builder) => ({
    signup: builder.mutation<ITokenResponse, ISignupRequest>({
      query: (data) => ({
        url: Endpoints.SIGN_UP,
        method: 'POST',
        body: {
          ...data,
        }
      }),
    }),
  }),
});

export const { useSignupMutation } = authApi;
