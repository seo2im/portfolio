import React, { useState } from 'react'
import * as postit from './Postit.style'
import { Title, Description, Career } from '../..'

type Props = {
    title: string
    description?: string
    careers?: {
        date: string
        content: string
    }[]
    size: 'large' | 'middle'
    postId: number
    height: number
}
const Postit: React.FC<Props> = ({ title, description, careers, size, postId, height }) => {
    const [hover, setHover] = useState<boolean>(false)
    return (
        <postit.Back postId={postId} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <postit.Post postId={postId}>
                <Title title={title} size={size} />
                <postit.ContentWrapper postId={postId} height={height}>
                    {description ? <Description hover={hover} content={description} /> : null}
                    {careers ? <Career careers={careers} /> : null}
                </postit.ContentWrapper>
            </postit.Post>
        </postit.Back>
    )
}

export default Postit
