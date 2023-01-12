import styled from 'styled-components';
import { colors } from '../../styles/Colors';

export const HeaderProfile = styled.div`
  width: 100%;
  height: 200px;

  background-color: ${colors.colorSecondaryDark};

  @media (min-width: 540px) {
    height: 120px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 100%;

  transition: all 0.3s ease;
  transition: all 0.3s ease;

  .userData {
    text-align: center;
  }

  .userData > p {
    font-size: 16px;
    font-weight: 700;
    color: ${colors.gray0};
    color: ${colors.gray0};
  }

  .userData > .educationLevel {
    font-size: 14px;
    font-style: italic;
    color: #6d737a;
  }

  .userNameContainer {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .courses {
    text-align: left;
  }

  .courseBadge {
    background-color: ${colors.colorSecondary};
    color: ${colors.gray0};
    padding: 6px 20px;
    border-radius: 8px;
    text-transform: none;
  }

  @media (min-width: 540px) {
    flex-direction: row;

    padding-top: 10px;

    .userData {
      text-align: left;
    }

    .userData > p {
      color: ${colors.gray600};
    }
  }
`;

export const ProfileContainer = styled.div`
  width: 600px;
  max-width: 90%;
  height: fit-content;
  margin: 0 auto;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  transition: all 0.3s ease;

  .userAvatar {
    cursor: pointer;
    max-width: 180px;
    min-width: 180px;
    max-height: 180px;
    min-height: 180px;

    border-radius: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    outline: none;
    margin-top: -80px;
  }

  .userAvatar > img {
    width: 180px;
    height: 180px;
    border-radius: 100%;
    border: 2px solid #fff;
    object-fit: cover;
  }

  @media (min-width: 540px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;

  .noMargin {
    margin-bottom: 0;
  }

  .sc-hLBbgP {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .css-old1by {
      width: 100%;
      margin-bottom: 0;

      .sc-eDvSVe {
        margin-bottom: 0;
      }
    }

    .css-1un816e {
      margin-bottom: 0;
    }
  }

  .chakra-form__label {
    background: #ffffff;
  }

  .chakra-input {
    background: #ffffff;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 10px;

    button {
      border-radius: 10px;
      background-color: ${colors.colorSecondaryDark};

      color: ${colors.gray0};

      height: 2.5rem;
    }

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
    div {
      width: 100%;
    }
  }

  select {
    appearance: none;
  }
`;

export const AdminBtn = styled.div`
  margin: 30px 0;
  button {
    font-weight: 600;

    width: fit-content;
    height: 40px;

    display: flex;
    align-items: center;
    column-gap: 0.3rem;
    padding: 0 0.5rem;
    gap: 10px;

    font-size: 1.2rem;
    font-weight: 600;

    border: 1px solid ${colors.colorSecondaryDark};
    border-radius: 8px;

    color: white;
    background-color: ${colors.colorSecondaryDark};

    cursor: pointer;

    transition: 0.3s ease;
  }
  button:hover {
    border-color: ${colors.colorSecondary};
    background-color: ${colors.colorSecondary};
  }
`;

export const StyledProfileSection = styled.section`
  padding-bottom: 2rem;
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
  }

  li {
    width: 100%;

    @media (min-width: 391px) {
      width: 45%;
    }

    @media (min-width: 1005px) {
      width: 31.5%;
    }
  }
`;
