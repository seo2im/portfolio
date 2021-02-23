import React from 'react'
import {
	Div,
	Title,
	Description,
	Photo,
	About
} from './Style'
import Posts from './Articles'

const Project = ({ match }) => {
	const post = Posts[match.params.name];

	return (
		<Div>
			<Title>{post.title}</Title>
			<Description>{post.description}</Description>
			<Photo src={post.img}/>
			<About dangerouslySetInnerHTML={{__html : post.html}} />
		</Div>
	)
}

export default Project