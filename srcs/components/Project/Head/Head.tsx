import React from 'react'
import * as head from './Head.style'
import config from '../../../../configuration'
import { Link } from '../../'

type Props = {
    title: string
    git: string
    gif: string[]
}
const Head: React.FC<Props> = ({ title, git, gif }) => {
    return (
        <head.Layout>
            <head.Title>{title}</head.Title>
                <Link {...config.main.git} linker={() => window.location.href = git}/>
                <head.GIF_Wrapper>
                    {gif.map((src, i) => <head.GIF key={`gif_${i}`} src={src} />)}
                </head.GIF_Wrapper>
        </head.Layout>
    )
}

export default Head
