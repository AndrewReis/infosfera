import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        width: 100vw;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    html{
        font-size: 60%;
    }

    body{
        font: 1.6rem Roboto, sans-serif;
        background: var(--primary);
    }

    input, button{
        outline: 0;
    }


    :root{
        --primary: #28293A;
        --bg-body: #131419;
        --bg-content: #1C1C24;
        --bg-header: #272731;
        --bg-input: #EFEFF0;
        --primary-border: #4043D0;
        --bg-button: #494CE3;
    }

`;