import React, { useState } from 'react'
import * as nav from './Nav.style'
import { TypoText } from '../../'

type Props = {
    contents: {
        message: string
        link: string
    }[],
    page: number
    setPage: (page:number) => void
}
const Nav: React.FC<Props> = ({ contents, page, setPage }) => {
    const [hover, setHover] = useState<boolean>(false)

    return (
        <nav.Layout onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <nav.Logo onClick={() => setPage(0)}/>
            <nav.Section>
                {contents.map((content, i) => {
                    return (
                        <nav.Menu 
                            key={`nav_${i}`}
                            onClick={() => setPage(i)}
                            select={page === i}>
                            <TypoText start={2} trigger={hover} text={content.message} speed={40}/>
                        </nav.Menu>
                    )
                })}
            </nav.Section>
        </nav.Layout>
    )
}

export default Nav
