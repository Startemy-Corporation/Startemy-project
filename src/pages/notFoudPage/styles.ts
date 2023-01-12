import styled from 'styled-components';
import { colors } from '../../styles/Colors';

export const NotFoundPageStyled = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${colors.colorSecondaryDark};
  overflow-y: hidden;

  > div:first-child {
    display: block;
    padding: 1.3rem;

    > a {
      color: ${colors.gray0};

      display: flex;
      align-items: center;
      column-gap: 0.7rem;

      transition: all 0.3s;

      :hover {
        color: ${colors.gray300};
      }
    }
  }

  > div:last-child {
    > div {
      padding: 0 3rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        max-width: 300px;

        filter: invert(85%) sepia(37%) saturate(3951%) hue-rotate(357deg)
          brightness(100%) contrast(107%);
      }

      h1 {
        font-size: 7rem;
        color: ${colors.colorPrimary};
      }

      p {
        font-size: 1.5rem;
        text-align: center;
        color: ${colors.colorPrimary};
      }
    }
  }

  @media (min-height: 610px) {
    > div:last-child {
      height: 100%;
      > div {
        padding: 3rem;

        height: inherit;

        img {
          max-width: 230px;
        }
      }
    }
  }
`;
