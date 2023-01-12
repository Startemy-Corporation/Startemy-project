import styled from 'styled-components';
import { colors } from '../../styles/Colors';
import { Typography } from '../../styles/Typography';

export const ContainerCartDrawer = styled.div`
  ul {
    display: flex;
    flex-direction: column;

    gap: 1rem;
    position: relative;

    li {
      width: 100%;
      height: 120px;
      display: flex;

      justify-content: space-between;
      gap: 0.5rem;
      padding: 0.5rem;
      border: 1px solid ${colors.gray100};
      border-radius: 8px;
      color: ${colors.colorSecondaryDark};
      align-items: center;

      img {
        width: 90px;
        height: 90px;
        border-radius: 8px;
        object-fit: cover;
      }

      .divInfo1 {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 15px;

        h3 {
          font-size: ${Typography.heading3.size};
          font-weight: 500;
          line-height: ${Typography.heading3.heigth};
        }

        p {
          color: ${colors.colorSecondaryDark};
          font-weight: 600;
          width: max-content;
          background-color: #ffffff;
        }
      }

      .divInfo2 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        gap: 15px;

        h3 {
          font-size: ${Typography.heading3.size};
          font-weight: ${Typography.heading3.weigth};
          line-height: ${Typography.heading3.heigth};
        }
      }
    }
  }

  .divCoupon {
    .chakra-form__label {
      background-color: #ffffff;
    }
  }

  .valueDiv {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 90%;

    position: absolute;
    bottom: 40px;
    .value {
      width: 100%;
      padding: 0 15px;

      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      p {
        font-size: ${Typography.heading2.size};
        font-weight: ${Typography.heading2.weigth};
        line-height: ${Typography.heading2.heigth};
        color: ${colors.colorSecondary};
      }
      h3 {
        font-size: ${Typography.heading2.size};
        font-weight: 600;
        line-height: ${Typography.heading2.heigth};
        color: ${colors.colorPrimary};
      }
    }

    a {
      width: 100%;

      display: flex;
      justify-content: center;

      padding: 8px;

      font-size: 1.2rem;
      font-weight: 600;

      border: 1px solid ${colors.colorSecondaryDark};
      border-radius: 8px;

      color: white;
      background-color: ${colors.colorSecondaryDark};

      cursor: pointer;

      transition: 0.3s ease;
    }
    a:hover {
      border-color: ${colors.colorSecondary};
      background-color: ${colors.colorSecondary};
    }
  }
  .emptyCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    margin-top: 20vh;

    h2 {
      font-size: ${Typography.heading1.size};
      font-weight: ${Typography.heading1.weigth};
      line-height: ${Typography.heading1.heigth};
      color: ${colors.colorSecondaryDark};
      span {
        color: ${colors.colorPrimary};
      }
    }
    a {
      font-size: 1.2rem;
      font-weight: 600;
      width: 100%;
      display: flex;
      justify-content: center;

      border: 1px solid ${colors.colorSecondaryDark};
      border-radius: 8px;

      padding: 14px 0;

      background-color: transparent;
      color: ${colors.colorSecondaryDark};

      cursor: pointer;

      transition: 0.3s ease;

      &:hover {
        background-color: ${colors.colorSecondaryDark};

        color: white;
      }
    }
  }
`;
