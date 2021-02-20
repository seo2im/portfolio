import React from 'react'
import {
	Div,
	TextDiv
} from './Style'
import {
	Greeting,
	Intro
} from './Article'
import ArrowButton from './ArrowButton'

const Introduce = () => {
	return (
		<Div>
			<TextDiv>
				{Greeting}
				{Intro}
			</TextDiv>
			<ArrowButton onClick={() => undefined}/>
		</Div>
	)
}

export default Introduce;