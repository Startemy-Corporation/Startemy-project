import styled from 'styled-components';
import { colors } from '../../../../styles/Colors';
import { Typography } from '../../../../styles/Typography';

export const StyledUlSelectedProducts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .css-5h3htq {
    width: fit-content;
    font-size: 15px;
  }

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

    figure {
      max-width: 150px;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        object-fit: cover;
      }
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
        height: 40%;
        width: 100%;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
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

export const StyledOtherCourses = styled.section`
  h3 {
    font-size: ${Typography.heading3.size};
    font-weight: ${Typography.heading3.weigth};
    line-height: ${Typography.heading3.heigth};
  }

  .tabList {
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;

    height: 250px;

    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }

  .tabList::-webkit-scrollbar-track {
    background-color: #f4fef4;
  }

  .tabList::-webkit-scrollbar {
    height: 3px;
    background-color: #f4f4f4;
  }

  .tabList::-webkit-scrollbar-thumb {
    background-color: #e0e0e0;
    border-radius: 4px;
  }

  .tabList > li {
    width: 190px;
    min-width: 190px;
  }
`;
