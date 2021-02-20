import styled, { keyframes } from 'styled-components'
import * as Basic from '../../../../Styles/Basic'

const Move = keyframes`
	0% {
		transform:translateX(500px);
	} 100% {
		transform:translateX(0);
	}
`
export const Div = styled(Basic.Hdiv)`
	max-width	: 70rem;
	min-height	: 20rem;
	margin		: auto;
	margin-bottom : 2rem;

	background	: ${({ theme }) => theme.color.white};
	box-shadow	: 20px 20px 20px black;
`
export const Text = styled(Basic.Text)`
	font-weight	: bold;
	color		: ${({ theme }) => theme.color.black};
`
export const HeadText = styled(Text)`
	font-size	: 2.5rem;
`
export const BoxDiv = styled(Basic.Div)<{ border : boolean}>`
	width		: 33.3%;
	min-height	: 17rem;
	
	margin		: 1.5rem 0;
	padding		: 1rem;
	
	border-right	: ${props => props.border ? "0.1rem" : "0"} solid black;
	
	text-align	: center;
`
export const Icon = styled.img`
	width	: 8rem;
	height	: 8rem;
`