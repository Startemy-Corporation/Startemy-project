import { createGlobalStyle } from 'styled-components';

export const ResetStyles = createGlobalStyle`
     * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    
    body {
        
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }
    
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    ul, ol, li{
        list-style: none;
    }

    a{
        color: unset;
        text-decoration: none;
    }
`;
