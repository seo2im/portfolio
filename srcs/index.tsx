import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import theme from './Styles/Theme'
import { ThemeProvider } from 'styled-components'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const Main = React.lazy(() => import("./Pages/Main/Main"));
const Project = React.lazy(() => import("./Pages/Project/Project"));
import Footer from './Footer/Footer'

const App = () => {

	return (
		<Router basename="/portfolio">
			<Suspense fallback={<div>Loading</div>}>
				<ThemeProvider theme={theme}>
					<Switch>
						<Route exact path="/" component={Main}/>
						<Route path="/project/:name" component={Project}/>
					</Switch>
					<Footer/>
				</ThemeProvider>
			</Suspense>
		</Router>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));