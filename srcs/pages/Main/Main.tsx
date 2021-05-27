import React, { useState } from 'react'
import * as main from './Main.style'
import { Background, NormalPost, Profile, Spec } from '../../components'
import config from '../../../configuration'


const SpecWrapper: React.FC = () => {
    return (
        <main.SpecWrapper>
            {config.main.specs.map((spec, i) => (
                <Spec key={`spec_${i}`} {...spec} />
            ))}
        </main.SpecWrapper>
    )
}
const IntroWrapper: React.FC = () => {
    return (
        <main.IntroWrapper>
            {config.main.introduces.map((introduce, i) => (
                <NormalPost key={`intro_${i}`} {...introduce} />
            ))}
        </main.IntroWrapper>
    )
}

const Main: React.FC = () => {    
    const [idx, setIdx] = useState<number>(0)

    return (
        <main.Layout>
            <Background src={config.main.background}
                left={-50} top={15}
                width={'1650px'} height={'940px'}/>
            <main.BoardText>
                {"Dragable PostIt!!"}
            </main.BoardText>
            <main.Left>
                <Profile setIdx={setIdx} idx={idx}/>
            </main.Left>
            {idx === 0? <SpecWrapper /> : <IntroWrapper />}
        </main.Layout>
    )
}

export default Main
