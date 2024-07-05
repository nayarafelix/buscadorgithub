import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    :root {
        --white: #FFFFFF;
        --black: #000000;
        --main: #e91c5d;
        --background: #C8C8C8;
    }
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
    }

    h1 {
        font-size: 1.6rem;
    }
    
    body {
        background: var(--background);
    }
    
    button {
        cursor: pointer;
    }
`

export { GlobalStyles }
