import React, {useEffect, useRef} from 'react';
import styles from './Carousel.module.css';


const SingleSlide = (props) => {
	const {isCurrent, id, children , imageInfo, takeFocus } = props;

	const ref = useRef(``);

	useEffect(
		() => {
			if (isCurrent && takeFocus) {
				ref.current.focus();
			}
		}, [isCurrent, takeFocus]	);

	return (
		<li
			ref={ref}
			className={styles.Slide}
			style={{ backgroundImage: `${imageInfo.src}` }}
			aria-labelledby={id}
			tabIndex={'-1'}
			aria-hidden={!isCurrent}
		>
			<div className={styles.SlideContent}>
				<h2 id={id}>{imageInfo.title}</h2>
				{children}
			</div>
		</li>
	);
};

export { SingleSlide };
