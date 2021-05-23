import React from 'react'
import * as main from './Main.style'
import { Postit, Title, Link } from '../../components'
import config from '../../../configuration'

type Props = {
    setPage: (page: number) => void
}
const Main: React.FC<Props> = ({ setPage }) => {
    return (
        <main.Layout>
            <main.Section>
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
            </main.Section>
            <main.Bottom>
                <Link
                    srcs={config.main.git.srcs}
                    text={config.main.git.text}
                    linker={() => window.location.href = 'https://github.com/seo2im'}/>
                <Link
                    srcs={config.main.myProject.srcs}
                    text={config.main.myProject.text}
                    linker={() => setPage(1)}/>
            </main.Bottom>
        </main.Layout>
    )
}

export default Main
