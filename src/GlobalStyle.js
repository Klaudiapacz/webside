import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        --black-primary: rgb(0, 0, 0);
        --accent-green: rgb(172, 230, 0);
        --neutral-blue: rgb(0, 230, 184);
        --white-primary: rgb(247, 246, 246);
        --white-secondary: rgb(223, 219, 219);
    }
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        color: white;
        font-family: 'Montserrat', sans-serif;
        text-decoretion: none;
    }

    body{
        background-color: var(--white-primary);
        font-size: 1.2rem;
    }

    a{
        color: inherit;
    }
`;

export default GlobalStyle; 