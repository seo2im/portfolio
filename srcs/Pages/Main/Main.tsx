import React, { useRef, useEffect } from 'react'
import { 
	Introduce,
	SpecBox,
	ProjectCard,
} from './srcs'
import {
	Hdiv,
	Div,
	SpecDiv,
	Icon,
} from './Style'
import IconImg from '../../Public/profile.png'

const Main = () => {
	const achorRef = useRef<HTMLDivElement>(null);

	const ScrollToProjectCard = () => {
		achorRef.current.scrollIntoView({
			behavior	: "smooth",
			block		: "start"
		});
	}

	return (
		<Div>
			<Icon src={IconImg} />
			<Introduce achor={ScrollToProjectCard}/>
			<SpecDiv ref={achorRef}>
				<SpecBox title={"Web & App"}/>
				<SpecBox title={"AI"}/>
				<SpecBox title={"Etc"}/>
			</SpecDiv>
			<Hdiv>
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</Hdiv>
		</Div>
	)
}

export default Main;
