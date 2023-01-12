import { createGlobalStyle } from 'styled-components';
import { colors } from './Colors';

export const GlobalStyles = createGlobalStyle`
    body, html{
      width: 100vw;
      height: 100vh;
    }

    #root{
      height: 100%;
    }

    .button.blue {
        background-color: ${colors.colorSecondaryDark};
    }

    .button.blue:hover{
        background-color: ${colors.colorSecondary};
    }

    .button.white {
        background-color: white;
        color:  ${colors.colorSecondaryDark};
        border: 1px solid ${colors.colorSecondaryDark};
    }

    .button.white:hover {
        background-color:  ${colors.colorSecondaryDark};
        color: white;
    }
`;
