import React from 'react'
import {
	Div
} from './Style'
import {
	Greeting,
	Intro
} from './Article'

const Introduce = () => {
	return (
		<Div>
			{Greeting}
			{Intro}
		</Div>
	)
}

export default Introduce;