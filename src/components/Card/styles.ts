import styled from 'styled-components';
import { colors } from '../../styles/Colors';
import { Typography } from '../../styles/Typography';

export const LiStyled = styled.li`
  width: 31.4%;

  border: 1px solid ${colors.gray0};
  border-radius: 8px;

  .topDiv {
    width: 100%;
    height: 180px;
    position: relative;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 8px 8px 0 0;
    }
    small {
      position: absolute;
      top: 16px;
      background-color: ${colors.colorSecondary};
      padding: 6px 10px;

      color: ${colors.gray0};
      font-weight: 700;
      font-size: 16.2527px;
      line-height: 24px;
    }
    span {
      position: absolute;
      bottom: 10px;
      right: 10px;

      font-weight: 700;
      font-size: 21.6702px;
      line-height: 33px;
      color: white;
      z-index: 1;
    }
    div {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 50px;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.5) 100%
      );
    }
  }
  .botDiv {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 108px;
    padding: 14px 12px;
    justify-content: space-between;
    h2 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;

      height: 22px;

      font-size: ${Typography.heading2.size};
      font-weight: ${Typography.heading2.weigth};
      line-height: ${Typography.heading2.heigth};
    }
    a {
      position: absolute;
      bottom: 10px;
      right: 10px;

      font-weight: 600;
      font-size: 16.2527px;
      line-height: 24px;

      color: #141e32;
    }
    a::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      right: 0;
      background-color: ${colors.colorPrimary};
      visibility: hidden;
      transform: scale(0);
      transition: all 0.3s ease-in-out;
    }
    a:hover::before {
      visibility: visible;
      transform: scaleX(1);
    }
    div {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 7px;

      small {
        font-size: ${Typography.headline.size};
        font-weight: ${Typography.headline.weigth};
        line-height: ${Typography.headline.heigth};

        color: ${colors.gray200};
      }
    }
  }
`;
