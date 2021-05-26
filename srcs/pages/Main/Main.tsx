import React from 'react'
import * as main from './Main.style'
import { Postit, Link, DragItem } from '../../components'
import config from '../../../configuration'

type Props = {
    setPage: (page: number) => void
}
const Main: React.FC<Props> = ({ setPage }) => {

    const drop = (e: React.DragEvent) => {
        e.preventDefault()
    }

    return (
        <main.Layout>
            <main.Section onDrop={drop} onDragOver={(e) => e.preventDefault()}>
                <DragItem initTop={0} initLeft={0} offsetX={300}>
                    <Postit  width={500} height={500} {...config.main.introduce} size='large'/>
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