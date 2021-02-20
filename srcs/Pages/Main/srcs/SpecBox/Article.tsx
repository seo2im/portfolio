import React from 'react'
import {
	Text
} from './Style'

const webDescription = <Text>Web & App frontEnd design is simple & beauty. Every time thinking best design</Text>
const webSpec = <Text>React, React Native, Javascript, Express, GraphQL</Text>

const aiDescription = <Text>Mainly, Image anaylsis, recognition. Using keras, tensorflow, but any framework possible</Text>;
const aiSpec = <Text>tensorflow, keras, sklean, pandas, Image Solution</Text>

const etcDescription = <Text>Developers has many spec, Not only own filed, but also have to know other field, even no coding</Text>;
const etcSpec = <Text>Unity, C#, Adobe AfterEffect, Adobe Animator</Text>

export default {
	"Web & App" : {
		description : webDescription,
		spec : webSpec
	},
	"AI" : {
		description : aiDescription,
		spec : aiSpec
	},
	"Etc" : {
		description : etcDescription,
		spec : etcSpec
	}
}