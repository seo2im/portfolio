import React from 'react'
import { DragItem, Postit } from '../..'
import * as normalPost from './NormalPost.style'

type Prop = {
    description: string
    postId: number
    initTop: number
    initLeft: number
    width?: number
    height?: number
}
const NormalPost: React.FC<Prop> = ({ description, postId, initTop, initLeft, width, height }) => {
    return (
        <DragItem initTop={initTop} initLeft={initLeft} offsetX={300}>
            <Postit postId={postId} width={width} height={height}>
                <normalPost.Description>
                    {description}
                </normalPost.Description>
            </Postit>
        </DragItem>
    )
}

export default NormalPost