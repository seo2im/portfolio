import { useState, useEffect } from 'react'

const useTypoGraph = (start: number, text: string, trigger: boolean, speed: number, cursorOn?: boolean, deleteOff? : boolean): [string, boolean] => {
    const end = text.length
    const [cursor, setCursor] = useState<boolean>(false)
    const [typo, setTypo] = useState<string>(text.slice(0, start))

    const cursorCloser = () => {
        let id = 0

        return () => {
            if (!cursor && deleteOff && end === typo.length) { 
                clearTimeout(id)
                return 0;
            }
            id = setTimeout(() => {
                setCursor(cursor => !cursor)
            }, 500)
            
            return id
        }
    }

    useEffect(() => {
        if (!cursorOn) return
        const id = cursorCloser()();
        if (id === 0) return
        return () => clearTimeout(id)
    }, [cursor])

    useEffect(() => {
        let id = 0
        if (trigger) {
            id = setTimeout(() => {
                if (typo.length === end) {
                    setCursor(false)
                    return clearTimeout(id)
                }
                setTypo(typo => text.slice(0, typo.length + 1))
            }, speed)
        } else {
            if (deleteOff) return
            id = setTimeout(() => {
                if (typo.length === start) return clearTimeout(id)
                setTypo(typo => typo.slice(0, typo.length - 1))
            }, speed)
        }
        return () => clearTimeout(id)
    }, [trigger, typo])

    return [typo, cursor]
}

export default useTypoGraph
