import React, { useState, useEffect } from 'react'
import * as main from './Main.style'
import { Background, Profile, CoreAbility } from '../../components'
import config from '../../../configuration'

const Main: React.FC = () => {
    const [idx, setIdx] = useState<number>(-1)
    useEffect(() => {
        setIdx(0)
    }, [])

    return (
        <main.Layout>
            <Background src={config.main.background}
                left={-50} top={15}
                width={'1650px'} height={'940px'}/>
            <main.Section>
                <main.Nav>
                    {config.main.nav.map((item, i) => (
                        <main.NavItem
                            key={`main_nav_${i}`}
                            isSelect={idx === i}
                            onClick={() => setIdx(i)}>
                            {item}
                        </main.NavItem>
                    ))}
                </main.Nav>
                <main.BoardText>
                    {"Dragable PostIt!!"}
                </main.BoardText>
                <main.Bottom>
                    <main.BottomLeft>
                        <Profile />
                    </main.BottomLeft>
                    <main.BottomRight>
                        <CoreAbility idx={idx} />
                        </main.BottomRight>
                    </main.Bottom>
                </main.Section>
            </main.Layout>
        )
    }

    export default Main
