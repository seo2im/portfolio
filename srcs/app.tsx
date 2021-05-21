import React from 'react'
import ReactDOM from 'react-dom'
import { Theme, GlobalStyle } from './styles'
import { ThemeProvider } from 'styled-components'


const App: React.FC = () => {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
                APP
        </ThemeProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
