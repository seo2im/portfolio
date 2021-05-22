import React, { useState } from 'react'
import * as carrousel from './Carrousel.style'
import { Card } from '../../'

type Props = {
    projects: {
        title: string,
        description: string,
        srcs: string,
        url: string,
    }[]
}
const width = 500;
const Carrousel: React.FC<Props> = ({ projects }) => {
    const [idx, setIdx] = useState<number>(1)
    const [isMove, setIsMove] = useState<boolean>(false)
    const [duration, setDuration] = useState<number>(500)
    
    const move = (move: number) => {
        if (isMove) return
        else setIsMove(true)
        setDuration(500)
        setIdx(idx + move)
    }

    const projectsCards = (projects: any[]) => {
        return [projects[projects.length - 1], ...projects, projects[0]]
    }

    const transitionEnd = () => {
        setIsMove(false)
        if (idx === 0) {
            setDuration(0)
            setIdx(projects.length)
        }
        if (idx === projects.length + 2) {
            setDuration(0)
            setIdx(0)
        }
    }
    

    return (
        <carrousel.Layout width={width}>
            <carrousel.Slide width={width} num={projects.length + 2} idx={idx} duration={duration} onTransitionEnd={transitionEnd}>
                {projectsCards(projects).map((project, i) => (
                    <carrousel.Content key={`carrosel_${i}`} width={width}>
                        <Card {...project}/>
                    </carrousel.Content>
                ))}
            </carrousel.Slide>
            <carrousel.Arrow position="left" onClick={() => move(-1)}>{'<<'}</carrousel.Arrow>
            <carrousel.Arrow position="right" onClick={() => move(1)}>{'>>'}</carrousel.Arrow>
        </carrousel.Layout>
    )
}

export default Carrousel
