type Article = {
	title		: string,
	description	: string,
	tools		: { name : string, url : any}[],
	projects	: { name : string, url : any}[]
}

import { profile } from "../../../../Public"

const WEB : Article = {
	title		: "Web",
	description	: "love Web frontEnd Design, but simple Backend server is OK!",
	tools		: [{name : "React", url : profile},  {name : "JS", url : profile}],/*["React", "JS", "Node", "Css", "Express", "GQL"],*/
	projects	: [{name : "React", url : profile},  {name : "JS", url : profile}],/*["React Blog", "Portfolio site"]*/
}
const APP : Article = {
	title		: "APP",
	description	: "Before day, not yet android studio only apply java, work android app. But now, I work with react native for hybrid App",
	tools		: [{name : "React", url : profile},  {name : "JS", url : profile}],/*["React Native", "JS"],*/
	projects	: [{name : "React", url : profile},  {name : "JS", url : profile}],/*["Todo App", "Account App", "BL:ER App"]*/
}
const AI : Article = {
	title		: "AI",
	description	: "Now, I`m not a research of AI algorithm, but I know how to apply it, and affect program. It help better service",
	tools		: [{name : "React", url : profile},  {name : "JS", url : profile}],/*["Tensorflow", "keras", "sklean", "pandas", "Python"],*/
	projects	: [{name : "React", url : profile},  {name : "JS", url : profile}],/*["AutoDrivingCar with Reinforce learing", "Naver D2 : ", "Recognition of disease with 3d RNN"]*/
}
const ETC : Article = {
	title		: "ETC",
	description	: "I tried to do various ",
	tools		: [{name : "React", url : profile},  {name : "JS", url : profile}],/*["Unity", "C", "Linux"],*/
	projects	: [{name : "React", url : profile},  {name : "JS", url : profile}],/*["Unity Auto Car", "42 education", "Naver boost Course", "Game : Sabotazu"]*/
}

export default  {
	WEB,
	APP,
	AI,
	ETC
}