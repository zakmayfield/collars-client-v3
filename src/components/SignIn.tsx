import { useState } from 'react';
import { useAuth } from 'auth/auth';
import { AgencyLogin } from '@/types';
import useSignInForm, { SignInFormValues } from '@/hooks/useSignInForm';

const SignIn = () => {
  const [, setError] = useState(null);
  const { signIn } = useAuth();

  const onSuccess = (data: SignInFormValues) => {
    const { email, password } = data;
    const payload: AgencyLogin = {
      email,
      password,
    };
    signIn(payload);
  };

  const {
    register,
    onSubmit,
    formState: { errors },
  } = useSignInForm(onSuccess);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='email'
          {...register('email')}
        />
        {/* {errors && errors.email && <p>{errors.email.message}</p>} */}
        <input
          type='password'
          placeholder='password'
          {...register('password')}
        />
        {/* {errors && errors.password && <p>{errors.password.message}</p>} */}
        <button type='submit'>Sign In</button>
      </form>
    </>
  );
};

export default SignIn;
