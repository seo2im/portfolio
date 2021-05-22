import React, { useState } from 'react'
import Main from './Main/Main'
import Projects from './Projects/Projects'
import styled from 'styled-components'
import { Nav } from '../components'
import config from '../../configuration'

const usePage = (): [JSX.Element[], number, (page:number) => void] => {
    const [page, setPage ] = useState<number>(0)
    const pages = [<Main key={'main'}/>, <Projects key={'projects'}/>]

    return [pages, page, setPage]
}

const Root: React.FC = () => {
    const [pages, page, setPage] = usePage()
    
    return (
        <layout.Grid>
            <layout.Left>
                <Nav contents={config.nav.contents} setPage={setPage}/>
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
        width: 10rem;
    `,
    Section: styled.div`
        width: clac(100% - 20rem);
    `
}