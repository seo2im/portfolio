import styled, { keyframes } from 'styled-components'
import * as Basic from '../../../../Styles/Basic'
/*
	introduce
*/
export const Div = styled(Basic.Div)`	
	text-align	: center;
	overflow	: auto;
	background	: ${({ theme }) => theme.gradient.upToDown};
`
export const TextDiv = styled.div`
	margin	: 15rem auto 10rem auto;
`
export const Text = styled(Basic.Text)`
	max-width : 50rem;
	min-width : 40rem;
	margin : 0.7rem auto;
	color : ${({ theme }) => theme.color.lightGrey};
`

export const HeadText = styled(Text)`
	font-size : 2.5rem;
	font-weight : bold;
	margin-bottom : 1rem;
`

export const Empathize = styled.span`
	font-weight : bold;
	color : ${({ theme }) => theme.color.white};
`

export const HeadWord = styled(Basic.HeadWord)`

`
/*
	Arrow Button
*/
const arrowMove = keyframes`
	0% {margin-top: 0px;}
	100% {margin-top: 10px;}
`
export const ArrowButtonDiv = styled.div`
	height : 15rem;
`
export const ButtonDiv = styled.button`
	width	: 10rem;

	position : relative;
	
	background	: rgba(0,0,0,0);
	border 		: 0;
	
	&:focus {
		outline : 0;
	};
	&:hover {
		animation: ${arrowMove} 0.3s linear 0s infinite alternate; margin-top: 0;
	};
	
	
`
export const Arrow = styled.div<{position : string[]}>`
	position : relative;
	left	: ${({ position }) => position[0]};
	top		: ${({ position }) => position[1]};
	
	width	: 5rem;
	height	: 5rem;
	border-top: 0.2rem solid ${({ theme }) => theme.color.grey}; 
	border-right: 0.2rem solid ${({ theme }) => theme.color.grey};
	display: inline-block;
	transform: rotate(135deg); 
`

