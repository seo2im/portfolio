import { DefaultTheme } from 'styled-components'

const theme : DefaultTheme = {
	fontSize : {
		header	: "10rem",
		title	: "6rem",
		firstP	: "3rem",
		p		: "1.5rem",
	},
	margin : {
		zero	: "0",
		auto	: "auto",
		hAuto	: "auto 0",
		wAuto	: "0 auto",
		indent	: "0 0 0 2rem",
	},
	padding : {
		zero	: "0",
		indent	: "0 0 0 2rem",
	},
	color : {
		black		: "#0D0D0D",
		darkGrey	: "#404040",
		grey		: "#737373",
		lightGrey	: "#BFBFBF",
		white		: "#F2F2F2",
		red			: "#da3f3a"
	},
	gradient : {
		upToDown	: "linear-gradient(#000000, #404040)"
	}
}

export default theme;