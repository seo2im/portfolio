import React from 'react'
import * as proj from './Project.style'
import { Head } from '../../components'
import { RouteComponentProps } from 'react-router-dom'
import config from '../../../configuration'

type Prop = {
    id: string
}

const Project: React.FC<RouteComponentProps<Prop>> = ({ match }) => {
    const { title, git, gifs, description } = config.projects[match.params.id]
    
    return (
        <proj.Layout>
            <proj.Section>
                <Head title={title} git={git} gifs={gifs} description={description}/>
                <proj.Content />
            </proj.Section>
        </proj.Layout>
    )
}

export default Project