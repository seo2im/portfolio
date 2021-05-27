import React from 'react'
import styled from 'styled-components'

const Anim = styled.div<{ flag : boolean, dirX: number, dirY: number }>`
    transition: transform 2s;

    transform: translate(${({ flag, dirX, dirY }) => flag ? '0, 0' : `${dirX}px, ${dirY}px`});
`
type Prop = {
    dirX: number
    dirY: number
    flag: boolean
}
const OutInAnim: React.FC<Prop> = ({ children, dirX, dirY, flag }) => {
    return (
        <Anim dirX={dirX} dirY={dirY} flag={flag}
            onTransitionEnd={e => e.stopPropagation()}>
            {children}
        </Anim>
    )
}

export default OutInAnim
