import React from 'react'
import * as main from './Main.style'
import { Background, NormalPost, Profile, Spec } from '../../components'
import config from '../../../configuration'

const Main: React.FC = () => {    
    return (
        <main.Layout>
            <Background src={config.main.background}
                left={-50} top={15}
                width={'1650px'} height={'940px'}/>
            <main.BoardText>
                {"Dragable PostIt!!"}
            </main.BoardText>
            <main.Left>
                <Profile />
            </main.Left>
            {config.main.introduces.map((introduce, i) => (
                <NormalPost key={`intro_${i}`} {...introduce} />
            ))}
            {config.main.specs.map((spec, i) => (
                <Spec key={`spec_${i}`} {...spec} />
            ))}
        </main.Layout>
    )
}

export default Main
