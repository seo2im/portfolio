import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		fontSize : {
			header	: string,
			title	: string,
			firstP	: string,
			p		: string,
		},
		margin : {
			zero	: string,
			auto	: string,
			hAuto	: string,
			wAuto	: string,
			indent	: string,
		},
		padding : {
			zero	: string,
			indent	: string,
		},
		color : {
			blue		: string,
			yellow		: string,
			orange		: string,
			dark		: string,
			deepYellow	: string,
			white		: string,
			black		: string,
		}
	}
}
