import styled from 'styled-components';
import { colors } from '../../styles/Colors';
import { Typography } from '../../styles/Typography';

export const StyledLoginPage = styled.div`
  width: 100%;
  height: 100vh;
  color: ${colors.gray0};
  background-color: ${colors.colorSecondary};

  nav {
    width: 100%;
    padding: 1rem;
    margin-bottom: 2rem;

    @media (min-width: 750px) {
      height: 80px;
    }
  }

  nav > a {
    width: max-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
  }

  main {
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding: 1rem;
      width: 100%;
      max-width: 520px;
      height: max-content;
      border-radius: 8px;
    }
  }

  .boxLogin {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.8rem;
    padding: 1rem;
    border-radius: 8px;
    color: ${colors.gray600};
    background-color: ${colors.gray0};

    h2 {
      font-size: ${Typography.heading2.size};
      font-weight: ${Typography.heading2.weigth};
      line-height: ${Typography.heading2.heigth};
      margin-bottom: 1rem;
    }

    p {
      text-align: center;
    }

    .link-button {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .logo {
    width: 230px;
  }
`;
export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    padding-right: 40px;
  }

  svg {
    cursor: pointer;
    position: absolute;
    right: 18px;
    top: 10px;
    z-index: 66;
  }

  a {
    text-align: end;
  }
`;

export const DivButtonAll = styled.div`
  display: flex;
  flex-direction: column;

  .divFlex {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonForgot = styled.button`
  align-self: end;
  width: fit-content;
`;

export const ButtonAccept = styled.button`
  margin-bottom: 0;
  width: fit-content;
  height: fit-content;
`;
