import React from 'react'
import * as career from './Career.style'
import { Postit, DragItem } from '../..'
import config from '../../../../configuration'
import { Title } from '../../'

const Career: React.FC = () => {
    const { careers, title, postId } = config.main.career

    return (
        <DragItem initTop={0} initLeft={0} offsetX={300}>
            <Postit width={500} height={500} postId={postId}>
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
