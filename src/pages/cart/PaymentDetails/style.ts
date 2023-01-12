import styled from 'styled-components';
import { colors } from '../../../styles/Colors';
import { Typography } from '../../../styles/Typography';

export const StyledBoxPaymentPage = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 750px) {
    flex-direction: row;
    justify-content: space-between;
  }

  h2 {
    font-size: ${Typography.heading2.size};
    font-weight: ${Typography.heading2.weigth};
    line-height: ${Typography.heading2.heigth};
  }

  h3 {
    font-size: ${Typography.heading3.size};
    font-weight: ${Typography.heading3.weigth};
    line-height: ${Typography.heading3.heigth};
  }

  p {
    font-size: ${Typography.body};
    font-weight: ${Typography.body};
    line-height: ${Typography.body};
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (min-width: 750px) {
      width: 65%;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  aside {
    height: max-content;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (min-width: 750px) {
      width: 30%;
      margin: 0;
      align-items: center;
    }

    div {
      width: 100%;

      button {
        margin-top: 1rem;
        width: 100%;
      }
    }

    a {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const DivCoupon = styled.div`
  .css-old1by {
    .css-1un816e {
      .chakra-form__label {
        background-color: #ffffff;
      }
    }
  }
`;

export const StyledUlSelectedProducts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    width: 100%;
    height: 139px;
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 0.5rem;
    border: 1px solid ${colors.gray100};
    border-radius: 8px;
    color: ${colors.colorSecondaryDark};

    img {
      width: 150px;
      border-radius: 8px;
      object-fit: cover;
    }

    .divInfo1 {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h3 {
        font-size: ${Typography.heading3.size};
        font-weight: 500;
        line-height: ${Typography.heading3.heigth};
      }

      p {
        color: ${colors.colorSecondaryDark};
        font-weight: 600;
        width: max-content;
        background-color: #dddd;
      }

      div {
        display: flex;
        gap: 0.5rem;
        color: ${colors.gray300};
      }
    }

    .divInfo2 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;

      h3 {
        font-size: ${Typography.heading3.size};
        font-weight: ${Typography.heading3.weigth};
        line-height: ${Typography.heading3.heigth};
      }
    }
  }
`;
