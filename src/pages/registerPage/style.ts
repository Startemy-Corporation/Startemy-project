import styled from 'styled-components';
import { colors } from '../../styles/Colors';
import { Typography } from '../../styles/Typography';

export const StyledRegisterPage = styled.div`
  width: 100%;
  min-height: max-content;
  height: 100vh;

  color: ${colors.gray0};
  background-color: ${colors.colorSecondary};

  @media (min-width: 750px) {
    min-height: 100%;
  }

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
    display: flex;
    height: 70vh;
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

  h2 {
    font-size: ${Typography.heading2.size};
    font-weight: ${Typography.heading2.weigth};
    line-height: ${Typography.heading2.heigth};
    margin-bottom: 1rem;
  }
  .box {
    width: 100%;
    max-width: 520px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    @media (min-width: 750px) {
      max-width: 760px;
    }
  }
  .logo {
    width: 240px;
  }
  .form-container {
    color: ${colors.gray600};
    background-color: ${colors.gray0};
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .header-form {
    display: flex;
    justify-content: space-between;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      > div {
        input:not([type='date']) {
          padding-right: 40px;
        }

        svg {
          cursor: pointer;
          position: absolute;
          right: 18px;
          top: 10px;
          z-index: 66;
        }
      }
      button {
        div {
          width: 22px;
          height: 22px;
        }
      }
    }
    @media (min-width: 750px) {
      flex-direction: row;
      justify-content: space-between;
      div {
        width: 100%;
      }
    }

    select {
      appearance: none;
    }
  }

  @media (max-width: 410px) {
    .header-form {
      flex-direction: column;
    }
  }
`;
