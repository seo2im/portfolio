import React from 'react'
import styled from 'styled-components'

const Anim = styled.div<{ flag : boolean, dirX: number, dirY: number, duration: number, delay: number }>`
    transition: transform ${({ duration }) => duration}s ease-out;
    transition-delay: ${({ delay }) => delay}s;

    transform: translate(${({ flag, dirX, dirY }) => flag ? '0, 0' : `${dirX}px, ${dirY}px`});
`
type Prop = {
    flag: boolean
    dirX?: number
    dirY?: number
    duration?: number
    delay?: number
}
const OutInAnim: React.FC<Prop> = ({ children, dirX, dirY, flag, duration, delay }) => {
    return (
        <Anim dirX={dirX? dirX : 2000} dirY={dirY? dirY: 0} flag={flag}
            duration={duration? duration : 1} delay={delay? delay : 0}
            onTransitionEnd={e => e.stopPropagation()}>
            {children}
        </Anim>
    )
}

export default OutInAnim
