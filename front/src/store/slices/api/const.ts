const { VITE_API_URL = 'http://chess-api.jskir.ru/' } = import.meta.env;

export const Endpoints = {
  BASE_URL: VITE_API_URL,
  SIGN_UP: 'auth/signup',
  SIGN_IN: 'auth/signup',
  GET_ME: 'users/me',
  USERS: 'users',
};
