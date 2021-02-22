import React, { useEffect, useRef } from 'react'
import {
	SpecBoxDiv,
	Text,
	HView,
	ImgDiv,
	HeadText,
	SpecHeadText
} from './Style'
import Article from './Article'
import { useFadeIn } from '../../../../Hooks'
type Prop = {
	name : string
}

const SpecBox = ({ name } : Prop) => {
	const anim = useFadeIn(name);
	const { description, tools, projects } = Article[name];
	
	return (
		<SpecBoxDiv {...anim}>
			<Text>{description}</Text>
			<SpecHeadText>TOOL</SpecHeadText>
			<HView>
				{tools.map(({name, url}, i) => (
					<ImgDiv key={`tool_${i}`} background={url} />
				))}
			</HView>
			<SpecHeadText>PROJECT</SpecHeadText>
			<HView>
				{projects.map(({name ,url}, i) => (
					<ImgDiv key={`project_${i}`} background={url}>
						<Text>{name}</Text>
					</ImgDiv>
				))}
			</HView>
		</SpecBoxDiv>
	)
}

export default SpecBox;