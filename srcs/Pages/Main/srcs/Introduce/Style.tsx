import styled from 'styled-components'
import * as Basic from '../../../../Styles/Basic'

export const Div = styled(Basic.Div)`
	background	: ${({ theme }) => theme.color.orange};
	text-align	: center;
	padding		: 6rem 8rem;
`

export const Text = styled(Basic.Text)`
	color : ${({ theme }) => theme.color.white};
`

export const HeadText = styled(Text)`
	font-size : 2.5rem;
	font-weight : bold;
	margin-bottom : 3rem;
`

export const Empathize = styled.span`
	font-weight : bold;
	color : ${({ theme }) => theme.color.black};
`

export const HeadWord = styled(Basic.HeadWord)`

`


