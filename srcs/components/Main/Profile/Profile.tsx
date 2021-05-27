import React from 'react'
import * as profile from './Profile.style'
import config from '../../../../configuration'
import { Link } from '../..'

type Prop = {
    
}
const Profile: React.FC<Prop> = () => {
    const { photo, name, birth, email, link } = config.main.profile

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
                    <Link {...link} 
                        linker={() => window.location.href = "https://github.com/seo2im"} /> 
                </profile.Info>
            </profile.Intro>
            <profile.History>

            </profile.History>
        </profile.Layout>
    )
}

export default Profile
