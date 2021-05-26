import React from 'react'
import * as cont from './Content.style'
import { ImageGrid } from '../..'

type Prop = {
    spec: string[]
    works: {
        title: string
        columm: {
            explain: string
            link: string
        }[]
    }[]
}
const Content: React.FC<Prop> = ({ spec, works }) => {
    return (
        <cont.Layout>
            <cont.Spec>
                <ImageGrid srcs={spec} height={60} color={'white'}/>
            </cont.Spec>
            <cont.Work>
                <cont.Line />
                <cont.Section>
                    <cont.Title>진행 업무</cont.Title>
                    {works.map((work, i) => (
                        <cont.WorkWrapper key={`work_${i}`}>
                            <cont.ExplainTitle>
                                {work.title}
                            </cont.ExplainTitle>
                            {work.columm.map((ex, j) => (
                                <cont.Explain key={`ex_${j}`}>
                                    {ex.explain}
                                </cont.Explain>
                            ))}
                        </cont.WorkWrapper>
                    ))}
                </cont.Section>
            </cont.Work> 
        </cont.Layout>
    )
}

export default Content
