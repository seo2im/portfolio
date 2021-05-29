import React from 'react'
import * as coreAbility from './CoreAbility.style'
import config from '../../../../configuration'
import { MyPostit } from '../../'

type Prop = {
    flag: boolean
}
const CoreAbility: React.FC<Prop> = ({ flag }) => {
    return (
        <>
        {config.main.coreAbility.map((postit, i) => (
            <MyPostit key={`coreAb_${i}`} {...postit} flag={flag}>
                <coreAbility.Contents>
                    {postit.contents}
                </coreAbility.Contents>
            </MyPostit>
        ))}
        </>
    )
}

export default CoreAbility
