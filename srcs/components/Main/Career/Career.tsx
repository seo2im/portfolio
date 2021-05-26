import React from 'react'
import * as career from './Career.style'
import { Postit, DragItem, Title } from '../..'
import config from '../../../../configuration'

const Career: React.FC = () => {
    const { careers, title, postId, initTop, initLeft } = config.main.career

    return (
        <DragItem initTop={initTop} initLeft={initLeft} offsetX={300}>
            <Postit postId={postId}>
                <Title size={"large"} title={title} />
                <career.Layout>
                {careers.map((car, i) => (
                    <career.Columm key={`career_${i}`}>
                        <career.Duration>{car.date}</career.Duration>
                        <career.Content>{car.content}</career.Content>
                    </career.Columm>
                ))}
                </career.Layout>
            </Postit>
        </DragItem>
        
        
    )
}

export default Career
