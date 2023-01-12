import styled from 'styled-components';
import { CoursePage } from '.';

export const CoursePageStyled = styled(CoursePage)`
  header {
  }
  main {
    display: flex;
    gap: 2.5rem;
    flex-direction: column;

    padding: 3rem 0 5rem;

    & > div {
      display: none;
      form {
        display: flex;
        position: relative;

        width: 100%;

        input {
          padding-right: 40px;
        }

        figure {
          position: absolute;
          top: 12px;
          right: 4px;
          z-index: 3;

          padding: 0 0.625rem;
        }
      }
    }
    fieldset {
      display: flex;
      justify-content: center;

      margin-bottom: 2.5rem;

      div {
        width: 100%;
        display: flex;
        justify-content: space-between;

        a {
          width: 15%;
          margin-inline: 0;
        }
      }
    }

    section {
      div {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }

  @media (max-width: 1020px) {
    main {
      fieldset {
        > div {
          gap: 0.5rem;
          label {
            margin: 0;
          }
        }
      }
    }
  }
  @media (max-width: 989px) {
    section ul li {
      width: 48%;
      div {
        width: 100%;
      }
    }
  }

  @media (max-width: 850px) {
    header {
      .search {
        display: none;
      }
    }

    main {
      & > div {
        display: flex;
        gap: 1rem;
        justify-content: end;
        button {
          display: flex;
          justify-content: center;
          align-items: center;

          width: fit-content;
        }
      }

      fieldset {
        display: none;
      }
    }

    section {
      ul li {
        width: 100%;
        div {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 570px) {
    header {
      nav > a {
        display: none;
      }

      nav #styledDiv {
        padding-top: 2rem;

        display: flex;
        flex-direction: column;

        gap: 2rem;
      }
      nav button {
        display: flex;
      }
    }
  }
`;
