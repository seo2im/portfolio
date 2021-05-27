import { useState } from 'react'

type Fc = (time: number, contents: any[], showed: number) => [number, (move: number) => void, number, (e: React.TransitionEvent) => void, boolean, any[]]
const useCarrousel: Fc = (time, contents, showed) => {
    const [idx, setIdx] = useState<number>(1)
    const [isMove, setIsMove] = useState<boolean>(false)
    const [duration, setDuration] = useState<number>(time)

    const move = (move: number) => {
        if (isMove) return
        else setIsMove(true)
        setDuration(500)
        setIdx(idx + move)
    }

    const makeItems = () => {
        let items: any[] = []

        for (let i = showed; i > 0; i--) items.push(contents[contents.length - i])
        items = [...items, ...contents]
        for (let i = 0; i < showed; i++) items.push(contents[i])

        return items
    }

    const transitionEnd = (e: React.TransitionEvent) => {
        e.stopPropagation()
        setIsMove(false)
        if (idx === 0) {
            setDuration(0)
            setIdx(contents.length)
        }
        if (idx === contents.length + 1) {
            setDuration(0)
            setIdx(showed - 1)
        }
    }

    return [idx, move, duration, transitionEnd, isMove, makeItems()]
}

export default useCarrousel
