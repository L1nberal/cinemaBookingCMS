import { TUser } from '../../../state';

export const useLogin = () => {
  return (user: TUser) => {
    localStorage.setItem('user', JSON.stringify(user));
  };
};
