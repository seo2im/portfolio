import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Nanum Pen Script', 'Nanum Gothic';
    }

    body {
        font-family: 'Nanum Gothic';
        font-weight: 700;
        margin: 0;
        padding: 0;
        user-select: none;

        overflow: hidden;
    }
`

export default GlobalStyle
