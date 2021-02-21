import styled, { keyframes } from 'styled-components'
import * as Basic from '../../../../Styles/Basic'
/*
	Spec
*/
const Appear = keyframes`
	from {
		opacity : 0;
	} to {
		opacity : 1;
	}
`
export const Div = styled(Basic.Div)`
	max-width	: 70rem;
	min-height	: 70rem;
	text-align	: left;
	padding		: 4rem;
	margin		: 0 auto;
`
export const Text = styled(Basic.Text)`

`
export const Empathize = styled(Basic.Empathize)`

`
export const HeadText = styled(Text)`
	font-size	: ${({ theme }) => theme.fontSize.firstP};
	color		: ${({ theme }) => theme.color.red};
	font-weight	: bold;

	margin-bottom : 3rem;
`
export const HView = styled(Basic.Hdiv)`
	margin-bottom : 2rem;
`
export const Button = styled.button<{ active : boolean}>`
	font-size	: ${({ active, theme }) => active ? theme.fontSize.firstP : theme.fontSize.p};
	font-weight	: bold;
	color		: ${({ active, theme }) => active ? theme.color.red : theme.color.lightGrey};
	
	min-width	: 10rem;
	text-align	: left;
	
	background	: rgba(0, 0, 0, 0);
	border		: 0rem;

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
	padding-left	: 3rem; 
`
export const ImgDiv = styled.div<{background : any}>`
	width	: 10rem;
	height	: 10rem;
	
	background	: url(${({ background }) => background}) no-repeat;
`
