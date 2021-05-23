import React from 'react'
import * as projects from './Projects.style'
import { Carrousel } from '../../components'
import config from '../../../configuration'

const Projects: React.FC = () => {
    return (
        <projects.Layout>
            <Carrousel projects={config.projects} width={40}/>
        </projects.Layout>
    )
}

export default Projects
