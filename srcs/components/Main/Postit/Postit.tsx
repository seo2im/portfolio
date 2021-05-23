import React from 'react'
import * as box from './Postit.style'
import { Title } from '../..'

type Props = {
    title: string
    size: 'large' | 'middle'
}
const Box: React.FC<Props> = ({ title, size, children }) => {
    return (
        <box.Post>
        <box.Layout>
            <Title title={title} size={size} />
            {children}
        </box.Layout>
        </box.Post>
    )
}

export default Box
