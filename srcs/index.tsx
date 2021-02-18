import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import theme from './Styles/Theme'
import { ThemeProvider } from 'styled-components'

const Main = React.lazy(() => import("./Pages/Main/Main"));


const App = () => {

	return (
		<div>
			<Suspense fallback={<div>Loading</div>}>
				<ThemeProvider theme={theme}>
					<Main/>
				</ThemeProvider>
			</Suspense>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));