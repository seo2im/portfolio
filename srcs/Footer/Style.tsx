import styled from 'styled-components'

export const Div = styled.div`
	background	: ${({ theme }) => theme.color.darkGrey};

	width	: 100%;
	height	: 20rem;	
`
export const Box = styled.div`
	width	: 30%;
	margin	: 0 auto;
`
export const Title = styled.span`
	color		: ${({ theme }) => theme.color.white};
`
export const Text = styled.p`
	color		: ${({ theme }) => theme.color.red};
	font-size	: 1.5rem;
	
	margin		: 0;
	padding		: 0;
`
export const A = styled.a`
	color		: ${({ theme }) => theme.color.red};
	
	text-decoration : none;
	
	&:actve {
		outline : none;
		color	: ${({ theme }) => theme.color.red}
	}
`