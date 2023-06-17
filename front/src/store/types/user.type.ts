export interface IUser {
  id: number | null;
  email: string | null;
  name: string | null;
}

export interface IUserResponse {
  id: number;
  email: string;
  name: string;
  create_at: string;
  updated_at: string;
}
