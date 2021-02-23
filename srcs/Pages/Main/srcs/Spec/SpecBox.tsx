import React from 'react'
import {
	SpecBoxDiv,
	SpecHdiv,
	PostHdiv,
	SpecHeadText,
	ToolCard,
	ProjectCard,
	OutlineBox,
	Remark,
	RemarkText,
	Go
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
			{description}
			<OutlineBox>
				<SpecHeadText>TOOL</SpecHeadText>
				<SpecHdiv>
					{tools.map(({name, url}, i) => (
						<ToolCard key={`tool_${i}`} background={url}/>	
					))}
				</SpecHdiv>
			</OutlineBox>
			<OutlineBox>
				<SpecHeadText>PROJECT & STUDY</SpecHeadText>
				<PostHdiv>
					{projects.map(({key, name ,url}, i) => (
						<Go key={`project_${i}`} to={`/project/${name}`}>
							<ProjectCard background={url}>
								<Remark>
									<RemarkText>{key}</RemarkText>
								</Remark>
							</ProjectCard>
						</Go>
					))}
				</PostHdiv>
			</OutlineBox>
		</SpecBoxDiv>
	)
}

export default SpecBox;