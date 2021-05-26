import React from 'react'
import * as postit from './Postit.style'

type Props = {
    postId: number
    width?: number
    height?: number
}
const Postit: React.FC<Props> = ({ children, postId, width, height }) => {
    return (
        <postit.Back
            width={width? width : 400}
            height={height ? height : 400}
            postId={postId}>
            <postit.Post
                width={width? width : 400}
                height={height? height: 400}
                postId={postId}>
                <postit.ContentWrapper postId={postId}>
                    {children}
                </postit.ContentWrapper>
            </postit.Post>
        </postit.Back>
    )
}

export default Postit
