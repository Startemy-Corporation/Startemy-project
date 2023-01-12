import styled from 'styled-components';
import { colors } from '../../styles/Colors';

export const HeaderContainer = styled.header`
  div {
    margin: 0 auto;
    display: flex;

    gap: 30px;
    justify-content: space-between;
    padding: 30px 0;
    a {
      width: fit-content;

      padding: 0 2rem;

      display: flex;
      justify-content: center;
    }

    div {
      width: 60%;
      display: flex;
      flex-direction: column;
      gap: 30px;

      h1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 64px;
        line-height: 96px;
        color: ${colors.colorSecondaryDark};
        span {
          color: ${colors.colorPrimary};
        }
      }
    }
    img {
      width: 40%;
    }
    @media (max-width: 900px) {
      div {
        width: 100%;
      }

      img {
        display: none;
      }
    }
    @media (max-width: 720px) {
      div h1 {
        font-size: 50px;
        line-height: 70px;
      }
    }
  }
`;
export const CategoriesContainer = styled.section`
  margin: 0 auto;
  padding: 30px 0;

  background-color: ${colors.gray0};
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
      color: ${colors.gray600};
      span {
        color: ${colors.colorPrimary};
      }
    }
    p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      color: #6d737a;
    }
  }
  @media (max-width: 720px) {
    div h2 {
      font-size: 34px;
    }
    div p {
      font-size: 16px;
    }
  }
  ul {
    width: 100%;
    display: grid;
    justify-content: center;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-auto-flow: row wrap;
    grid-template-rows: 1fr 1fr;
    gap: 55px 0px;

    margin-top: 20px;
    @media (max-width: 720px) {
      gap: 20px 0px;
    }
    li {
      width: 320px;
      height: 63px;

      background: #ffffff;

      border-radius: 8px;

      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 18px;
      justify-content: space-between;
      transition: 0.2s;
      .group {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 70%;
      }
      .arrowDiv {
        width: 44px;
        height: 44px;

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        transition: 0.5s;
      }
    }
    li:hover {
      border: 2px solid ${colors.colorSecondary};
    }
    li:hover .arrowDiv {
      background-color: ${colors.colorSecondaryDark};
      color: white;
    }
  }
`;
export const TestimonyContainer = styled.section`
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  flex-direction: column;

  div {
    h2 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
      color: ${colors.gray600};
      span {
        color: ${colors.colorPrimary};
      }
    }
    p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      color: #6d737a;
    }
  }
  @media (max-width: 720px) {
    div h2 {
      font-size: 34px;
    }
    div p {
      font-size: 16px;
    }
  }

  .starsContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }
  .swiper {
    margin-top: 30px;
    width: 100%;
    span {
      background-color: ${colors.colorSecondary};
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      padding: 5% 10%;

      display: flex;
      flex-direction: column;

      .testimonyDesc {
        padding: 1.25rem 0;
      }
    }
  }
`;
export const AboutUsContainer = styled.section`
  margin: 0 auto;
  padding: 60px 0;
  background-color: ${colors.gray0};
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
      color: ${colors.gray600};
      span {
        color: ${colors.colorPrimary};
      }
    }
    p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      color: #6d737a;
    }
  }
  @media (max-width: 720px) {
    div h2 {
      font-size: 34px;
    }
    div p {
      font-size: 16px;
    }
  }
  .container {
    margin-top: 30px;
    display: grid;
    overflow: auto;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr 1fr;
    gap: 10px 10px;
    grid-auto-flow: row;
    grid-template-areas:
      'Foto-Gustavo Lucas-Batista Foto-Pedro Wigny Foto-Tomás Mayson'
      'Gustavo-Lima Foto-Lucas Pedro-Lisboa Foto-Wigny Tomás-Lillo Foto-Mayson';
  }

  .Foto-Gustavo {
    grid-area: Foto-Gustavo;
    width: 137px;
    height: 137px;
    @media (max-width: 720px) {
      max-width: 90px;
      max-height: 90px;
    }
  }

  .Foto-Lucas {
    grid-area: Foto-Lucas;
    width: 137px;
    height: 137px;
    @media (max-width: 720px) {
      max-width: 90px;
      max-height: 90px;
    }
  }

  .Foto-Pedro {
    grid-area: Foto-Pedro;
    width: 137px;
    height: 137px;
    @media (max-width: 720px) {
      max-width: 90px;
      max-height: 90px;
    }
  }

  .Foto-Wigny {
    grid-area: Foto-Wigny;
    width: 137px;
    height: 137px;
    @media (max-width: 720px) {
      max-width: 90px;
      max-height: 90px;
    }
  }

  .Foto-Tomás {
    grid-area: Foto-Tomás;
    width: 137px;
    height: 137px;
    @media (max-width: 720px) {
      max-width: 90px;
      max-height: 90px;
    }
  }

  .Foto-Mayson {
    grid-area: Foto-Mayson;
    width: 137px;
    height: 137px;
    @media (max-width: 720px) {
      max-width: 90px;
      max-height: 90px;
    }
  }

  .Lucas-Batista {
    grid-area: Lucas-Batista;
    align-items: center;
    justify-content: center;
    width: 137px;
    height: 137px;
    @media (max-width: 720px) {
      max-width: 90px;
      max-height: 90px;
    }
  }

  .Gustavo-Lima {
    grid-area: Gustavo-Lima;
    align-items: center;
    justify-content: center;
    width: 137px;
    height: 137px;
    @media (max-width: 720px) {
      max-width: 90px;
      max-height: 90px;
    }
  }

  .Pedro-Lisboa {
    grid-area: Pedro-Lisboa;
    align-items: center;
    justify-content: center;
    width: 137px;
    height: 137px;
    @media (max-width: 720px) {
      max-width: 90px;
      max-height: 90px;
    }
  }

  .Wigny {
    grid-area: Wigny;
    align-items: center;
    justify-content: center;
    width: 137px;
    height: 137px;
    @media (max-width: 720px) {
      max-width: 90px;
      max-height: 90px;
    }
  }

  .Tomás-Lillo {
    grid-area: Tomás-Lillo;
    align-items: center;
    justify-content: center;
    width: 137px;
    height: 137px;
    @media (max-width: 720px) {
      max-width: 90px;
      max-height: 90px;
    }
  }

  .Mayson {
    grid-area: Mayson;
    align-items: center;
    justify-content: center;
    width: 137px;
    height: 137px;
    @media (max-width: 720px) {
      max-width: 90px;
      max-height: 90px;
    }
  }
  .Foto-Gustavo:hover ~ .Gustavo-Lima p {
    font-weight: 600;
    color: ${colors.colorSecondaryDark};
  }
  .Foto-Lucas:hover ~ .Lucas-Batista p {
    font-weight: 600;
    color: ${colors.colorSecondaryDark};
  }
  .Foto-Pedro:hover ~ .Pedro-Lisboa p {
    font-weight: 600;
    color: ${colors.colorSecondaryDark};
  }
  .Foto-Wigny:hover ~ .Wigny p {
    font-weight: 600;
    color: ${colors.colorSecondaryDark};
  }
  .Foto-Tomás:hover ~ .Tomás-Lillo p {
    font-weight: 600;
    color: ${colors.colorSecondaryDark};
  }
  .Foto-Mayson:hover ~ .Mayson p {
    font-weight: 600;
    color: ${colors.colorSecondaryDark};
  }
`;
export const FooterContainer = styled.footer`
  background-color: ${colors.colorSecondaryDark};

  div {
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      color: white;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
    }
    @media (max-width: 720px) {
      p {
        font-size: 14px;
      }
    }
  }
`;
