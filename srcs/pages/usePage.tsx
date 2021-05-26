import React, { useState, useEffect } from 'react'
import Main from './Main/Main'
import Projects from './Projects/Projects'

const usePage = (): [JSX.Element, (idx: number) => void ,number, (page:number) => void, boolean] => {
    const [idx, setIdx] = useState<number>(() => parseInt(window.localStorage.getItem('page') as string) || 0)
    const pages = [<Main setPage={setIdx} key={'main'}/>, <Projects key={'projects'}/>]
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
