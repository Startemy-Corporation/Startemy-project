import { motion } from 'framer-motion';
import { Header } from '../../../components/Header';
import { Container } from '../../../styles/Container';
import { StyledBoxPaymentPage, StyledUlSelectedProducts } from './style';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import { CreditCardBox } from './CreditCard';
import { Card, Paypal } from 'iconsax-react';
import { StyledButton } from '../../../components/Button/styles';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { PaypalBox } from './PayPal';
import pix from '../../../assets/imgPix/pix.svg';
import pixBox1 from '../../../assets/imgPix/pixBox1.svg';
import { Link } from 'react-router-dom';

interface iEle {
  image: string;
  title: string;
  price: number;
}

export const PaymentMethods = () => {
  const { cart, checkout } = useContext(AuthContext);

  const totalPrice = cart
    .reduce((av: number, cv: { price: number }) => {
      return av + cv.price;
    }, 0)
    .toFixed(2);

  return (
    <div>
      <Container>
        <Header profile={true} />
        <StyledBoxPaymentPage>
          <main>
            <section>
              <h2>Finalizar compra</h2>
              <p>Forma de pagamento</p>

              <Accordion>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as='span'
                        flex='1'
                        textAlign='left'
                        display='flex'
                        gap='1rem'
                      >
                        <Card /> Cartão de crédito/débito
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <CreditCardBox />
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as='span'
                        flex='1'
                        textAlign='left'
                        display='flex'
                        gap='1rem'
                      >
                        <img src={pix} alt='pixIcon' className='pix' />
                        Pix
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Link to={'/notfound'}>
                      <img src={pixBox1} alt='pixBox' />
                    </Link>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as='span'
                        flex='1'
                        textAlign='left'
                        display='flex'
                        gap='1rem'
                      >
                        <Paypal /> Paypal
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <PaypalBox />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </section>
            <section className='other-courses'>
              <p>Detalhes do pedido</p>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <StyledUlSelectedProducts>
                  {cart.map((ele: iEle, index: number) => {
                    return (
                      <li key={index}>
                        <figure>
                          <img src={ele.image} alt={ele.title} />
                        </figure>
                        <div className='divInfo1'>
                          <h3>{ele.title}</h3>
                        </div>
                        <div className='divInfo2'>
                          <h3>R${ele.price}</h3>
                        </div>
                      </li>
                    );
                  })}
                </StyledUlSelectedProducts>
              </motion.div>
            </section>
          </main>
          <aside>
            <div>
              <h3>Resumo:</h3>
              <div>
                <div className='div1'>
                  <span>Preço original:</span>
                  <span>R${totalPrice}</span>
                </div>
                <div className='div1'>
                  <span>Descontos:</span>
                  <span>-R$00.00</span>
                </div>
              </div>
              <div>
                <div className='div1'>
                  <strong>Total:</strong>
                  <strong>R${totalPrice}</strong>
                </div>
                <small>
                  Ao concluir sua compra, você concorda com nossos{' '}
                  <b> Termos de Serviço</b>
                </small>
              </div>
              <StyledButton className='default' onClick={() => checkout()}>
                Finalizar compra
              </StyledButton>
            </div>
          </aside>
        </StyledBoxPaymentPage>
      </Container>
    </div>
  );
};
