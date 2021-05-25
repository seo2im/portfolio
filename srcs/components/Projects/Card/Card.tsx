import React, { useState } from 'react'
import * as card from './Card.style'
import { Link } from 'react-router-dom'

type Props = {
    title: string
    description: string
    img: {
        src: string
        height: string 
        top: string
        left: string
    }
    color: string
    url: string
    isMove: boolean
}
const Card: React.FC<Props> = ({ title, description, img, url, color, isMove }) => {
    const [hover, setHover] = useState<boolean>(false)

    return (
        <Link to={url}>
            <card.Layout onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} color={color}>
                <card.Wrapper hover={hover} isMove={isMove}>
                    <card.Img {...img} />
                </card.Wrapper>
                <card.TextWrapper>
                    <card.Title hover={hover} isMove={isMove}>{title}</card.Title>
                    <card.Description hover={hover} isMove={isMove}>{description}</card.Description>
                </card.TextWrapper>
            </card.Layout>
        </Link>
    )
}

export default Card
