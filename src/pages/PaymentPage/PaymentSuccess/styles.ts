import styled from 'styled-components';
import { colors } from '../../../styles/Colors';

export const PaymentSuccessStyled = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    div {
      height: 70vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      main {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;

        p {
          color: ${colors.gray600};
          font-size: 1.2rem;
        }
      }
    }
  }
`;
