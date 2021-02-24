import React from 'react'
import {

} from './Style'
import * as posts from '../../Posts'

type Post = {
	title		: string,
	description	: string,
	img			: any,
	html		: any,
}

const Portfolio : Post = {
	title		: "portfolio",
	description	: "Show my introduce",
	img			: posts.Portfolio.img,
	html		: posts.Portfolio.html
}
const Boostcamp : Post = {
	title		: "Boost Camp",
	description	: "My first time of frontEnd",
	img			: posts.Boostcamp.img,
	html		: posts.Boostcamp.html
}
const Blog : Post = {
	title		: "42 BLOG",
	description	: "React simple web page project",
	img			: posts.Blog.img,
	html		: posts.Blog.html
}

export default {
	Portfolio,
	Boostcamp,
	Blog
}