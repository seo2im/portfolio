import React, { useState, useEffect } from 'react'

type Props = {
    text: string
    trigger: boolean
    speed: number
}
const TypoText: React.FC<Props> = ({ text, trigger, speed }) => {
    const start = 3
    const end = text.length
    const [idx, setIdx] = useState<number>(start)

    useEffect(() => {
        let id = 0
        if (trigger) {
            id = setTimeout(() => {
                if (idx === end) return
                setIdx(idx + 1)
            }, speed)
        } else {
            id = setTimeout(() => {
                if (idx === start) return
                setIdx(idx - 1)
            }, speed)
        }
        return () => clearTimeout(id)
    }, [trigger, idx])

    return (
        <p>{text.slice(0, idx)}</p>
    )
}

export default TypoText
