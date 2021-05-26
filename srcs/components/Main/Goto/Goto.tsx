import React from 'react'
import * as goto from './Goto.style'
import { Postit, DragItem, Link, Title } from '../..'
import config from '../../../../configuration'

type Props = {
    setPage: (id: number) => void
}

const Goto: React.FC<Props> = ({ setPage }) => {
    const { title, git, myProject, initTop, initLeft, postId } = config.main.link 

    return (
        <DragItem initTop={initTop} initLeft={initLeft} offsetX={300}>
            <Postit postId={postId}>
                <Title size={'large'} title={title} />
                <goto.Layout>
                    <Link srcs={git.srcs} text={git.text} linker={() => window.location.href = 'https://github.com/seo2im'} />
                    <Link srcs={myProject.srcs} text={myProject.text} linker={() => setPage(1)} />
                </goto.Layout>
            </Postit>
        </DragItem>
    )
}

export default Goto
