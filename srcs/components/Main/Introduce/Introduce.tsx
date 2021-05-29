import React from 'react'
import * as style from './Introduce.style'
import config from '../../../../configuration'

type Prop = {

}
const Introduce: React.FC<Prop> = () => {
    return (
        <style.Layout>
            {config.main.introduce.map((paragrah, i) =>(
                <style.Paragraph key={`intro_${i}`}>
                    <style.Title>{paragrah.title}</style.Title>
                    {paragrah.description}
                </style.Paragraph>
            ))}
        </style.Layout>
    )
}

export default Introduce
