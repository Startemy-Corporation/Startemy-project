import { Header } from '../../../components/Header';
import { BsCheck2Circle } from 'react-icons/bs';
import { colors } from '../../../styles/Colors';
import { FooterContainer } from '../../homePage/styles';
import { Container } from '../../../styles/Container';
import { PaymentSuccessStyled } from './styles';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { AuthContext } from '../../../context/AuthContext';
import { CloseCircle } from 'iconsax-react';
import { VscSmiley } from 'react-icons/vsc';

export const PaymentSuccess = () => {
  const navigate = useNavigate();

  const { cart } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      navigate('/profile');
    }, 3000);
  }, []);

  return (
    <PaymentSuccessStyled>
      <Container>
        <Header profile={true} />
        {!cart.length ? (
          <div>
            <motion.main
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <BsCheck2Circle size={200} color={colors.success} />
              <p>Compra realizada com sucesso!</p>
              <p>
                Para ver o curso comprado acesse a area de perfil do usuário
              </p>
            </motion.main>
          </div>
        ) : (
          <div>
            <main>
              <CloseCircle size='100' color={colors.colorSecondaryDark} />
              <p>Você não deveria estar aqui </p>
              <motion.p
                initial={{ y: -500, rotate: 0, opacity: 0 }}
                animate={{ y: 200, rotate: 360, opacity: 1 }}
                transition={{ duration: 3 }}
              >
                <VscSmiley size={100} color={colors.colorPrimary} />
              </motion.p>
            </main>
          </div>
        )}
      </Container>
      <FooterContainer>
        <Container>
          <p>2023 - Startemy - © Todos os direitos reservados</p>
        </Container>
      </FooterContainer>
    </PaymentSuccessStyled>
  );
};
