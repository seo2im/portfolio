import React from 'react'
import { useCanvas } from '../../../hooks'
import styled from 'styled-components'

const Layout = styled.div<{ width: number, top?: number, left?: number }>`
    position: absolute;
    top: ${({ top }) => top? top : 0}px;
    left: ${({ left }) => left? left : 0}px;

    width: ${({ width }) => width}px;

    z-index: -99;
`
const Back = styled.img`
    width: 100%;
    height: 100%;
`
const Canvas = styled.canvas`
    width: 100%;
    height: 100%;
`
type Props = {
    src?: string
    width: number
    top?: number
    left?: number
}
const Background: React.FC<Props> = ({ src, width, top, left }) => {
    const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }
    const canvasRef = useCanvas(draw, 'style')

    return (
        <Layout width={width} top={top} left={left}>
            <Back src={src} />
            <Canvas ref={canvasRef} />
        </Layout>
    )
}

export default Background
