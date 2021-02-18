import React, { Suspense } from 'react'

import { Introduce } from './srcs'

const Main = () => {
	return (
		<div>
			<Suspense fallback={<div>Hmm</div>}>
				Main
				<Introduce/>
			</Suspense>
		</div>
	)
}

export default Main;
