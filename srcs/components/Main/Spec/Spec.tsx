import React from 'react'
import * as spec from './Spec.style'
import { DragItem, Postit, Title, ImageGrid } from '../..'

type Prop = {
    title: string
    srcs: string[]
    postId: number
    initTop: number
    initLeft: number
}
const Spec: React.FC<Prop> = ({ title, srcs, postId, initTop, initLeft }) => {
    return (
        <DragItem initTop={initTop} initLeft={initLeft} offsetX={300}>
            <Postit postId={postId}>
                <Title size={'middle'} title={title} />
                <ImageGrid height={80} srcs={srcs} color={'black'}/>
            </Postit>
        </DragItem>
    )
}

export default Spec