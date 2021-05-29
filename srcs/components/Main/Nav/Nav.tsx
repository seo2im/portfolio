import React, { useState, useEffect } from 'react'
import * as nav from './Nav.style'
import config from '../../../../configuration'

type Prop = {
    idx: number
    setIdx: (idx: number) => void
    projectIdx: number
    setProjectIdx: (projectIdx: number) => void
}
const Nav: React.FC<Prop> = ({ idx, setIdx, projectIdx, setProjectIdx }) => {
    const [hover, setHover] = useState<number>(-1)

    useEffect(() => {
        if (idx === 4) setProjectIdx(0)
        else setProjectIdx(-1)
        
    }, [idx])

    return (
        <nav.Nav>
            {config.main.nav.map((item, i) => (
                <nav.NavItem 
                    onMouseOver={() =>  setHover(i)}
                    onMouseOut={() => setHover(-1)}
                    key={`main_nav_${i}`}
                    isSelect={idx === i}
                    onClick={() => {  
                        setIdx(i)
                    }}>
                    {item.text}
                    <nav.DropMenu hover={hover === i}>
                    {item.dropDown?.map((menu, j) => (
                        <nav.Menu
                            onClick={() => {
                                setIdx(i);
                                setProjectIdx(j)
                            }}
                            isSelect={projectIdx === j} key={`${j}`}>{menu}</nav.Menu>
                    ))}
                    </nav.DropMenu>
                </nav.NavItem>
            ))}
        </nav.Nav>
    )
}

export default Nav;