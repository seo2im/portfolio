import React from 'react'
import {
	Div,
	Title,
	Description,
	Header,
	Photo,
	About
} from './Style'
import Posts from './Articles'

const Project = ({ match }) => {
	const post = Posts[match.params.name];

	return (
		<Div>
			<Header>
				<Title>{post.title}</Title>
				<Description>{post.description}</Description>
				<Photo src={post.img}/>
			</Header>
			<About dangerouslySetInnerHTML={{__html : post.html}} />
		</Div>
	)
}

export default Project