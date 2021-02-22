import React from 'react'
import {
	SpecBoxDiv,
	SpecHdiv,
	SpecHeadText,
	ToolCard,
	ProjectCard,
	OutlineBox,
	Remark,
	RemarkText
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
				<SpecHdiv>
					{projects.map(({name ,url}, i) => (
						<ProjectCard key={`project_${i}`} background={url}>
							<Remark>
								<RemarkText>Test</RemarkText>
							</Remark>
						</ProjectCard>
					))}
				</SpecHdiv>
			</OutlineBox>
		</SpecBoxDiv>
	)
}

export default SpecBox;