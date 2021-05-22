import React from 'react'
import * as description from './Description.style'

type Props = {
    content: string
}
const Description: React.FC<Props> = ({ content }) => {
    return (
        <description.Layout>
            {content}
        </description.Layout>
    )
}

export default Description
