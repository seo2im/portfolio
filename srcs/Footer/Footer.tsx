import React from 'react'
import {
	Div,
	Box,
	Title,
	Text,
	A
}	from './Style'

const Footer = () => {
	return (
		<Div>
			<Box>
				<Text><Title>Contact</Title> : yeonghwa17@naver.com</Text>
				<Text><Title>github</Title> : <A href={"https://github.com/syleLim/"}>Older</A></Text>
				<Text><Title>github</Title> : <A href={"https://github.com/seo1im/"}>42</A></Text>
				<Text><Title>github</Title> : <A href={"https://github.com/seo2im"}>New</A></Text>
			</Box>
		</Div>
	)
}

export default Footer;