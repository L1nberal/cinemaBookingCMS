import { Button, PasswordInput, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import { UserIcon, KeyIcon } from '../../components';
import { COLOR_NAME } from '../../config';
import { login, TUser } from '../../state';
import { useLogin } from './api';
import './styles/login.scss';

type TFormValues = {
  email: string;
  password: string;
};

export const Login = () => {
  const dispatch = useDispatch();
  const loginFc = useLogin();

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) =>
        value.length < 8 ? 'Password should be at least 8 characters' : null,
    },
  });

  const handleLogin = (values: TFormValues) => {
    const userData: TUser = {
      email: values.email,
      username: 'admin',
      userRole: 'admin',
    };

    dispatch(login(userData));
    loginFc(userData);
  };

  return (
    <div
      className={clsx(
        'login-wrapper h-screen flex justify-center items-center',
        `bg-[${COLOR_NAME.antique300}]`
      )}
    >
      <form
        className={clsx(
          'login__form flex basis-[450px] flex-col gap-2 p-6 rounded-md '
        )}
        onSubmit={form.onSubmit((values) => handleLogin(values))}
      >
        <Text
          className='text-center font-black'
          size='xl'
          variant='gradient'
          gradient={{ from: 'red', to: 'grape', deg: 90 }}
        >
          Login
        </Text>

        <TextInput
          label='Email'
          placeholder='Your identifier'
          leftSection={<UserIcon />}
          withAsterisk
          {...form.getInputProps('email')}
        />

        <PasswordInput
          label='Password'
          placeholder='Your password'
          leftSection={<KeyIcon />}
          withAsterisk
          {...form.getInputProps('password')}
        />

        <Button className='mt-4' color='green' size='sm' type='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
};
