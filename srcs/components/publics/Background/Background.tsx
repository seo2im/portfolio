import React from 'react'
import * as background from './Background.style'

type Props = {
    top?: number
    left?: number
    width?: string
    height?: string
    src?: string
}
const Background: React.FC<Props> = ({ top, left, src, width, height }) => {
    return (
        <background.Layout top={top} left={left} width={width} height={height}>
            {src? <background.Back src={src} /> : null}
        </background.Layout>
    )
}

export default Background
