import React from 'react'
import * as skillset from './SkillSet.style'
import config from '../../../../configuration'
import { MyPostit } from '../../'

type Prop = {
    flag: boolean
}
const Skillset: React.FC<Prop> = ({ flag }) => {
    const { skills, explain } = config.main.skillSet

    return (
        <>
            {skills.map((set, i) => (
                <MyPostit key={`skillset_${i}`} {...set} flag={flag}>
                    <skillset.Title>{set.title}</skillset.Title>
                    <skillset.Contents>
                        {set.contents.map((skill, i) => (
                            <p key={`skill_${i}`}>{skill.spec}  (<skillset.Level>{skill.level}</skillset.Level>)</p>    
                        ))}
                        
                    </skillset.Contents>
                </MyPostit>
            ))}
            <MyPostit {...explain} flag={flag}>
                {explain.contents.map(((content, i) => (
                    <skillset.Explain key={`exp_${i}`}>{content}</skillset.Explain>
                )))}
            </MyPostit>
        </>
    )
}

export default Skillset
