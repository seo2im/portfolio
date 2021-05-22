import React from 'react'
import * as main from './Main.style'
import { Box, Career, Description, Title, Link } from '../../components'
import config from '../../../configuration'

type Props = {
    setPage: (page: number) => void
}
const Main: React.FC<Props> = ({ setPage }) => {
    return (
        <main.Layout>
            <main.Section>
                <main.Left>
                    <Box title={config.main.introduce.title} size='large'>
                        <Description content={config.main.introduce.Description} />
                    </Box>
                    <Box title={config.main.career.title} size='large'>
                        <Career careers={config.main.career.careers}/>
                    </Box>
                </main.Left>
                <main.Right>
                    <Title title={config.main.objects.title} size={'large'}/>
                    {config.main.objects.object.map((obj, i) => (
                        <Box title={obj.title} size='middle' key={`obj_${i}`}>
                            <Description content={obj.description} />
                        </Box>
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
