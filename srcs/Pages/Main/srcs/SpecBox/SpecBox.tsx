import React from 'react'
import {
	Div
} from './Style'

type Prop = {
	title : string,
}

const SpecBox = ({ title } : Prop) => {
	return (
		<Div>
			{title}
		</Div>
	)
}

export default SpecBox;