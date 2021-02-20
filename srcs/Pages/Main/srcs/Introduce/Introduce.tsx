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
type Prop = {
	achor : () => void
}
const Introduce = ({ achor } : Prop) => {
	return (
		<Div>
			<TextDiv>
				{Greeting}
				{Intro}
			</TextDiv>
			<ArrowButton onClick={achor}/>
		</Div>
	)
}

export default Introduce;