import React from 'react'
import * as imageGrid from './ImageGrid.style'

type Prop = {
    srcs: string[]
    color: string
    width?: number
    height?: number
}
const ImageGrid: React.FC<Prop> = ({ srcs, color, width, height }) => {
    return (
        <imageGrid.Layout color={color}>
            {srcs.map((src, i) => (
                <imageGrid.Image
                    key={`key_${i}`}
                    width={width} height={height}
                    src={src}/>
            ))}
        </imageGrid.Layout>
    )
}

export default ImageGrid
