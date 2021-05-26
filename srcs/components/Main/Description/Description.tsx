import React from 'react'
import * as description from './Description.style'
import { TypoText } from '../../'

type Props = {
    content: string
    hover: boolean
}
const Description: React.FC<Props> = ({ content, hover }) => {
    

    return (
        <description.Layout >
            <p>{content}</p>
        </description.Layout>
    )
}

export default Description
