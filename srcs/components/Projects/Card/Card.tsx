import React, { useState } from 'react'
import * as card from './Card.style'

type Props = {
    title: string
    description: string
    srcs: string
    url: string
}
const Card: React.FC<Props> = ({ title, description, srcs, url }) => {
    const [hover, setHover] = useState<boolean>(false)

    return (
        
            <card.Layout onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
                <card.Title hover={hover}>{title}</card.Title>
                <card.Description hover={hover}>{description}</card.Description>
            </card.Layout>
        
    )
}

export default Card
