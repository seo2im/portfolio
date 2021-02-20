import React, { ReactNode } from 'react'
import {
	BoxDiv, Icon, Text
} from './Style'
type Prop = {
	children	: ReactNode,
	border		: boolean
}
const Box = ({ children, border } : Prop) => {
	return (
		<BoxDiv border={border}>
			{children}
		</BoxDiv>
	)
}

export default Box;