import React from 'react'
import * as main from './Main.style'
import { Spec, Goto, Background, NormalPost } from '../../components'
import config from '../../../configuration'

type Props = {
    setPage: (page: number) => void
}
const Main: React.FC<Props> = ({ setPage }) => {    
    return (
        <main.Layout>
            <Background src={config.main.background}
                top={-10} left={-250}
                width={'110%'} height={'110%'}/> 
            <main.Section>
                <Spec {...config.main.backSpec}/>
                <Spec {...config.main.frontSpec}/>
                {config.main.introduces.map((introduce, i) => (
                    <NormalPost key={`intro_${i}`} {...introduce} />
                ))}
                <Goto setPage={setPage} />
            </main.Section>
        </main.Layout>
    )
}

export default Main
