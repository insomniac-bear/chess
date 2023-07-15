import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './slices';
import { authApi } from './slices/api/auth.api';
import { api } from './slices/api/api';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    authApi.middleware,
    api.middleware,
  ]),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
