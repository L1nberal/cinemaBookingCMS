export type TUser = {
  username: string;
  email: string;
  userRole: 'admin' | 'normalUser';
};

export type TInitialState = {
  isloggedIn: boolean;
  user: TUser | null;
};
