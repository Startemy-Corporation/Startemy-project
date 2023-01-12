import styled, { css } from 'styled-components';
import { colors } from '../../styles/Colors';

export interface iButtonStyles {
  textcolor?: string;
  disabled?: boolean;
}

export const StyledButton = styled.button<iButtonStyles>`
  border: none;

  background-color: transparent;

  height: 40px;

  color: ${(props) => props.textcolor || 'red'};

  display: flex;

  justify-content: center;

  align-items: center;

  ${(props) => {
    return (
      props.disabled &&
      css`
        pointer-events: none;
        background-color: ${colors.gray600} !important;
      `
    );
  }}

  &.transparent {
    font-size: 1.2rem;
    font-weight: 600;

    border: 1px solid ${colors.colorSecondaryDark};
    border-radius: 8px;

    background-color: transparent;
    color: ${colors.colorSecondaryDark};

    cursor: pointer;

    transition: 0.3s ease;

    &:hover {
      background-color: ${colors.colorSecondaryDark};

      color: white;
    }
  }

  &.default {
    font-size: 1.2rem;
    font-weight: 600;

    border: 1px solid ${colors.colorSecondaryDark};
    border-radius: 8px;

    background-color: ${colors.colorSecondaryDark};
    color: white;

    cursor: pointer;

    transition: 0.3s ease;

    &:hover {
      background-color: ${colors.colorSecondary};
      border-color: ${colors.colorSecondary};
    }
  }
`;
