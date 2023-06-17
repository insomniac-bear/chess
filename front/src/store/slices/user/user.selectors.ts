import { RootState } from "../..";

export const getUserId = (state: RootState): number | null => state.user.id;