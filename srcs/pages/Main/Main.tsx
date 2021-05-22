import React from 'react'
import * as main from './Main.style'

const Main: React.FC = () => {
    return (
        <main.Layout>
            <main.Section>
                <main.Left>
                    Left
                </main.Left>
                <main.Right>
                    Right
                </main.Right>
            </main.Section>
            <main.Bottom>
                Bottom
            </main.Bottom>
        </main.Layout>
    )
}

export default Main
