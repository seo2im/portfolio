import styled, { keyframes } from 'styled-components'

const upMove = `
	transform	: translate(0, 0);
	transition	: transform 0.5s;
	&:hover {
		transform	: translate(0, -5px);
	}
`
export const anim = {
	upMove
}
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
export const Empathize = styled.span`
	display : inline-block;
	font-weight : bold;
	color : ${({ theme }) => theme.color.red};

	${upMove}
`