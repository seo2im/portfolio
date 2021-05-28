import React from 'react'
import ReactDOM from 'react-dom'
import { Theme, GlobalStyle } from './styles'
import { ThemeProvider } from 'styled-components'
import Root from './pages'
import helmet, { Helmet } from 'react-helmet'

const App: React.FC = () => {
    return (
        <>
        <Helmet>
            <meta charSet='utf-8' />
            <title>Seolim portfolio</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Nanum+Pen+Script&display=swap" rel="stylesheet" />
        </Helmet>
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Root />
        </ThemeProvider>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
