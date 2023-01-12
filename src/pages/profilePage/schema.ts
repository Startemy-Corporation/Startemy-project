import * as yup from 'yup';

export const editSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Nome precisa pelo menos 3 letras')
    .max(20, 'Nome precisa ser menos de 20 letras'),
  email: yup
    .string()
    .email('Escrever em formato correto, Ex. example@mail.com'),
  newPassword: yup
    .string()
    .min(6, ' Senha precisa ser pelo menos de 8 caracteres')
    .matches(/(?=.*?[A-Z])/, 'Sua senha precisa uma letra maiúscula'),
  educationLevel: yup.string(),
  contact: yup.string(),
});
