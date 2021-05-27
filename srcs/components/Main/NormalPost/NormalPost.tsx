import React from 'react'
import { DragItem, Postit } from '../..'
import * as normalPost from './NormalPost.style'
import OutInAnim from '../../publics/OutInAim/OutInAnim'
import { useLoad } from '../../../hooks'

type Prop = {
    description: string
    postId: number
    initTop: number
    initLeft: number
    width?: number
    height?: number
}
const NormalPost: React.FC<Prop> = ({ description, postId, initTop, initLeft ,width, height }) => {
    const load = useLoad()

    return (
        <OutInAnim flag={load} dirX={2000} dirY={0} >
            <DragItem initTop={initTop} initLeft={initLeft} offsetX={1200}>
                <Postit postId={postId} width={width} height={height}>
                    <normalPost.Description>
                        {description}
                    </normalPost.Description>
                </Postit>
            </DragItem>
        </OutInAnim>
    )
}

export default NormalPost
