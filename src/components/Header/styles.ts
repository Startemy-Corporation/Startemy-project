import styled from 'styled-components';
import { colors } from '../../styles/Colors';

export const StyledHeader = styled.header`
  height: 100px;

  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  .logo {
    display: flex;
    max-width: 210px;
    width: 100%;
    min-width: 160px;
  }

  > .search {
    padding: 1rem 1.3rem;

    width: 100%;
    max-width: 300px;

    display: flex;
    justify-content: space-between;
    column-gap: 0.5rem;

    border: 2px solid ${colors.gray100};
    border-radius: 0.5rem;
    > input {
      width: 100%;

      background-color: white;
    }
    > input:focus {
      outline: none;
      width: 100%;
    }

    > input::placeholder {
      color: ${colors.gray100};
    }
  }

  .menuDrawerButton {
    display: none;
  }

  > nav {
    display: flex;
    align-items: center;
    column-gap: 1.5rem;

    > a.createAccount {
      font-weight: 600;

      min-width: 110.5px;

      background-color: ${colors.colorSecondaryDark};
      border-radius: 10px;
      color: ${colors.gray0};

      transition: all 0.3s ease;

      :hover {
        background-color: ${colors.colorSecondary};
      }
    }

    button {
      display: none;
    }

    > a.underlineLink {
      position: relative;
    }
    a.underlineLink::before {
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
    a.underlineLink:hover::before {
      visibility: visible;
      transform: scaleX(0.9);
    }
  }

  @media (max-width: 655px) {
    .menuDrawerButton {
      display: flex;
    }
    nav > a,
    nav > .button-logout,
    nav > .cartBtn {
      display: none;
    }

    nav #styledDiv {
      padding-top: 2rem;

      display: flex;
      align-items: flex-start;
      flex-direction: column;

      gap: 2rem;

      > * {
        padding: 0;
      }
    }
    nav button {
      display: flex;
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
