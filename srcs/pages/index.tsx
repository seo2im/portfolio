import React, { useState, useEffect } from 'react'
import Main from './Main/Main'
import Projects from './Projects/Projects'
import Project from './Project/Project'
import styled from 'styled-components'
import { Nav, Canvas } from '../components'
import config from '../../configuration'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const usePage = (): [JSX.Element, (idx: number) => void ,number, (page:number) => void, boolean] => {
    const [idx, setIdx] = useState<number>(1)

    const pages = [<Main setPage={setIdx} key={'main'}/>, <Projects key={'projects'}/>]
    const [page, setPage] = useState<JSX.Element>(pages[idx])

    const [isOut, setIsOut] = useState<boolean>(true)

    useEffect(() => {
        setIsOut(isOut => !isOut)
    }, [idx])

    const changePage = (idx) => {
        setPage(pages[idx])
        setIsOut(false)
    }

    return [page, changePage, idx, setIdx, isOut]
}

const Lobby: React.FC = () => {
    const [page, changePage, idx, setIdx, isOut] = usePage()
    const draw = (ctx: CanvasRenderingContext2D, frameCount?: number) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }

    return (
        <layout.Grid>
            <Canvas draw={draw} />
            <layout.Left>
                <Nav contents={config.nav.contents} page={idx} setPage={setIdx}/>
            </layout.Left>
            <layout.Section isOut={isOut} onTransitionEnd={() => changePage(idx)}>
                {page}
            </layout.Section>
        </layout.Grid>
    )
}

const Root: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Lobby} />
                <Route path='/project/:id' component={Project}/>
            </Switch>
        </Router>
    )
}

export default Root

const layout = {
    Grid: styled.div`
        display: flex;
    `,
    Left : styled.div`
        width: 20rem;
        z-index: 99;
    `,
    Section: styled.div<{ isOut: boolean }>`
        width: calc(100% - 20rem);

        transition: transform 1s;
        transform: translate(${({ isOut }) => isOut ? '2000px, 0' : '0, 0'});
    `
}
