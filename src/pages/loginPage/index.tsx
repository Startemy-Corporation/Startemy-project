import { Link } from 'react-router-dom';
import { Container } from '../../styles/Container';
import {
  ButtonForgot,
  DivButtonAll,
  StyledLoginForm,
  StyledLoginPage,
} from './style';
import logo from '../../assets/logo.svg';
import { StyledButton } from '../../components/Button/styles';
import { colors } from '../../styles/Colors';
import { StyledLink } from '../../styles/Link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './schema';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useDisclosure,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'iconsax-react';
import { InputForm } from '../../components/Input';
import emailjs from '@emailjs/browser';
import { FormModal } from '../profilePage/styles';
import { toast } from 'react-toastify';
import { InputFormModal } from '../../components/InputModalEdit';
import { api } from '../../services/api';
interface iFormLogin {
  email: string;
  password: string;
  acessToken: string;
  sendEmail?: string;
}
export const LoginPage = () => {
  const { userLogin, disable } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message] = useState(
    Math.floor(Math.random() * (999999 - 100000) + 100000),
  );
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const addDateState = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    setDate(input.value);
  };
  const sendEmail = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const templateParams = {
      message: message,
      email: email,
    };
    try {
      const { data } = await api.get(`/users?email=${email}`);
      if (data.length > 0) {
        if (data[0].birthDate === date) {
          toast.success('Senha enviada para o email');
          emailjs.send(
            'service_5svzb3r',
            'template_77fvwhq',
            templateParams,
            'tPKnI1UG2uxVXY828',
          );
        } else {
          toast.error('Data incorreta');
        }
      } else {
        toast.error('Email não encontrado');
      }
    } catch (error) {
      console.error(error);
      toast.error('Email não cadastrado');
    } finally {
      setEmail('');
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iFormLogin>({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });
  const submit: SubmitHandler<iFormLogin> = (data) => {
    userLogin(data);
    reset();
  };
  return (
    <StyledLoginPage>
      <Modal size={'lg'} isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent height='250px' maxWidth='90%' width='320px'>
          <ModalHeader>Recuperar senha</ModalHeader>
          <ModalCloseButton />
          <ModalBody style={{ display: 'flex', flexDirection: 'column' }}>
            <FormModal onSubmit={sendEmail}>
              <DivButtonAll>
                <div className='divFlex'>
                  <InputFormModal
                    label='Email'
                    type='email'
                    change={(e) => setEmail(e.target.value)}
                    register={register('sendEmail')}
                    error={errors.email}
                    inputIcon='email'
                  />
                  <InputForm
                    label='Data de Nascimento'
                    type='date'
                    keyUp={(event) => addDateState(event)}
                  />
                  <button
                    type='submit'
                    className='noMargin'
                    disabled={disable ? true : false}
                  >
                    Enviar
                  </button>
                </div>
              </DivButtonAll>
            </FormModal>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Container>
        <nav>
          <Link to={'/'}>
            <ArrowLeft size='20' color={colors.colorPrimary} />
            Voltar a página inicial
          </Link>
        </nav>
        <main>
          <motion.div
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <img src={logo} alt='logo' className='logo' />
            <div className='boxLogin'>
              <h2>Login</h2>
              <StyledLoginForm
                onSubmit={handleSubmit(submit)}
                noValidate={true}
              >
                <InputForm
                  label='Email'
                  type='email'
                  id='emailLogin'
                  register={register('email')}
                  error={errors.email}
                  inputIcon='email'
                />
                <InputForm
                  label='Senha'
                  type='password'
                  id='passLogin'
                  register={register('password')}
                  error={errors.password}
                  inputIcon='password'
                />
                <ButtonForgot type='button' onClick={onOpen}>
                  Esqueceu a senha?
                </ButtonForgot>
                <StyledButton
                  type='submit'
                  textcolor={colors.gray0}
                  className='default'
                  disabled={disable ? true : false}
                >
                  {disable ? <Spinner /> : 'Entrar'}
                </StyledButton>
              </StyledLoginForm>
              <p>Não possui uma conta?</p>
              <StyledLink to={'/register'} className='transparent link-button'>
                Cadastre-se
              </StyledLink>
            </div>
          </motion.div>
        </main>
      </Container>
    </StyledLoginPage>
  );
};
