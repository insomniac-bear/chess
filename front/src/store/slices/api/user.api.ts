import { IUserResponse } from '../../types/user.type';
import { setUser } from '../user/user.slice';
import { api } from './api';
import { Endpoints } from './const';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.mutation<IUserResponse, undefined>({
      query: () => ({
        url: Endpoints.GET_ME,
        method: 'POST',
      }),
      async onQueryStarted (arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          dispatch(setUser({
            id: Number(data.id),
            name: data.name,
            email: data.email,
          }));
        } catch (err) {}
      },
    }),
  }),
});

export const {
  useGetMeMutation,
} = userApi;
