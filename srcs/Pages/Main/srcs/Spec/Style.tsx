import styled, { keyframes } from 'styled-components'
import * as Basic from '../../../../Styles/Basic'
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
	font-size	: 1rem;
	font-weight	: bold;
	color		: ${({ theme }) => theme.color.lightGrey};
	
	min-width		: 10rem;
	margin-right	: 1rem;
	padding			: 0.5rem 0;
	
	background		: ${({ active, theme }) => active ? theme.color.black : theme.color.darkGrey};;
	border			: 0.1rem solid black;
	border-radius	: 0.4rem;

	box-shadow		: 2px 2px 2px black;

	&:focus {
		outline : none;
	}
	&:hover {
		animation : ${Basic.upMove} 0.3s forwards;
	}
`
/*
	SpecBox
*/
export const SpecBoxDiv = styled(Basic.Div)`
	background-color : white;
`
export const SpecHeadText = styled(Basic.Text)`
	margin		: 2rem 0;
	font-size	: 2rem;
	font-weight	: bold;
`
export const ImgDiv = styled.div<{background : any}>`
	width	: 5rem;
	height	: 5rem;

	margin-right	: 2rem;
	
	background			: url(${({ background }) => background}) no-repeat;
	background-size 	: contain;
	background-position : center;
`
