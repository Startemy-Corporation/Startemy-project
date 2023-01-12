import styled from 'styled-components';

import { colors } from '../../styles/Colors';
export interface iLinkStyles {
  clicked?: string;
}

export const StyledSection = styled.section<iLinkStyles>`
  width: 100%;

  a {
    font-weight: 600;

    width: 147px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.2rem;

    border: 1px solid ${colors.colorSecondaryDark};
    border-radius: 8px;

    color: ${colors.colorSecondaryDark};
    background-color: grey;

    cursor: pointer;

    transition: 0.3s ease;

    &:hover {
      color: ${colors.gray0};
      background-color: ${colors.colorSecondary};
    }
  }
`;
