import styled from 'styled-components'
import * as Basic from '../../Styles/Basic'

export const Div = styled(Basic.Div)`
	padding : 5rem;
`
export const Text = styled(Basic.Text)`
	color	: ${({ theme }) => theme.color.black};
`
export const Header = styled(Basic.Div)`
	width	: 60rem;
	margin	: 0 auto;
`
export const Title = styled(Text)`
	font-size	: ${({ theme }) => theme.fontSize.title};
	font-weight	: bold;
`
export const Description = styled(Text)`
	color		: ${({ theme }) => theme.color.grey};
	font-size	: 1.5rem;
	
	margin-bottom	: 4rem;
`
export const Photo = styled.img`
	display	: block;
	width	: 60rem;
	margin	: 0 auto;
	border	: 0.01rem solid black;
`
export const About = styled(Basic.Div)`
	
`