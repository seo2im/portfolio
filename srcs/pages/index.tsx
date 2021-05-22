import React from 'react'
import Main from './Main/Main'
import Projects from './Projects/Projects'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Nav } from '../components'
import config from '../../configuration'

const Root: React.FC = () => {
    return (
        <layout.Grid>
            <layout.Left>
                <Nav contents={config.nav.contents}/>
            </layout.Left>
            <Router>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path='/projects' component={Projects} />
                </Switch>
            </Router>
        </layout.Grid>
    )
}

export default Root

const layout = {
    Grid: styled.div`
        display: flex;
    `,
    Left : styled.div`
        width: 10rem;
    `,

    Section: styled.div`
        width: clac(100% - 20rem);
    `
}