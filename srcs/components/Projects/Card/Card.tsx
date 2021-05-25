import React, { useState } from 'react'
import * as card from './Card.style'
import source from '../../../../public'

type Props = {
    title: string
    description: string
    src: string
    color: string
    url: string
    isMove: boolean
}
const Card: React.FC<Props> = ({ title, description, src, url, color, isMove }) => {
    const [hover, setHover] = useState<boolean>(false)

    return (
            <card.Layout onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} color={color}>
                <card.Wrapper hover={hover} isMove={isMove}>
                    <card.Img src={src}/>
                </card.Wrapper>
                <card.TextWrapper>
                    <card.Title hover={hover} isMove={isMove}>{title}</card.Title>
                    <card.Description hover={hover} isMove={isMove}>{description}</card.Description>
                </card.TextWrapper>
            </card.Layout>
        
    )
}

export default Card
