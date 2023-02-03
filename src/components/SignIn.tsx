import { SyntheticEvent, useState } from 'react';
import { useAuth } from 'auth/auth';
import { AgencyLogin } from '@/types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type SignInFormValues = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const SignIn = () => {
  const [, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  const defaultValues = {
    email: '',
    password: '',
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({ resolver: yupResolver(schema), defaultValues, });

  const onSuccess = (data: SignInFormValues) => {
    const payload: AgencyLogin = {
      email,
      password,
    };

    signIn(payload).catch((err) => setError(err));
  };

  const onSubmit = handleSubmit(onSuccess);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='email'
          value={email}
          {...register('email')}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors && errors.email && <p>{errors.email.message}</p>}
        <input
          type='password'
          placeholder='password'
          {...register('password')}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors && errors.password && <p>{errors.password.message}</p>}
        <button type='submit'>Sign In</button>
      </form>
    </>
  );
};

export default SignIn;
