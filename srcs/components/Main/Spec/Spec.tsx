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
}
const Spec: React.FC<Prop> = ({ title, srcs, postId, initTop, initLeft }) => {
    const load = useLoad()
    
    return (      
        <OutInAnim dirX={2000} dirY={0} flag={load}>
            <DragItem initTop={initTop} initLeft={initLeft} offsetX={1200}>
                <Postit postId={postId}>
                    <Title size={'middle'} title={title} />
                    <ImageGrid height={80} srcs={srcs} color={'black'}/>
                </Postit>
            </DragItem>
        </OutInAnim>
    )
}

export default Spec