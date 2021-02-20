import styled from 'styled-components'
import * as Basic from '../../../../Styles/Basic'

export const Div = styled(Basic.Hdiv)`
	max-width	: 50rem;
	min-height	: 20rem;
	margin		: 0 auto;
	margin-bottom : 2rem;

	border	: 0.2rem solid black;
	border-radius : 3rem;
`
export const Text = styled(Basic.Text)`

`
export const HeadText = styled(Text)`
	font-size : 2.5rem;
`
export const BoxDiv = styled(Basic.Div)<{ border : boolean}>`
	width		: 33.3%;
	min-height	: 17rem;
	margin		: 1.5rem 0;
	
	border-right	: ${props => props.border ? "0.1rem" : "0"} solid black;
	
	text-align	: center;
`
export const Icon = styled.img`
	width	: 8rem;
	height	: 8rem;
`