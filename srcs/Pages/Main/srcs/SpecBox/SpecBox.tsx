import React, { useState, useRef, useEffect } from 'react'
import {
	Div, Text, Icon, HeadText
} from './Style'
import Box from './Box'
import Article from './Article'
import { useScrollFadeIn } from '../../../../Hooks'
type Prop = {
	title	: string,
}

const SpecBox = ({ title } : Prop) => {
	const animation = useScrollFadeIn('up', 1, 0);

	return (
		<Div {...animation}>
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