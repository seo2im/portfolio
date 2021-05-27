import React from 'react'
import { DragItem, Postit, OutInAnim } from '../..'
import { useLoad } from '../../../hooks'

type Prop = {
    postId: number
    initTop: number
    initLeft: number
    width?: number
    height?: number
    dirX?: number
    dirY?: number
    duration?: number
    delay?: number
    flag?: boolean
}
const MyPostit: React.FC<Prop> = ({ children, postId, initTop, initLeft, width, height, dirX, dirY, duration, delay, flag }) => {
    const load = useLoad()

    return (
        <OutInAnim dirX={dirX} dirY={dirY} flag={flag !== undefined? flag : load} duration={duration} delay={delay}>
            <DragItem initTop={initTop} initLeft={initLeft} offsetX={1250} offsetY={166}>
                <Postit postId={postId} width={width} height={height}>
                    {children}
                </Postit>
            </DragItem>
        </OutInAnim>
    )
}

export default MyPostit
