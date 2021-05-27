import React from 'react'
import * as spec from './Spec.style'
import { DragItem, Postit, Title, ImageGrid, OutInAnim } from '../..'
import { useLoad } from '../../../hooks'

type Prop = {
    title: string
    srcs: string[]
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
const Spec: React.FC<Prop> = ({ title, srcs, postId, initTop, initLeft, width, height, dirX, dirY, duration, delay }) => {
    const load = useLoad()
    
    return (      
        <OutInAnim dirX={dirX} dirY={dirY} flag={load} duration={duration} delay={delay}>
            <DragItem initTop={initTop} initLeft={initLeft} offsetX={1200}>
                <Postit postId={postId} width={width} height={height}>
                    <Title size={'middle'} title={title} />
                    <ImageGrid height={50} srcs={srcs} color={'white'}/>
                </Postit>
            </DragItem>
        </OutInAnim>
    )
}

export default Spec