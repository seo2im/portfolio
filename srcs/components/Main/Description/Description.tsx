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
            <TypoText start={8} text={content} trigger={hover} speed={2} cursorOn={true} deleteOff/>
        </description.Layout>
    )
}

export default Description
