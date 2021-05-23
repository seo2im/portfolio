import React from 'react'
import * as link from './Link.style'

type Props = {
    srcs: any
    text: string
    linker: () => void
}
const Link: React.FC<Props> = ({ srcs, text, linker }) => {
    return (
        <link.Layout onClick={() => linker()}>
            <link.Logo src={srcs}/>
            <link.Text>{text}</link.Text>
        </link.Layout>
    )
}

export default Link
