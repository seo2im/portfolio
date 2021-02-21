import styled, { keyframes } from 'styled-components'
import * as Basic from '../../Styles/Basic'

export const Div = styled(Basic.Div)`
	background : ${({ theme }) => theme.color.darkGrey};
	text-align : center;
`
export const Hdiv = styled(Basic.Hdiv)`
	width			: 100%;
	justify-content : space-between;
	margin-bottom	: 10rem;
`
export const Icon = styled.img`
	position	: absolute;
	top			: 1rem;
	left		: 0.5rem;
	background	: white;

	width			: 8rem;
	height			: 8rem;
	border-radius	: 4rem;
`