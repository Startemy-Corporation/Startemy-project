import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

export const PaypalBox = () => {
  return (
    <div>
      <PayPalScriptProvider options={{ 'client-id': 'test' }}>
        <PayPalButtons style={{ layout: 'horizontal' }} />
      </PayPalScriptProvider>
    </div>
  );
};
