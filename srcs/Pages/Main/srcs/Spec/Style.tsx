import styled, { keyframes } from 'styled-components'
import * as Basic from '../../../../Styles/Basic'
import { Link } from "react-router-dom"
/*
	Spec
*/
export const Div = styled(Basic.Div)`
	max-width	: 70rem;
	min-height	: 70rem;
	text-align	: left;
	padding		: 4rem;
	margin		: 0 auto;
`
export const Text = styled(Basic.Text)<{mBottom? : string}>`
	margin-bottom : ${({ mBottom }) => mBottom? mBottom : "0.5rem"};
`
export const Empathize = styled(Basic.Empathize)`

`
export const HeadText = styled(Text)`
	font-size	: 4rem;
	color		: ${({ theme }) => theme.color.red};
	font-weight	: bold;

	margin-bottom : 1rem;
`
export const HView = styled(Basic.Hdiv)`
	margin-bottom : 1rem;
`
export const Button = styled.button<{ active : boolean}>`
	font-size	: ${({ active, theme }) => active ? "1.8rem" : "1rem"};
	font-weight	: bold;
	color		: ${({ active, theme }) => active ? theme.color.red : theme.color.lightGrey};
	
	min-width		: 7rem;
	margin-right	: 1rem;
	padding			: 1rem 0;
	
	background		: ${({ active, theme }) => active ? theme.color.black : theme.color.darkGrey};
	border			: 0.1rem solid black;
	border-radius	: 0.4rem;

	box-shadow		: 2px 2px 2px black;
	&:focus {
		outline : none;
	}

	${Basic.anim.upMove}
`
/*
	SpecBox
*/
export const SpecBoxDiv = styled(Basic.Div)`
	
`
export const OutlineBox = styled(Basic.Div)`
	background		: ${({ theme }) => theme.color.darkGrey};	
	border			: 0.1rem solid black;
	border-radius	: 0.4rem;
	box-shadow		: 2px 2px 2px black;

	padding	: 1rem 1rem;
	margin	: 1rem 0;
`
export const SpecHdiv = styled(HView)`
	justify-content	: center;
	
`
export const PostHdiv  = styled(HView)`
	margin	: 0 auto;
	flex-wrap	: wrap;
`
export const SpecHeadText = styled(Basic.Text)`
	margin		: 0 0 2rem 0;
	font-size	: 2rem;
	font-weight	: bold;
	color		: ${({ theme }) => theme.color.red};
`
export const SpecText = styled(Basic.Text)`
	font-size	: 1.3rem;
	line-height	: 2rem;
	
	margin	: 2rem 0 3rem 0;
`
export const ToolCard = styled(Basic.Div)<{background : any}>`
	width	: 7rem;
	height	: 7rem;

	margin			: auto 0;
	margin-right	: 1rem;
	
	background			: url(${({ background }) => background}) no-repeat;
	background-size 	: contain;
	background-position : center;
`
export const ProjectCard = styled(Basic.Div)<{background : any}>`
	position	: relative;

	width	: 15rem;
	height	: 8rem;

	margin	: 0 2rem 2rem 0;

	background			: url(${({ background }) => background}) no-repeat;
	background-size 	: cover;
	background-position : center;
`
export const Remark = styled.div`
	transform	: rotate(-45deg);
	
	position	: relative;
	top			: 0;
	left		: -25px;

	width: 35px;
    height: 0;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 25px solid black;
`
export const RemarkText = styled(Basic.Text)`
	font-size	: 0.8rem;
	color		: white;
	line-height	: 25px;
`
export const Go = styled(Link)`
	
`