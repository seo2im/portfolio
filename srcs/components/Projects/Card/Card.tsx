import React, { useState } from 'react'
import * as card from './Card.style'

type Props = {
    title: string
    description: string
    srcs: string
    color: string
    url: string
    isMove: boolean
}
const Card: React.FC<Props> = ({ title, description, srcs, url, color, isMove }) => {
    const [hover, setHover] = useState<boolean>(false)

    return (
            <card.Layout onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} color={color}>
                <card.Wrapper hover={hover} isMove={isMove}/>
                <card.Title hover={hover} isMove={isMove}>{title}</card.Title>
                <card.Description hover={hover} isMove={isMove}>{description}</card.Description>
            </card.Layout>
        
    )
}

export default Card
