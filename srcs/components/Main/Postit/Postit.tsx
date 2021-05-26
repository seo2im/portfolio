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
    width: number
    height: number
}
const Postit: React.FC<Props> = ({ title, description, careers, size, postId, width, height }) => {
    const [hover, setHover] = useState<boolean>(false)
    return (
        <postit.Back 
            width={width} height={height}
            postId={postId} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <postit.Post width={width} height={height} postId={postId}>
                <postit.ContentWrapper postId={postId}>
                    <Title title={title} size={size} />
                    {description ? <Description hover={hover} content={description} /> : null}
                    {careers ? <Career careers={careers} /> : null}
                </postit.ContentWrapper>
            </postit.Post>
        </postit.Back>
    )
}

export default Postit
