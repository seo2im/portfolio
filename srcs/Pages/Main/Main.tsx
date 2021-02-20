import React from 'react'
import { 
	Introduce,
	SpecBox,
	ProjectCard
} from './srcs'
import {
	Hdiv,
	Div,
	Icon
} from './Style'

import IconImg from '../../Public/profile.png'

const Main = () => {
	return (
		<Div>
			<Icon src={IconImg} />
			<Introduce/>

			<SpecBox title={"Web & App"}/>
			<SpecBox title={"AI"}/>
			<SpecBox title={"Etc"}/>

			<Hdiv>
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</Hdiv>
		</Div>
	)
}

export default Main;
