import React from 'react'
import * as proj from './Project.style'
import { Link } from '../../components'
import { RouteComponentProps } from 'react-router-dom'
import config from '../../../configuration'

type Prop = {
    id: string
}

const Project: React.FC<RouteComponentProps<Prop>> = ({ match }) => {
    const { git } = config.projects[match.params.id]
    
    return (
        <proj.Layout>
            <Link {...config.main.git} linker={() => window.location.href = git}/>
        </proj.Layout>
    )
}

export default Project
