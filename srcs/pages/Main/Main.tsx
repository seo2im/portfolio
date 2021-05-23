import React from 'react'
import * as main from './Main.style'
import { Postit, Title, Link } from '../../components'
import config from '../../../configuration'
import gitLogo from '../../../public/git.png'
import logo from '../../../public/logo.png' 

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
                    srcs={gitLogo}
                    text={config.main.git.text}
                    linker={() => window.location.href = 'https://github.com/seo2im'}/>
                <Link
                    srcs={logo}
                    text={config.main.myProject.text}
                    linker={() => setPage(1)}/>
            </main.Bottom>
        </main.Layout>
    )
}

export default Main
