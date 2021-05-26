import React from 'react'
import * as career from './Career.style'

type Props = {
    careers: {
        date: string
        content: string
    }[]
}
const Career: React.FC<Props> = ({ careers }) => {
    return (
        <career.Layout>
            {careers.map((car, i) => (
                <career.Columm key={`career_${i}`}>
                    <career.Duration>{car.date}</career.Duration>
                    <career.Content>{car.content}</career.Content>
                </career.Columm>
            ))}
        </career.Layout>
    )
}

export default Career
