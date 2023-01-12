import styled from 'styled-components';
import { colors } from '../../styles/Colors';

export const StyledNav = styled.nav`
  .button-logout {
    font-weight: 600;

    width: fit-content;
    height: 40px;

    display: flex;
    align-items: center;
    column-gap: 0.3rem;
    gap: 10px;

    color: ${colors.colorSecondaryDark};
    background-color: transparent;

    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      right: 0;
      background-color: ${colors.colorPrimary};
      visibility: hidden;
      transform: scale(0);
      transition: all 0.5s ease-in-out;
    }
    &:hover::before {
      visibility: visible;
      transform: scaleX(0.9);
    }
  }

  .cartBtn {
    display: flex;
    gap: 10px;
    font-weight: 600;
    position: relative;

    figure {
      position: relative;
      .cartCounter {
        width: 18px;
        height: 18px;
        background-color: ${colors.colorSecondary};
        border-radius: 10px;

        position: absolute;
        right: -10px;
        bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        font-size: 12px;
        color: white;
      }
    }
  }
  .cartBtn::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -6px;
    right: 0;
    background-color: ${colors.colorPrimary};
    visibility: hidden;
    transform: scale(0);
    transition: all 0.5s ease-in-out;
  }
  .cartBtn:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`;
