import React from 'react'
import * as nav from './Nav.style'

type Props = {
    contents: {
        message: string
        link: string
    }[],
    page: number
    setPage: (page:number) => void
}
const Nav: React.FC<Props> = ({ contents, page, setPage }) => {
    return (
        <nav.Layout>
            <nav.Logo onClick={() => setPage(0)}/>
            <nav.Section>
                {contents.map((content, i) => (
                    <nav.Menu 
                        key={`nav_${i}`}
                        onClick={() => setPage(i)}
                        select={page === i}>
                        {content.message}
                    </nav.Menu>
                ))}
            </nav.Section>
        </nav.Layout>
    )
}

export default Nav
