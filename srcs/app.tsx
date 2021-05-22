import React from 'react'
import ReactDOM from 'react-dom'
import { Theme, GlobalStyle } from './styles'
import { ThemeProvider } from 'styled-components'
import Root from './pages'


const App: React.FC = () => {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Root />
        </ThemeProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
