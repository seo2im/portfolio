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
                left={-50} top={15}
                width={'103%'} height={'95%'}/> 
            <main.Section>
                {config.main.introduces.map((introduce, i) => (
                    <NormalPost key={`intro_${i}`} {...introduce} />
                ))}
            </main.Section>
        </main.Layout>
    )
}

export default Main
