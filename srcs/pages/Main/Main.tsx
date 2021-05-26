import React from 'react'
import * as main from './Main.style'
import { Postit, Link, DragItem, Description, ImageGrid, Career } from '../../components'
import config from '../../../configuration'
import { Title } from '../../components/Main/Title/Title.style'

type Props = {
    setPage: (page: number) => void
}
const Main: React.FC<Props> = ({ setPage }) => {    
    return (
        <main.Layout>
            <main.Section>
                
                <Career />

                <DragItem initTop={200} initLeft={220} offsetX={300}>
                    <Postit width={500} height={500} postId={config.main.spec.postId}>
                        <Title size={'large'}>{config.main.spec.title}</Title>
                        <ImageGrid height={80} srcs={config.main.spec.srcs} color={'black'}/>
                    </Postit>
                </DragItem>

            </main.Section>
            <main.Bottom>
                <Link
                    {...config.main.git}
                    linker={() => window.location.href = 'https://github.com/seo2im'}/>
                <Link
                    {...config.main.myProject}
                    linker={() => setPage(1)}/>
            </main.Bottom>
        </main.Layout>
    )
}

export default Main
