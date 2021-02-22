import React, { useState, useRef, useEffect } from 'react'
import {
	Div,
	Text,
	Empathize,
	HeadText,
	Button,
	HView,
} from './Style'
import { useScrollFadeIn } from '../../../../Hooks'
import SpecBox from './SpecBox'

const section = ["WEB", "APP", "AI", "ETC"];

const Spec = () => {
	const animStart = useScrollFadeIn("up", 0.5, 0);
	const animSecond = useScrollFadeIn("up", 0.5, 0.4);
	const animThird = useScrollFadeIn("up", 0.5, 0.7);
	const [ show, setShow ] = useState<number>(0); 

	return (
		<Div>
			<HeadText {...animStart}>What Am I DO ?</HeadText>
			<Text>Learing <Empathize>Frontend Web & APP</Empathize></Text>
			<Text>Work  <Empathize>AI system</Empathize></Text>
			<Text mBottom={"2rem"}>Make Some <Empathize>graphic applications</Empathize></Text>
			<HView {...animSecond}>
				{section.map((name, i) => (
					<Button key={`button_${i}`} active={show == i ? true : false}
						onClick={() => setShow(i)}>
						{name}
					</Button>
				))}
			</HView>
			<div {...animThird}>
				<SpecBox name={section[show]}/>
			</div>
		</Div>
	)
}

export default Spec;