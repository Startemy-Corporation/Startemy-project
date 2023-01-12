import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required('Digite um email cadastrado*')
    .email('Digite um email valido'),
  password: yup.string().required('Digite uma senha*'),
});
