import React, { useState, useEffect } from 'react'
import * as main from './Main.style'
import { Background, Profile, CoreAbility, History, CoreProject, MainNav, Introduce, SkillSet } from '../../components'
import config from '../../../configuration'
import EduHistory from '../../components/Main/EduHistory/EduHistory'

const Main: React.FC = () => {
    const [idx, setIdx] = useState<number>(-1)
    const [projectIdx, setProjectIdx] = useState<number>(-1)
    useEffect(() => {
        setIdx(1)
    }, [])

    return (
        <main.Layout>
            <Background src={config.main.background}
                left={0} top={0}
                width={'1600px'} height={'900px'}/>
            <main.Section>
                <MainNav idx={idx} setIdx={setIdx} projectIdx={projectIdx} setProjectIdx={setProjectIdx}/>
                <main.BoardText>
                    {"Dragable PostIt!!"}
                </main.BoardText>
                <main.Bottom>
                    <main.BottomLeft>
                        <Profile />
                    </main.BottomLeft>
                    <main.BottomRight>
                        <CoreAbility flag={idx === 0} />
                        <EduHistory flag={idx === 1} />
                        <SkillSet flag={idx === 2} />
                        <History flag={idx === 3} />
                    <CoreProject projectIdx={projectIdx}/>
                        <Introduce />
                    </main.BottomRight>
                    </main.Bottom>
                </main.Section>
            </main.Layout>
        )
}

export default Main

/*

                        
*/