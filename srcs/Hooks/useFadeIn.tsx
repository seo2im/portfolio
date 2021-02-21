import { useRef, useEffect } from 'react';

const useFadeIn = (keyword) => {
	const element = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (element)
		{
			element.current.style.transitionDuration = `0s`;
			element.current.style.opacity = '0';
			element.current.style.transform = 'translate3d(0, 10%, 0)';

			setTimeout(() => {
				element.current.style.transitionProperty = 'all';
				element.current.style.transitionDuration = `0.5s`;
				element.current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
				element.current.style.transitionDelay = `0s`;
				element.current.style.opacity = '1';
				element.current.style.transform = 'translate3d(0, 0, 0)';
			}, 100);
		}
	}, [keyword])

	return {
		ref : element
	}
}

export default useFadeIn;