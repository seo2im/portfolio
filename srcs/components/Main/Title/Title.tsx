import React from 'react'
import * as _title from './Title.style'

type Props = {
    title: string
    size: 'large' | 'middle'
}
const Title: React.FC<Props> = ({ title, size }) => {
    return (
        <_title.Title size={size}>{title}</_title.Title>
    )
}

export default Title
