import React from 'react'
import * as profile from './Profile.style'
import config from '../../../../configuration'
import { Link } from '../..'

type Prop = {
    setIdx: (idx: number) => void
    idx: number
}
const Profile: React.FC<Prop> = ({ setIdx, idx }) => {
    const { photo, name, birth, email, page } = config.main.profile

    return (
        <profile.Layout>
            <profile.Intro>
                <profile.Photo src={photo}/>
                <profile.Info>
                    <profile.Name>{name}</profile.Name>
                    <profile.subInfo>
                        <profile.subInfoText>{birth}</profile.subInfoText>
                        <profile.subInfoText>{email}</profile.subInfoText>                
                    </profile.subInfo>
                    <Link {...page} linker={() => setIdx(1 - idx)} /> 
                </profile.Info>
            </profile.Intro>
            <profile.History>

            </profile.History>
        </profile.Layout>
    )
}

export default Profile
