import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'TmoneyRoundWindExtraBold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindExtraBold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    body {
        font-family: 'TmoneyRoundWindExtraBold';
        margin: 0;
        padding: 0;
        user-select: none;

        overflow: hidden;
    }
`

export default GlobalStyle
