import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

const Main = React.lazy(() => import("./Main"));

const App = () => {

	return (
		<div>
			<Suspense fallback={<div>Loading</div>}>
				<Main/>
			</Suspense>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));