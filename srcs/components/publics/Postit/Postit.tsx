import React from 'react'
import * as postit from './Postit.style'

type Props = {
    postId: number
    width: number
    height: number
}
const Postit: React.FC<Props> = ({ children, postId, width, height }) => {
    return (
        <postit.Back width={width} height={height} postId={postId}>
            <postit.Post width={width} height={height} postId={postId}>
                <postit.ContentWrapper postId={postId}>
                    {children}
                </postit.ContentWrapper>
            </postit.Post>
        </postit.Back>
    )
}

export default Postit
