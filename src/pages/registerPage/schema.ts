import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required('Nome é requerido')
    .min(3, 'Nome precisa de pelo menos 3 caracteres')
    .max(20, 'Nome precisa ser menor que 20 caracteres'),
  email: yup
    .string()
    .required('Email é requerido')
    .email('Escrever em formato correto, Ex. example@mail.com'),
  password: yup
    .string()
    .required('Senha é requerida')
    .min(6, ' Senha precisa ser pelo menos de 8 caracteres')
    .matches(/(?=.*?[A-Z])/, 'Sua senha precisa uma letra maiúscula'),
  repeatPassword: yup
    .string()
    .required('Senha é requerida')
    .min(6, 'Senha precisa ser pelo menos de 8 caracteres')
    .matches(/(?=.*?[A-Z])/, 'Sua senha precisa uma letra maiúscula')
    .oneOf([yup.ref('password')], 'As senhas não são iguais'),
  cpf: yup
    .string()
    .required('CPF é requerido')
    .matches(/([0-9])/, 'Precisa ingresar números sem ponto nem linha')
    .min(11, 'Cpf possui 11 dígitos'),
  educationLevel: yup.string().required('Nivel educacional é requerido'),
  contact: yup.string().required('Alguma forma de contato é requerida'),
  birthDate: yup.string().required('Data de nascimento é requerida'),
});
