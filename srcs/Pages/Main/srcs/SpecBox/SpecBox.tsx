import React from 'react'
import {
	Div, Text, Icon, HeadText
} from './Style'
import Box from './Box'
import Article from './Article'

type Prop = {
	title	: string,
}

const SpecBox = ({ title } : Prop) => {
	return (
		<Div>
			<Box border={true}>
				<Icon src=""/>
				<HeadText>{title}</HeadText>
			</Box>
			<Box border={true}>
				{Article[title].description}
			</Box>
			<Box border={false}>
				<HeadText>Spec</HeadText>
				{Article[title].spec}
			</Box>
		</Div>
	)
}

export default SpecBox;