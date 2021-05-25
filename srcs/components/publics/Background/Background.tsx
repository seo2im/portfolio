import React from 'react'
import * as background from './Background.style'

type Props = {
    top?: number
    left?: number
}
const Background: React.FC<Props> = ({ top, left }) => {
    return (
        <background.Layout top={top} left={left}>
        </background.Layout>
    )
}

export default Background
