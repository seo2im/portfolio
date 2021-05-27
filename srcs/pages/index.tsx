import React from 'react'
import Project from './Project/Project'
import styled from 'styled-components'
import Main from './Main/Main'
import Projects from './Projects/Projects'
import { Nav, Background } from '../components'
import config from '../../configuration'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { usePage } from '../hooks'

const Lobby: React.FC = () => {
    const pages = [<Main key={'main'} />, <Projects key={'projects'} />]
    const [page, changePage, idx, setIdx, isOut] = usePage(pages)

    return (
        <layout.Grid>
            <Background />
            <layout.Left>
                <Nav contents={config.nav.contents} page={idx} setPage={setIdx}/>
            </layout.Left>
            <layout.Section isOut={isOut} onTransitionEnd={e => {
                    e.stopPropagation()
                    changePage(idx)
                }}>
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
        width: 300px;
        z-index: 99;
    `,
    Section: styled.div<{ isOut: boolean }>`
        width: calc(100% - 20rem);

        transition: transform 1s;
        transform: translate(${({ isOut }) => isOut ? '1700px, 0' : '0, 0'});
    `
}
