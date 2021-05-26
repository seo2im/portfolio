import React from 'react'
import * as main from './Main.style'
import { Postit, Link, DragItem, Description, ImageGrid } from '../../components'
import config from '../../../configuration'
import { Title } from '../../components/Main/Title/Title.style'

type Props = {
    setPage: (page: number) => void
}
const Main: React.FC<Props> = ({ setPage }) => {    
    return (
        <main.Layout>
            <main.Section>
                
                <DragItem initTop={0} initLeft={0} offsetX={300}>
                    <Postit width={500} height={500} {...config.main.introduce}>
                        <Title size={'large'}>W</Title>
                        <Description content={"text"}/>
                    </Postit>
                </DragItem>

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

/*
<main.Left>
                    <Postit {...config.main.introduce} size='large' />
                    <Postit {...config.main.career} size='large' />
                </main.Left>
                <main.Right>
                    <Title title={config.main.objects.title} size={'large'}/>
                    {config.main.objects.object.map((obj, i) => (
                        <Postit {...obj} size='middle' key={`obj_${i}`} />
                    ))}
                </main.Right>
*/