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

const PortfolioPage : Post = {
	title		: "portfolio Page",
	description	: "description test",
	img			: posts.PortfolioPage.img,
	html		: posts.PortfolioPage.html
}

export default {
	PortfolioPage
}