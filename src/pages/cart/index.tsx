import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { PaymentDetails } from './PaymentDetails';

export const CartPage = () => {
  const { updateCart } = useContext(AuthContext);

  useEffect(() => {
    updateCart();
  }, []);

  return <PaymentDetails />;
};
