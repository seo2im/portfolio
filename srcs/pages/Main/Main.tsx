import React, { useState, useEffect } from 'react'
import * as main from './Main.style'
import { Background, Profile, CoreAbility, History, CoreProject, MainNav, Introduce } from '../../components'
import config from '../../../configuration'
import Skillset from '../../components/Main/SkillSet/SkillSet'

const Main: React.FC = () => {
    const [idx, setIdx] = useState<number>(-1)
    const [projectIdx, setProjectIdx] = useState<number>(-1)
    useEffect(() => {
        setIdx(5)
    }, [])

    return (
        <main.Layout>
            <Background src={config.main.background}
                left={-50} top={15}
                width={'1650px'} height={'940px'}/>
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
                        <Skillset flag={idx === 2} />
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
