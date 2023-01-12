import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from './Colors';

export const StyledLink = styled(Link)`
  font-weight: 600;

  width: fit-content;
  height: 40px;

  display: flex;
  align-items: center;
  column-gap: 0.3rem;
  padding: 0 0.5rem;
  gap: 10px;

  color: ${colors.colorSecondaryDark};
  background-color: transparent;

  &.transparent {
    font-size: 1.2rem;
    font-weight: 600;

    border: 1px solid ${colors.colorSecondaryDark};
    border-radius: 8px;

    color: ${colors.colorSecondaryDark};
    background-color: transparent;

    cursor: pointer;

    transition: 0.3s ease;

    &:hover {
      color: ${colors.gray0};
      background-color: ${colors.colorSecondaryDark};
    }
  }

  &.default {
    font-size: 1.2rem;
    font-weight: 600;

    border: 1px solid ${colors.colorSecondaryDark};
    border-radius: 8px;

    color: white;
    background-color: ${colors.colorSecondaryDark};

    cursor: pointer;

    transition: 0.3s ease;

    &:hover {
      border-color: ${colors.colorSecondary};
      background-color: ${colors.colorSecondary};
    }
  }
`;
