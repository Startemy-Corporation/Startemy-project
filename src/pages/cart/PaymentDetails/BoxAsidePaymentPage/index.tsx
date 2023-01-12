import { useContext } from 'react';
import { InputForm } from '../../../../components/Input';
import { AuthContext } from '../../../../context/AuthContext';
import { StyledLink } from '../../../../styles/Link';
import { DivCoupon } from '../style';
import { DivFlexRow } from './style';

export const BoxAsidePaymentPage = () => {
  const { cart } = useContext(AuthContext);

  const totalPrice = cart
    .reduce((av: number, cv: { price: number }) => {
      return av + cv.price;
    }, 0)
    .toFixed(2);

  return (
    <>
      <div>
        <DivFlexRow>
          <p>Total:</p>
          <h3>R${totalPrice}</h3>
        </DivFlexRow>
        <StyledLink to={'/payment'} className='default'>
          Finalizar Compra
        </StyledLink>
      </div>
      <DivCoupon className='divCoupon'>
        <InputForm type='text' label='Aplicar cupom' />
      </DivCoupon>
    </>
  );
};
