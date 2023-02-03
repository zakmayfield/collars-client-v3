import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export type SignInFormValues = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export default function useSignInForm(
  onSuccess: (values: SignInFormValues) => void
) {
  const defaultValues = {
    email: '',
    password: '',
  };

  const form = useForm<SignInFormValues>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = form.handleSubmit(onSuccess);

  return {...form, onSubmit};
}
