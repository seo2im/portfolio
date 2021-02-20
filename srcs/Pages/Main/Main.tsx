import React from 'react'
import { 
	Introduce,
	SpecBox,
	ProjectCard
} from './srcs'
import {
	Hdiv,
	Div
} from './Style'

const Main = () => {
	return (
		<Div>
			<Introduce/>
			<Hdiv>
				<SpecBox title={"Web"}/>
				<SpecBox title={"AI"}/>
				<SpecBox title={"App"}/>
			</Hdiv>

			<Hdiv>
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</Hdiv>
		</Div>
	)
}

export default Main;
