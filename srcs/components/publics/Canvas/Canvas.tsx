import React from 'react'
import * as canvas from './Canvas.style'
import { useCanvas } from '../../../hooks'

type Prop = {
    draw: (CanvasRenderingContext2D, framCount: number) => void
    fill?: string
    stroke?: string
    isAnim?: boolean
}
const Canvas: React.FC<Prop> = ({ draw, fill, stroke, isAnim }) => {
    const ref = useCanvas(draw, fill, stroke, isAnim)

    return (
        <canvas.Layout ref={ref} />
    )
}

export default Canvas
