import styled from 'styled-components';
import { colors } from '../../styles/Colors';

export const StyledDrawerLink = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  gap: 2rem;

  button {
    height: 32px;
    margin: 0 0.5rem;

    display: flex;
    align-items: center;

    color: ${colors.colorSecondaryDark};
  }

  > * {
    padding-top: 20px;
  }
`;
