import styled from 'styled-components'
import * as Basic from '../../Styles/Basic'

export const Div = styled(Basic.Div)`
	padding : 5rem;
`
export const Text = styled(Basic.Text)`
	color	: ${({ theme }) => theme.color.black};
`
export const Header = styled(Basic.Div)`
	max-width	: 100rem;
	min-width	: 80rem;
	margin		: 0 auto;
`
export const Title = styled(Text)`
	font-size	: ${({ theme }) => theme.fontSize.title};
	font-weight	: bold;

	margin-bottom	: 2rem;
`
export const Description = styled(Text)`
	color		: ${({ theme }) => theme.color.grey};
	font-size	: 2rem;
	
	margin-bottom	: 8rem;
`
export const Photo = styled.img`
	display		: block;
	max-width	: 100rem;
	min-width	: 80rem;
	margin		: 0 auto;
`
export const About = styled(Basic.Div)`
	
`