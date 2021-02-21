import React, { useEffect, useRef } from 'react'
import {
	SpecBoxDiv,
	Text,
	HView,
	ImgDiv,
	HeadText
} from './Style'
import Article from './Article'
import { useFadeIn } from '../../../../Hooks'
type Prop = {
	name : string
}

const SpecBox = ({ name } : Prop) => {
	//const ref = useRef<HTMLDivElement>(null);
	const { description, tools, projects } = Article[name];
	/*
	useEffect(() => {
		ref.current.style.transitionDuration = `0s`;
		ref.current.style.opacity = '0';
		ref.current.style.transform = 'translate3d(0, 10%, 0)';

		setTimeout(() => {
			ref.current.style.transitionProperty = 'all';
			ref.current.style.transitionDuration = `0.5s`;
			ref.current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
			ref.current.style.transitionDelay = `0s`;
			ref.current.style.opacity = '1';
			ref.current.style.transform = 'translate3d(0, 0, 0)';
		}, 100);
	}, [name])
	*/

	const anim = useFadeIn(name);

	return (
		<SpecBoxDiv {...anim}>
			<Text>{description}</Text>
			<HeadText>TOOL</HeadText>
			<HView>
				{tools.map(({name, url}, i) => (
					<ImgDiv key={`tool_${i}`} background={url} />
				))}
			</HView>
			<HeadText>PROJECT</HeadText>
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