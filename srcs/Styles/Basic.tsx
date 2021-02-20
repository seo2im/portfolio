import styled from 'styled-components'

export const Text = styled.p`
	font-size	: ${({ theme }) => theme.fontSize.p};
	margin		: ${({ theme }) => theme.margin.zero}; 	
`

export const Div = styled.div`
	margin	: ${({ theme }) => theme.margin.zero};
	padding	: ${({ theme }) => theme.padding.zero};
`

export const Hdiv = styled.div`
	display : flex;
	flex-direction	: row;
	
`

export const HeadWord = styled.span`
	font-size : ${({ theme }) => theme.fontSize.firstP};
`

export const Box = styled.div`
	margin : ${({ theme }) => theme.margin.auto};
`