import React, { useState, useEffect } from 'react'

type Props = {
    text: string
    trigger: boolean
}
const TypoText: React.FC<Props> = ({ text, trigger }) => {
    const start = 3
    const end = text.length
    const [idx, setIdx] = useState<number>(start)

    useEffect(() => {
        let id = 0
        if (trigger) {
            id = setTimeout(() => {
                if (idx === end) return
                setIdx(idx + 1)
            }, 40)
        } else {
            id = setTimeout(() => {
                if (idx === start) return
                setIdx(idx - 1)
            }, 40)
        }
        return () => clearTimeout(id)
    }, [trigger, idx])

    return (
        <p>{text.slice(0, idx)}</p>
    )
}

export default TypoText
