import React from 'react'
import { useCanvas } from '../../../hooks'
import styled from 'styled-components'

const Layout = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    z-index: -99;
`
const Canvas = styled.canvas`
    width: 100%;
    height: 100%;
`

const Background: React.FC = () => {
    const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }
    const canvasRef = useCanvas(draw, 'style')

    return (
        <Layout>
            <Canvas ref={canvasRef}/>
        </Layout>
    )
}

export default Background
