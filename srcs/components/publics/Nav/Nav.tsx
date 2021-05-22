import React from 'react'
import * as nav from './Nav.style'

type Props = {
    contents: {
        message: string
        link: string
    }[],
    setPage: (page:number) => void
}
const Nav: React.FC<Props> = ({ contents, setPage }) => {
    console.log(contents)
    return (
        <nav.Section>
            {contents.map((content, i) => (
                <nav.Menu key={`nav_${i}`} onClick={() => setPage(i)}>
                    {content.message}
                </nav.Menu>
            ))}
        </nav.Section>
    )
}

export default Nav
