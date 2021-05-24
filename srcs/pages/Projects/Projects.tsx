import React from 'react'
import * as projects from './Projects.style'
import { Carrousel } from '../../components'
import config from '../../../configuration'
import { useCanvas, useLoad } from '../../hooks'

const Projects: React.FC = () => {
    const draw = (ctx: CanvasRenderingContext2D, frameCount?: number) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }
    const canvasRef = useCanvas(draw, 'style')
    const load = useLoad()

    return (
        <projects.Layout>
            <projects.Canvas ref={canvasRef} load={load}/>
            <Carrousel projects={config.projects} width={40}/>
        </projects.Layout>
    )
}

export default Projects
