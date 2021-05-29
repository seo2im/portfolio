import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Nanum Pen Script', 'Nanum Gothic', 'Roboto';
    }

    body {
        font-family: 'Nanum Gothic', 'Roboto';
        font-weight: 700;
        margin: 0;
        padding: 0;
        user-select: none;
    }
`

export default GlobalStyle
