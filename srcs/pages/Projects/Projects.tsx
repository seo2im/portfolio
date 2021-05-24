import React, { useEffect, useState } from 'react'
import * as projects from './Projects.style'
import { Carrousel } from '../../components'
import config from '../../../configuration'
import { useCanvas, useLoad } from '../../hooks'
import styled from 'styled-components'

const Canvas = styled.canvas<{ load: boolean }>`
    background: rgb(34, 39, 42);

    position: fixed;
    top: 0;
    left: 0;

    z-index: -99;

    width: 100%;
    height: 100%;

    transition: transform 2s ease-out;
    transform:translate(${({ load }) => load ? '0, 0' : '3000px, 0'});
`

const Projects: React.FC = () => {
    const draw = (ctx: CanvasRenderingContext2D, frameCount?: number) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }
    const canvasRef = useCanvas(draw, 'style')
    const load = useLoad()

    return (
        <projects.Layout>
            <Canvas ref={canvasRef} load={load}/>
            <Carrousel projects={config.projects} width={40}/>
        </projects.Layout>
    )
}

export default Projects
