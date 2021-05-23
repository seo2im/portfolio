import React from 'react'
import { useTypoGraph } from '../../../hooks'

type Props = {
    start: number
    text: string
    trigger: boolean
    speed: number
    cursorOn?: boolean
    deleteOff?: boolean
}

const TypoText: React.FC<Props> = ({ start, text, trigger, speed, cursorOn, deleteOff }) => {
    const [typo, cursor] = useTypoGraph(start, text, trigger, speed, cursorOn, deleteOff)

    return (
        <p>{typo} {cursor ? '|' : null}</p>
    )
}

export default TypoText
