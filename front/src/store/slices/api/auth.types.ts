export interface ISignupRequest {
  email: string;
  name: string;
  password: string;
}

export interface ITokenResponse {
  access_token: string;
}
