import React from 'react'
import * as coreProject from './CoreProject.style'
import config from '../../../../configuration'
import { MyPostit, Link } from '../../'

type Prop = {
    projectIdx: number
}
const CoreProject: React.FC<Prop> = ({ projectIdx }) => {
    
    return (
        <>
            {config.main.coreProject.map((project, i) => (
                <MyPostit key={`project_${i}`} {...project} flag={projectIdx === i}>
                    <coreProject.Title>
                        {project.title}
                    </coreProject.Title>
                    <coreProject.Term>
                        {project.term}
                    </coreProject.Term>
                    <coreProject.Layout>
                        <coreProject.Section>
                            <coreProject.Left>
                                <coreProject.ImgWrapper background={'black'}>
                                {project.demo? <coreProject.Text>DEMO</coreProject.Text>: null}
                                {project.srcs.map((src, i) => (
                                    <coreProject.Gif key={`gif_${i}`}src={src} num={project.srcs.length}/>
                                ))}
                                </coreProject.ImgWrapper>
                                <coreProject.SpecWrapper>
                                    {project.specs.map((spec, i) => (
                                        <coreProject.SpecImg key={`spec_${i}`} src={spec} num={project.specs.length}/>
                                    ))}
                                </coreProject.SpecWrapper>
                            </coreProject.Left>
                            <coreProject.Right>
                                <coreProject.Descrition>
                                    {project.descrition}
                                </coreProject.Descrition>
                                <coreProject.ContentWrapper>
                                {project.contents.map((content, i) => (
                                    <coreProject.Content key={`cont_${i}`}>
                                        -  {content}
                                    </coreProject.Content>
                                ))}
                                </coreProject.ContentWrapper>
                                <coreProject.LinkWrapper>
                                {project.links.map((link, i) => (
                                    <Link key={`link_${i}`} {...link} linker={() => window.location.href = link.link}/>
                                ))}
                                </coreProject.LinkWrapper>
                            </coreProject.Right>
                        </coreProject.Section>
                    </coreProject.Layout>
                </MyPostit>
            ))}
        </>
    )
}

export default CoreProject
