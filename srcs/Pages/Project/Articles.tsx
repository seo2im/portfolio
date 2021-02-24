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
const BLER : Post = {
	title		: "Eternal Return:Black Survival HANS",
	description	: "I want to game informaion in app",
	img			: posts.BLER.img,
	html		: posts.BLER.html
}
const Account : Post = {
	title		: "Account App",
	description	: "I want to know how money left in month",
	img			: posts.Account.img,
	html		: posts.Account.html
}
const Todo : Post = {
	title		: "Todo App",
	description	: "Simple App of Todo list",
	img			: posts.Todo.img,
	html		: posts.Todo.html
}

export default {
	Portfolio,
	Boostcamp,
	Blog,
	BLER,
	Account,
	Todo
}