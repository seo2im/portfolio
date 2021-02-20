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
import { useScrollFadeIn } from '../../Hooks'
import IconImg from '../../Public/profile.png'

const Main = () => {
	const anim = useScrollFadeIn("up", 1, 0);
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
			<div ref={achorRef}>
				<SpecDiv {...anim}>
					<SpecBox title={"Web & App"}/>
					<SpecBox title={"AI"}/>
					<SpecBox title={"Etc"}/>
				</SpecDiv>
			</div>
			<Hdiv>
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</Hdiv>
		</Div>
	)
}

export default Main;
