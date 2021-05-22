import React from 'react'
import * as box from './Box.style'
import { Title } from '../../'

type Props = {
    title: string
    size: 'large' | 'middle'
}
const Box: React.FC<Props> = ({ title, size, children }) => {
    return (
        <box.Layout>
            <Title title={title} size={size} />
            {children}
        </box.Layout>
    )
}

export default Box
