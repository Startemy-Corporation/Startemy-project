import styled from 'styled-components';
import { colors } from '../../styles/Colors';
import { Typography } from '../../styles/Typography';

export const PlayerContainer = styled.div`
  width: 1000px;
  max-width: 100%;

  display: flex;
  flex-direction: column;

  gap: 20px;

  .drawerButton {
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 5px;

    border: 1px solid ${colors.colorSecondaryDark};
    border-radius: 8px;
    padding: 8px 10px;
  }

  .playerDesc {
    width: 640px;
    max-width: 100%;

    padding-bottom: 40px;

    display: flex;
    flex-direction: column;

    gap: 20px;

    h1 {
      font-weight: ${Typography.heading1.weigth};
      font-size: ${Typography.heading1.size};
      line-height: ${Typography.heading1.heigth};
    }

    h3 {
      font-weight: ${Typography.heading3.weigth};
      font-size: ${Typography.heading3.size};
      line-height: ${Typography.heading3.heigth};
    }
  }

  @media (min-width: 1000px) {
    width: 700px;
    max-width: 100%;

    .drawerButton {
      display: none;
    }
  }
`;

export const DrawerContainer = styled.div`
  .classLine {
    padding: 20px;
  }

  .chakra-stack {
    display: flex;
    align-items: flex-end;
  }

  .gridItem {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .itemEnd {
    align-items: flex-end;
  }

  .playIcon {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .titleBox {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .classTitle {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;

    transition: all ease 0.5s;
  }
`;

export const ClassesContainer = styled.div`
  width: 500px;
  max-width: 100%;

  display: none;

  h2 {
    padding: 20px;
  }

  .classLine {
    padding: 20px;
  }

  .chakra-stack {
    display: flex;
    align-items: flex-end;
  }

  .gridItem {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .itemEnd {
    align-items: flex-end;
  }

  .playIcon {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .titleBox {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .classTitle {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;

    transition: all ease 0.5s;
  }

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

export const PageContainer = styled.div`
  width: 100%;

  display: flex;

  .notPurchased {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 70vh;
    width: 100vw;
    overflow-x: hidden;

    .notPurchasedTitle {
      width: fit-content;

      font-weight: ${Typography.heading1.weigth};
      font-size: ${Typography.heading1.size};
      line-height: ${Typography.heading1.heigth};
    }
  }
`;
