import React from 'react'
import * as nav from './Nav.style'

type Props = {
    contents: {
        message: string
        link: string
    }[]
}
const Nav: React.FC<Props> = ({ contents }) => {
    return (
        <nav.Section>
            {contents.map((content, i) => (
                <nav.Menu key={`nav_${i}`}>
                    {content}
                </nav.Menu>
            ))}
        </nav.Section>
    )
}

export default Nav
