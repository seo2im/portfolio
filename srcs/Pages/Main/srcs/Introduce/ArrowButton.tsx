import React from 'react'
import {
	ArrowButtonDiv,
	ButtonDiv,
	Arrow
} from './Style'
type Prop = {
	onClick : () => void
}

const ArrowButton = ({ onClick } : Prop) => {
	return (
		<ArrowButtonDiv>
			<ButtonDiv onClick={() => onClick()}>
				<Arrow position={["0", "0"]}/>
				<Arrow position={["0", "-50px"]}/>
			</ButtonDiv>
		</ArrowButtonDiv>
	)
}

export default ArrowButton;