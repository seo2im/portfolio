import { useRef, useEffect } from 'react'

const useCanvas = (draw: (ctx: CanvasRenderingContext2D, framCount?: number) => void, fill?: string, stroke?: string, isAnim?: boolean): React.RefObject<HTMLCanvasElement>  => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        let ctx: CanvasRenderingContext2D | null = null;
        if (canvas) ctx = canvas.getContext('2d') 
        if (ctx) {
            if (stroke) ctx.strokeStyle = 'red'
            if (fill)ctx.fillStyle = 'yellow'
        }
        let frameCount = 0
        let animationFrameId

        const render = () => {
            frameCount++
            if (ctx) draw(ctx, frameCount)
            if (isAnim) animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            if (isAnim) window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])

    return canvasRef
}

export default useCanvas
