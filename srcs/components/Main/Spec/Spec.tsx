import React from 'react'
import * as spec from './Spec.style'
import { DragItem, Postit, Title, ImageGrid } from '../..'
import config from '../../../../configuration'

const Spec: React.FC = () => {
    const { title, srcs, postId, initTop, initLeft } = config.main.spec

    return (
        <DragItem initTop={initTop} initLeft={initLeft} offsetX={300}>
            <Postit postId={postId}>
                <Title size={'large'} title={title} />
                <ImageGrid height={80} srcs={srcs} color={'black'}/>
            </Postit>
        </DragItem>
    )
}

export default Spec