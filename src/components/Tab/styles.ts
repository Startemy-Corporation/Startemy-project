import styled from 'styled-components';
import { colors } from '../../styles/Colors';
import { Typography } from '../../styles/Typography';

export const TabContainer = styled.section`
  width: 600px;
  max-width: 90%;

  margin: 20px auto;

  border-radius: 8px;
  background-color: ${colors.gray0};

  display: flex;
  flex-direction: column;

  transition: all ease 0.3s;

  nav {
    background-color: ${colors.gray0};

    padding: 5px 5px 0;
    border-radius: 8px 8px 0 0;

    border-bottom: 1px solid ${colors.gray0};
  }

  ul {
    display: flex;
    width: 100%;
  }

  li {
    width: 100%;

    border-radius: 4px 4px 0 0;
    padding: 10px 16px;

    position: relative;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  li > label {
    cursor: pointer;
    font-weight: 500;

    display: flex;
    align-items: center;
    gap: 10px;
  }

  .underline {
    position: absolute;

    bottom: -1px;
    left: 0;
    right: 0;

    height: 2px;

    background: ${colors.colorPrimary};
  }

  section {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
  }

  .tabList {
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;

    display: flex;
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

export const TabCards = styled.div`
  width: 100%;

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
    height: fit-content;
    padding: 10px 12px;
    background-color: white;

    small {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;

      font-size: ${Typography.caption.size};
      font-weight: 600;
      line-height: ${Typography.caption.heigth};
    }
  }
`;
