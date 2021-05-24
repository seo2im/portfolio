import React from 'react'
import * as carrousel from './Carrousel.style'
import { Card } from '../../'
import { useCarrousel, useLoad } from '../../../hooks'

type Props = {
    projects: {
        title: string,
        description: string,
        srcs: string,
        url: string,
        color: string,
    }[]
    width: number
}

const Carrousel: React.FC<Props> = ({ projects, width }) => {
    const [idx, move, duration, transitionEnd, isMove, items]  = useCarrousel(500, projects, 2)
    const load = useLoad()

    return (
        <carrousel.Layout width={width} load={load}>
            <carrousel.Slide width={width} num={projects.length + 4} idx={idx} duration={duration} onTransitionEnd={transitionEnd}>
                {items.map((project, i) => (
                    <carrousel.Content key={`carrosel_${i}`} width={width}>
                        <Card {...project} isMove={isMove}/>
                    </carrousel.Content>
                ))}
            </carrousel.Slide>
            <carrousel.Arrow position="left" onClick={() => move(-1)}>{'<'}</carrousel.Arrow>
            <carrousel.Arrow position="right" onClick={() => move(1)}>{'>'}</carrousel.Arrow>
        </carrousel.Layout>
    )
}

export default Carrousel
