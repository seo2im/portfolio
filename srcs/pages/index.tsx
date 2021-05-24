import React, { useState } from 'react'
import Main from './Main/Main'
import Projects from './Projects/Projects'
import styled from 'styled-components'
import { Nav } from '../components'
import config from '../../configuration'

const usePage = (): [JSX.Element[], number, (page:number) => void] => {
    const [page, setPage ] = useState<number>(1)
    const pages = [<Main setPage={setPage} key={'main'}/>, <Projects key={'projects'}/>]

    return [pages, page, setPage]
}

const Root: React.FC = () => {
    const [pages, page, setPage] = usePage()
    
    return (
        <layout.Grid>
            <layout.Left>
                <Nav contents={config.nav.contents} page={page} setPage={setPage}/>
            </layout.Left>
            <layout.Section>
                {pages[page]}
            </layout.Section>
        </layout.Grid>
    )
}

export default Root

const layout = {
    Grid: styled.div`
        display: flex;
    `,
    Left : styled.div`
        width: 20rem;
    `,
    Section: styled.div`
        width: calc(100% - 20rem);
    `
}
