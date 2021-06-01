import React from 'react'
import * as style from './Introduce.style'
import config from '../../../../configuration'
import { useCarrousel } from '../../../hooks'

type Prop = {

}
const Introduce: React.FC<Prop> = () => {
    const width = 800;
    const { introduce } = config.main
    const [idx, move, duration, transitionEnd, _, items] = useCarrousel(500, introduce, 1)

    return (
        <style.Layout width={width}>
            <style.Slide width={width} num={items.length} idx={idx} duration={duration} onTransitionEnd={transitionEnd}>
                {items.map((item, i) => (
                    <style.Content key={`carrosel_${i}`} width={width}>
                        <style.Paragraph key={`intro_${i}`}>
                        <style.Title>{item.title}</style.Title>
                        <style.Underline>{item.import}</style.Underline>
                        {item.description}
                        </style.Paragraph>
                    </style.Content>
                ))}
            </style.Slide>
            <style.Arrow position="left" onClick={() => move(-1)}>{'<'}</style.Arrow>
            <style.Arrow position="right" onClick={() => move(1)}>{'>'}</style.Arrow>
        </style.Layout>
    )
}

export default Introduce

/*
{config.main.introduce.map((paragrah, i) =>(
    <style.Paragraph key={`intro_${i}`}>
        <style.Title>{paragrah.title}</style.Title>
        <style.Underline>{paragrah.import}</style.Underline>
        {paragrah.description}
    </style.Paragraph>
))}
*/
