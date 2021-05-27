import { useState, useEffect } from 'react'

const usePage = (pages: JSX.Element[]): [JSX.Element, (idx: number) => void ,number, (page:number) => void, boolean] => {
    const [idx, setIdx] = useState<number>(() => parseInt(window.localStorage.getItem('page') as string) || 0)
    const [page, setPage] = useState<JSX.Element>(pages[idx])

    const [isOut, setIsOut] = useState<boolean>(true)

    useEffect(() => {
        setIsOut(isOut => !isOut)
        window.localStorage.setItem('page', String(idx))
    }, [idx])

    const changePage = (idx) => {
        setPage(pages[idx])
        setIsOut(false)
    }

    return [page, changePage, idx, setIdx, isOut]
}

export default usePage
