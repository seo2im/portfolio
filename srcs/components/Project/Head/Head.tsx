import React from 'react'
import * as head from './Head.style'
import config from '../../../../configuration'
import { Link } from '../../'

type Props = {
    title: string
    git: string
    description: string
    gifs: {
        src: string
        width?: string
        height?: string
    }[]
}
const Head: React.FC<Props> = ({ title, git, gifs, description }) => {
    return (
        <head.Layout>
            <head.Title>{title}</head.Title>
                <head.Description_Wrapper>
                <head.Description>{description}</head.Description>
                    <Link {...config.main.git} linker={() => window.location.href = git}/>
                    
                </head.Description_Wrapper>
                <head.GIF_Wrapper>
                    {gifs.map((gif, i) => <head.GIF key={`gif_${i}`} {...gif}/>)}
                </head.GIF_Wrapper>
        </head.Layout>
    )
}

export default Head
