import { useRef, useEffect } from 'react'

const useCanvas = (draw: any, style: string): React.RefObject<HTMLCanvasElement>  => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        let ctx: CanvasRenderingContext2D | null = null;
        if (canvas) ctx = canvas.getContext('2d') 
        if (ctx) {
            ctx.fillStyle = 'yellow'
            ctx.strokeStyle = 'red'
        }
        let frameCount = 0
        let animationFrameId

        const render = () => {
            frameCount++
            draw(ctx, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])

    return canvasRef
}

export default useCanvas
