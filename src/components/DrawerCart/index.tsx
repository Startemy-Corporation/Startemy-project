import { useContext } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

import { InputForm } from '../Input';
import { ContainerCartDrawer } from './styles';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { iCourseList } from '../../context/CoursesContext';

export const DrawerCart = () => {
  const { isOpen, onClose } = useContext(AuthContext);

  const { cart, removeToCart } = useContext(AuthContext);

  type iTitleProps = {
    title: string;
    maxLength: number;
  };

  const Title = ({ title, maxLength }: iTitleProps) => {
    if (title.length > maxLength) {
      return <h2>{title.substring(0, maxLength)}...</h2>;
    } else {
      return <h2>{title}</h2>;
    }
  };

  const totalPrice = cart.reduce(
    (acc: number, { price }: { price: number }) => acc + price,
    0,
  );

  const handleRemove = (array: iCourseList) => {
    removeToCart(array);
  };

  return (
    <>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose} size={'md'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            style={{
              paddingTop: '40px',
              display: 'flex',
              justifyContent: 'center',
              fontSize: '26px',
            }}
          >
            Carrinho de compras
          </DrawerHeader>

          <DrawerBody>
            {cart.length ? (
              <ContainerCartDrawer>
                <div>
                  <ul>
                    {cart.map((ele) => (
                      <li key={ele.id}>
                        <img src={ele.image} alt={ele.title} />
                        <div className='divInfo1'>
                          <Title title={ele.title} maxLength={25} />
                          <p>{ele.category.toUpperCase()}</p>
                        </div>
                        <div className='divInfo2'>
                          <h3>
                            {ele.price?.toLocaleString('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            })}
                          </h3>
                          <button onClick={() => handleRemove(ele)}>
                            Remover
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='valueDiv'>
                  <div className='value'>
                    <p>Total :</p>
                    <h3>
                      {totalPrice.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </h3>
                  </div>
                  <Link to={'/payment'} onClick={onClose}>
                    Finalizar compra
                  </Link>
                  <div className='divCoupon'>
                    <InputForm type='text' label='Aplicar cupom' />
                  </div>
                </div>
              </ContainerCartDrawer>
            ) : (
              <ContainerCartDrawer>
                <div className='emptyCard'>
                  <h2>
                    O seu <span>carrinho</span> está vazio
                  </h2>

                  <Link onClick={onClose} to={'/courses'}>
                    Continuar Comprando
                  </Link>
                </div>
              </ContainerCartDrawer>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
