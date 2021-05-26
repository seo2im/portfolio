import React, { useState, useRef } from 'react'
import * as dragItem from './DragItem.style'

type Props = {
    initTop: number
    initLeft: number
    offsetX?: number
    offsetY?: number
}

const DragItem: React.FC<Props> = ({ children, initTop, initLeft, offsetX, offsetY }) => {
    const [top, setTop] = useState<number>(initTop)
    const [left, setLeft] = useState<number>(initLeft)
    const ref = useRef<HTMLDivElement>(null)

    const mouseDown = (e: React.MouseEvent) => {
        if (!ref.current) return

        const shiftX = e.clientX - ref.current.getBoundingClientRect().left + (offsetX ? offsetX : 0);
        const shiftY = e.clientY - ref.current.getBoundingClientRect().top + (offsetY ? offsetY : 0);

        const moveAt = (pageX: number, pageY: number) => {
            if (!ref.current) return
            setLeft(pageX - shiftX)
            setTop(pageY - shiftY)
        }

        const mouseMove = (e: globalThis.MouseEvent) => {
            moveAt(e.pageX, e.pageY)   
        }
        
        document.addEventListener('mousemove', mouseMove)
    
        document.onmouseup = () => {
            if (!ref.current) return
            document.removeEventListener('mousemove', mouseMove)
            document.onmouseup = null
        }
    }

    return (
        <dragItem.Layout
            onMouseDown={mouseDown}
            ref={ref}
            top={top}
            left={left}
            onDragStart={() => false}>
            {children}
        </dragItem.Layout>   
    )
}

export default DragItem
