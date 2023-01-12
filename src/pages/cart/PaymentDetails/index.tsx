import { Header } from '../../../components/Header';
import { Container } from '../../../styles/Container';
import { BoxAsidePaymentPage } from './BoxAsidePaymentPage';
import { BoxPaymentPage } from './BoxMainPaymentDetails';
import { StyledBoxPaymentPage } from './style';

export const PaymentDetails = () => {
  return (
    <div>
      <Container>
        <Header profile={true} />
        <StyledBoxPaymentPage>
          <main>
            <BoxPaymentPage />
          </main>
          <aside>
            <BoxAsidePaymentPage />
          </aside>
        </StyledBoxPaymentPage>
      </Container>
    </div>
  );
};
