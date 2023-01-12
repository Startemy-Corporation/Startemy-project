import { NotFoundPageStyled } from './styles';
import { Container } from '../../styles/Container';
import { StyledLink as Link } from '../../styles/Link';
import { AnimatePresence, motion } from 'framer-motion';

import sad from '../../assets/imgs/sad.png';
import arrowLeft from '../../assets/imgs/arrow-left.svg';

export const NotFoundPage = () => {
  return (
    <NotFoundPageStyled>
      <Container>
        <Link to={'/'}>
          <img src={arrowLeft} alt='arrow left' /> Voltar a página inicial
        </Link>
      </Container>
      <AnimatePresence mode='wait'>
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -10, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div>
            <img src={sad} alt='sad' />
            <h1>404</h1>
            <p>Página não encontrada</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </NotFoundPageStyled>
  );
};
