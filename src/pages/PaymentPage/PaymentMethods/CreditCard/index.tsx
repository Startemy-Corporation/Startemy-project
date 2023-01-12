import { Input } from '@chakra-ui/react';
import { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { StyledBoxCreditCard } from './styles';
import { Focused } from 'react-credit-cards/index';

interface iCreditCardProps {
  number: string;
  name: string;
  expiry: string;
  cvc: string;
  focus: Focused | undefined;
}

export const CreditCardBox = () => {
  const [state, setState] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focus: undefined,
  } as iCreditCardProps);

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocusChange = (e: { target: { name: string } }) => {
    setState({
      ...state,
      focus: e.target.name as Focused,
    });
  };

  return (
    <StyledBoxCreditCard>
      <Cards
        number={state.number}
        name={state.name}
        expiry={state.expiry}
        cvc={state.cvc}
        focused={state.focus}
      />

      <form>
        <div>
          <Input
            placeholder='Nome no cartão'
            name='name'
            onChange={handleInputChange}
            onFocus={handleFocusChange}
          />
          <Input
            placeholder='CPF/CNPJ'
            name='cpf'
            maxLength={11}
            onChange={handleInputChange}
            onFocus={handleFocusChange}
          />
        </div>
        <Input
          placeholder='Número do cartão'
          name='number'
          maxLength={16}
          onChange={handleInputChange}
          onFocus={handleFocusChange}
        />

        <div>
          <Input
            placeholder='CVC/CVV'
            name='cvc'
            maxLength={3}
            onChange={handleInputChange}
            onFocus={handleFocusChange}
          />
          <Input
            placeholder='Vencimento'
            name='expiry'
            maxLength={4}
            onChange={handleInputChange}
            onFocus={handleFocusChange}
          />
        </div>
      </form>
    </StyledBoxCreditCard>
  );
};
