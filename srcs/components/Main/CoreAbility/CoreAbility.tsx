import React from 'react'
import config from '../../../../configuration'
import MyPostit from '../MyPostit/MyPostit'

type Prop = {
    idx: number
}
const CoreAbility: React.FC<Prop> = ({ idx }) => {
    const { postits } = config.main.coreAbility
    console.log(idx)

    return (
        <>
        {postits.map((postit, i) => (
            <MyPostit key={`coreAb_${i}`} {...postit} flag={idx === 0}>
                {postit.contents}
            </MyPostit>
        ))}
        </>
    )
}

export default CoreAbility
