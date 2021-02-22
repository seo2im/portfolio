import React from 'react'
import {
	SpecText
} from "./Style"
type Article = {
	title		: string,
	description	: ReactElement,
	tools		: { name : string, url : any}[],
	projects	: { name : string, url : any}[]
}

import * as url from "../../../../Public"
import { ReactElement } from "react"
import { Empathize } from '../../../../Styles/Basic'

const WEB : Article = {
	title		: "Web",
	description	: (<SpecText>I value <Empathize>Artic, Simple, Reactive</Empathize> web design. Components must be <Empathize>splited</Empathize> it's own object or position. Always try to make reuseable code.</SpecText>),
	tools		: [{name : "React", url : url.react},  {name : "JS", url : url.js},
					{name : "Node", url : url.node}, {name : "express", url : url.express},
					{name : "Css", url : url.css}],/*["React", "JS", "Node", "Css", "Express", "GQL"],*/
	projects	: [{name : "42 Seoul", url : url.fortyTwo},  {name : "Boost Course", url : url.boostcourse}],/*["React Blog", "Portfolio site"]*/
}
const APP : Article = {
	title		: "APP",
	description	: (<SpecText>I value <Empathize>Artic, Simple, Reactive</Empathize> app design. Specailly for app, how to show <Empathize>necessary informations</Empathize> in <Empathize>small hand space</Empathize>.</SpecText>),
	tools		: [{name : "React Native", url : url.reactNative},  {name : "JS", url : url.js},
					{name : "CSS", url : url.css}],/*["React Native", "JS"],*/
	projects	: [{name : "42 Seoul", url : url.fortyTwo},  {name : "Boost Course", url : url.boostcourse}],/*["Todo App", "Account App", "BL:ER App"]*/
}
const AI : Article = {
	title		: "AI",
	description	: (<SpecText>Having <Empathize>Learned AI</Empathize> for 3 years, I don`t more study professional thesis, can <Empathize>apply AI system in program</Empathize>, surely code or framework, especially<Empathize>Data analysis, Image recognition</Empathize>.</SpecText>),
	tools		: [{name : "Tensorflow", url : url.tensorflow},  {name : "Keras", url : url.keras},
					{name : "Python", url : url.python}, {name : 'pandas', url : url.pandas},
					{name : "sklearn", url : url.sklearn}],/*["Tensorflow", "keras", "sklean", "pandas", "Python"],*/
	projects	: [{name : "42 Seoul", url : url.fortyTwo},  {name : "Boost Course", url : url.boostcourse}],/*["AutoDrivingCar with Reinforce learing", "Naver D2 : ", "Recognition of disease with 3d RNN"]*/
}
const ETC : Article = {
	title		: "ETC",
	description	: (<SpecText>I study not only AI & FrontEnd, but also <Empathize>Game programing, Motion Graphic</Empathize>. This time, I do various things not only programing, <Empathize>but also all of things for developing</Empathize></SpecText>),
	tools		: [{name : "unity", url : url.unity}, {name : "after effect", url : url.afterEffect}],/*["Unity", "C", "Linux"],*/
	projects	: [{name : "42 Seoul", url : url.fortyTwo},  {name : "Boost Course", url : url.boostcourse}],/*["Unity Auto Car", "42 education", "Naver boost Course", "Game : Sabotazu"]*/
}

export default  {
	WEB,
	APP,
	AI,
	ETC
}