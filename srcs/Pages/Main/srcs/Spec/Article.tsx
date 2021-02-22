type Article = {
	title		: string,
	description	: string,
	tools		: { name : string, url : any}[],
	projects	: { name : string, url : any}[]
}

import * as url from "../../../../Public"

const WEB : Article = {
	title		: "Web",
	description	: "love Web frontEnd Design, but simple Backend server is OK!",
	tools		: [{name : "React", url : url.react},  {name : "JS", url : url.js},
					{name : "Node", url : url.node}, {name : "express", url : url.express},
					{name : "Css", url : url.css}],/*["React", "JS", "Node", "Css", "Express", "GQL"],*/
	projects	: [{name : "42 Seoul", url : url.fortyTwo},  {name : "Boost Course", url : url.boostcourse}],/*["React Blog", "Portfolio site"]*/
}
const APP : Article = {
	title		: "APP",
	description	: "Before day, not yet android studio only apply java, work android app. But now, I work with react native for hybrid App",
	tools		: [{name : "React Native", url : url.reactNative},  {name : "JS", url : url.js},
					{name : "CSS", url : url.css}],/*["React Native", "JS"],*/
	projects	: [{name : "42 Seoul", url : url.fortyTwo},  {name : "Boost Course", url : url.boostcourse}],/*["Todo App", "Account App", "BL:ER App"]*/
}
const AI : Article = {
	title		: "AI",
	description	: "Now, I`m not a research of AI algorithm, but I know how to apply it, and affect program. It help better service",
	tools		: [{name : "Tensorflow", url : url.tensorflow},  {name : "Keras", url : url.keras},
					{name : "Python", url : url.python}, {name : 'pandas', url : url.pandas},
					{name : "sklearn", url : url.sklearn}],/*["Tensorflow", "keras", "sklean", "pandas", "Python"],*/
	projects	: [{name : "42 Seoul", url : url.fortyTwo},  {name : "Boost Course", url : url.boostcourse}],/*["AutoDrivingCar with Reinforce learing", "Naver D2 : ", "Recognition of disease with 3d RNN"]*/
}
const ETC : Article = {
	title		: "ETC",
	description	: "I tried to do various ",
	tools		: [{name : "unity", url : url.unity}],/*["Unity", "C", "Linux"],*/
	projects	: [{name : "42 Seoul", url : url.fortyTwo},  {name : "Boost Course", url : url.boostcourse}],/*["Unity Auto Car", "42 education", "Naver boost Course", "Game : Sabotazu"]*/
}

export default  {
	WEB,
	APP,
	AI,
	ETC
}