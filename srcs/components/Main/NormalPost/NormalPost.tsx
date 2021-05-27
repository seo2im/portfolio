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
    dirX?: number
    dirY?: number
    duration?: number
    delay?: number
}
const NormalPost: React.FC<Prop> = ({ description, postId, initTop, initLeft ,width, height, dirX, dirY, duration, delay }) => {
    const load = useLoad()

    return (
        <OutInAnim flag={load} dirX={dirX} dirY={dirY} duration={duration} delay={delay}>
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
