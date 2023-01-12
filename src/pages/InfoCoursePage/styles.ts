import styled from 'styled-components';
import { colors } from '../../styles/Colors';

export const InfoCourseStyled = styled.div`
  main > div:nth-child(1) {
    background-color: ${colors.colorSecondaryDark};

    height: 211px;

    display: flex;

    align-items: center;

    h1 {
      width: 60%;

      font-size: 1.625rem;
      font-weight: 700;
      color: ${colors.gray0};
    }
  }

  main > :nth-child(2) {
    display: flex;
    justify-content: space-between;
  }

  main {
    section {
      margin-top: 24px;

      display: flex;
      flex-direction: column;
      gap: 1rem;

      width: 60%;

      h2 {
        font-size: 1.375rem;
        font-weight: bold;
        color: ${colors.gray600};
      }

      > p {
        font-weight: 400;
        font-size: 1rem;
        color: ${colors.gray600};
      }

      > div:nth-child(3) {
        display: flex;
        justify-content: space-between;

        > p {
          font-size: 1rem;
          color: ${colors.gray600};
          font-weight: 500;
        }
      }

      div:nth-child(4) {
        margin: 20px 0;

        display: flex;
        flex-direction: column;
        gap: 1rem;

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
      }
    }

    section:nth-child(2) {
      margin-top: -133px;

      display: flex;
      flex-direction: column;
      align-items: end;

      > div {
        display: flex;
        flex-direction: column;
        gap: 1.3rem;

        figure {
          display: flex;
          justify-content: center;
          align-items: center;

          border-radius: 100%;
          border: 3px solid white;

          overflow: hidden;

          width: 260px;
          height: 260px;

          img {
            width: 100%;
            height: 100%;

            object-fit: cover;
          }
        }

        > div {
          p:nth-child(1) {
            color: ${colors.gray600};
            font-weight: 500;
            font-size: 1.125rem;
          }
          p:nth-child(2) {
            color: ${colors.gray600};
            font-weight: 600;
            font-size: 1.625rem;
          }
        }

        > div:nth-child(3) {
          display: flex;
          gap: 0.5rem;
          flex-direction: column;
          justify-content: space-between;

          > button {
            border-radius: 10px;
            width: 100%;
            height: 48px;

            font-size: 1.125rem;
            font-weight: bold;

            color: ${colors.gray0};

            background-color: ${colors.colorSecondaryDark};

            transition: 0.3s ease;

            display: flex;
            justify-content: center;
            align-items: center;

            :hover {
              background-color: ${colors.colorSecondary};
            }
          }

          > div {
            display: flex;
            gap: 1rem;
            justify-content: space-between;

            button:nth-child(1),
            button:nth-child(2) {
              border: 1px solid ${colors.colorSecondaryDark};
              border-radius: 10px;

              background-color: white;

              width: 100%;
              height: 48px;

              display: flex;
              justify-content: center;
              align-items: center;

              transition: 0.3s ease;

              :hover {
                border-color: ${colors.colorSecondary};
              }

              :active {
                border-color: ${colors.colorPrimary};
              }
              &.favorited {
                border-color: ${colors.colorPrimary};
              }
              &.remove-to-cart:hover {
                color: white;
                border-color: ${colors.negative};
                background-color: ${colors.negative};
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 750px) {
    main > div:nth-child(1) {
      align-items: baseline;

      height: max-content;

      padding: 2rem 0 0 0;

      h1 {
        width: 100%;
        margin-bottom: 160px;
      }
    }

    main > :nth-child(2) {
      flex-direction: column-reverse;
    }

    main section:nth-child(2) {
      align-items: center;
      width: 100%;
    }
    main section {
      width: 100%;
    }
  }
`;
