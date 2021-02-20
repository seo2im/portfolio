import styled from 'styled-components'
import * as Basic from '../../Styles/Basic'

export const Div = styled(Basic.Div)`
	background : ${({ theme }) => theme.color.white};
`

export const Hdiv = styled(Basic.Hdiv)`
	width : 100%;
	justify-content : space-between;
	margin-bottom : 10rem;
`
export const Icon = styled.img`
	position	: absolute;
	top			: 1rem;
	left		: 1rem;

	background	: white;

	width			: 8rem;
	height			: 8rem;
	border-radius	: 4rem;
`