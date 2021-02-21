import styled, { keyframes } from 'styled-components'

export const Div = styled.div`
	margin	: ${({ theme }) => theme.margin.zero};
	padding	: ${({ theme }) => theme.padding.zero};
`
export const Text = styled.p`
	font-size	: ${({ theme }) => theme.fontSize.p};
	margin		: ${({ theme }) => theme.margin.zero};
	color		: ${({ theme }) => theme.color.lightGrey};
`
export const Hdiv = styled.div`
	display 		: flex;
	flex-direction	: row;
	
`
export const HeadWord = styled.span`
	font-size : ${({ theme }) => theme.fontSize.firstP};
`
export const Box = styled.div`
	margin : ${({ theme }) => theme.margin.auto};
`
export const upMove = keyframes`
	0% {
		transform : translate(0, 0);
	}
	100% {
		transform : translate(0, -5px);
	}
`
export const Empathize = styled.span`
	display : inline-block;
	font-weight : bold;
	color : ${({ theme }) => theme.color.red};

	&:hover {
		animation : ${upMove} 0.3s forwards;
	}
`