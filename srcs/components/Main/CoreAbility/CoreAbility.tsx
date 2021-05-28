import React from 'react'
import * as coreAbility from './CoreAbility.style'
import config from '../../../../configuration'
import MyPostit from '../MyPostit/MyPostit'

type Prop = {
    idx: number
}
const CoreAbility: React.FC<Prop> = ({ idx }) => {
    const { postits } = config.main.coreAbility

    return (
        <>
        {postits.map((postit, i) => (
            <MyPostit key={`coreAb_${i}`} {...postit} flag={idx === 0}>
                <coreAbility.Contents>
                    {postit.contents}
                </coreAbility.Contents>
            </MyPostit>
        ))}
        </>
    )
}

export default CoreAbility
