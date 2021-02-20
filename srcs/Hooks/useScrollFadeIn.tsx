/*
	ref : https://github.com/jus0k/scroll-hooks
*/

import { useRef, useEffect, useCallback } from 'react';

const useScrollFadeIn = (direction = 'up', duration = 1, delay = 0) => {
	const element = useRef<HTMLDivElement>(null);

	const handleDirection = (name) => {
		switch (name) {
			case 'up':
				return 'translate3d(0, 50%, 0)';
			case 'down':
				return 'translate3d(0, -50%, 0)';
			case 'left':
				return 'translate3d(50%, 0, 0)';
			case 'right':
				return 'translate3d(-50%, 0, 0)';
			default:
        		return;
		}
	};

	const onScroll = useCallback(([entry]) => {
		const { current } = element;
		if (entry.isIntersecting) {
			current.style.transitionProperty = 'all';
			current.style.transitionDuration = `${duration}s`;
			current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
			current.style.transitionDelay = `${delay}s`;
			current.style.opacity = '1';
			current.style.transform = 'translate3d(0, 0, 0)';
    	}
	}, [delay, duration]);
	const outScroll = useCallback(([entry]) => {
		const { current } = element;
		
			current.style.opacity = '0';
			current.style.transform = 'translate3d(0, 50%, 0)';
    
	}, []);


	useEffect(() => {
		let inObserver;
		let outObserver;

		if (element.current) {
			inObserver = new IntersectionObserver(onScroll, { threshold: 0.1 });
			inObserver.observe(element.current);
	  
			outObserver = new IntersectionObserver(outScroll, { threshold: 0 });
			outObserver.observe(element.current);
    }

    return () => inObserver && inObserver.disconnect() && outObserver && outObserver.disconnect();
  }, [onScroll]);

  return {
    ref: element,
    style: { opacity: 0, transform: handleDirection(direction) },
  };
};

export default useScrollFadeIn;