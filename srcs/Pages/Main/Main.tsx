import React, { useRef, useEffect } from 'react'
import { 
	Introduce,
	Spec,
} from './srcs'
import {
	Div,
	Icon,
} from './Style'
import { profile } from '../../Public'

const Main = () => {
	
	const achorRef = useRef<HTMLDivElement>(null);
	const ScrollToProjectCard = () => {
		achorRef.current.scrollIntoView({
			behavior	: "smooth",
			block		: "start"
		});
	}
	//<Icon src={profile} />
	//<Introduce achor={ScrollToProjectCard}/>
	return (
		<Div>
			
			
			<div ref={achorRef}>
				<Spec />
			</div>
		</Div>
	)
}

export default Main;
