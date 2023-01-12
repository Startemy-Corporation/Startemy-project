import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthContext';
import logo from '../../assets/logo.svg';
import { SelectForm } from '../../components/Select';
import { StyledButton } from '../../components/Button/styles';
import { colors } from '../../styles/Colors';
import { StyledRegisterPage } from './style';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from './schema';
import { InputForm } from '../../components/Input';
import { Spinner } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'iconsax-react';
import { Container } from '../../styles/Container';

interface iFormRegister {
  email: string;
  password: string;
  repeatPassword: string;
  name: string;
  cpf: string;
  educationLevel: string;
  contact: string;
  birthDate: string;
}

interface iFormData extends iFormRegister {
  purchasedCourses: [];
  favoriteCourses: [];
  currentClass: iCurrentClass;
  completedClasses: [];
  isAdmin: boolean;
  image: string;
}
interface iCurrentClass {
  courseId: number;
  classId: number;
}

export const RegisterPage = () => {
  const { userRegister, disable } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormRegister>({
    resolver: yupResolver(registerSchema),
  });
  const submit: SubmitHandler<iFormRegister> = (data) => {
    const newData: iFormData = {
      ...data,
      isAdmin: false,
      image: '',
      purchasedCourses: [],
      favoriteCourses: [],
      currentClass: {} as iCurrentClass,
      completedClasses: [],
    };

    userRegister(newData);
  };

  const handlePhone = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    return (input.value = phoneMask(input.value));
  };

  const phoneMask = (value: string) => {
    if (!value) return '';
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    return value;
  };

  const handleCpf = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    return (input.value = cpfMask(input.value));
  };

  const cpfMask = (value: string) => {
    if (!value) return '';

    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');

    return value;
  };

  return (
    <StyledRegisterPage>
      <Container>
        <nav>
          <Link to={'/'}>
            <ArrowLeft size='20' color={colors.colorPrimary} />
            Voltar a página inicial
          </Link>
        </nav>
        <main>
          <motion.div
            className='box'
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <img src={logo} alt='logo' className='logo' />
            <div className='form-container'>
              <div className='header-form'>
                <h2>Cadastro</h2>
                <div>
                  <span>Já possui conta?</span>
                  <Link to={'/login'}> Logar</Link>
                </div>
              </div>
              <form onSubmit={handleSubmit(submit)} noValidate={true}>
                <div>
                  <InputForm
                    label='Nome'
                    type='text'
                    id='name'
                    register={register('name')}
                    error={errors.name}
                    inputIcon='name'
                  />
                  <InputForm
                    label='Email'
                    type='email'
                    id='email'
                    register={register('email')}
                    error={errors.email}
                    inputIcon='email'
                  />
                  <InputForm
                    label='Senha'
                    type='password'
                    id='password'
                    register={register('password')}
                    error={errors.password}
                    inputIcon='password'
                  />
                  <InputForm
                    label='Repita senha'
                    type='password'
                    id='repeatPassword'
                    register={register('repeatPassword')}
                    error={errors.repeatPassword}
                    inputIcon='password'
                  />
                </div>
                <div>
                  <InputForm
                    label='Data de Nascimento'
                    type='date'
                    id='birthDate'
                    register={register('birthDate')}
                    error={errors.birthDate}
                  />
                  <InputForm
                    label='CPF'
                    type='text'
                    id='CPF'
                    maxlength={11}
                    register={register('cpf')}
                    error={errors.cpf}
                    keyUp={(event) => handleCpf(event)}
                    inputIcon='cpf'
                  />
                  <InputForm
                    label='Contato'
                    type='tel'
                    id='contact'
                    register={register('contact')}
                    maxlength={15}
                    error={errors.contact}
                    inputIcon='contact'
                    keyUp={(event) => handlePhone(event)}
                  />
                  <SelectForm
                    label='Nível de escolaridade'
                    id='educationLevel'
                    register={register('educationLevel')}
                    error={errors.educationLevel}
                  >
                    <option value='' disabled>
                      Selecione o nivel
                    </option>
                    <option value='Fundamental incompleta'>
                      Fundamental incompleta
                    </option>
                    <option value='Fundamental completa'>
                      Fundamental completa
                    </option>
                    <option value='Média incompleta'>Média incompleta</option>
                    <option value='Média completa'>Média completa</option>
                    <option value='Superior incompleta'>
                      Superior incompleta
                    </option>
                    <option value='Superior completa'>Superior completa</option>
                  </SelectForm>
                  <StyledButton
                    type='submit'
                    textcolor={colors.gray0}
                    className='default'
                    disabled={disable ? true : false}
                  >
                    {disable ? (
                      <div>
                        <Spinner />
                      </div>
                    ) : (
                      'Cadastrar'
                    )}
                  </StyledButton>
                </div>
              </form>
            </div>
          </motion.div>
        </main>
      </Container>
    </StyledRegisterPage>
  );
};
