import React, {useEffect, useRef} from 'react';
import styles from './Carousel.module.css';


const SingleSlide = (props) => {
	// console.log(props);
	const {isCurrent, takeFocus, id, children , imageInfo } = props;
	// console.log(children);

	const ref = useRef(``);

	useEffect(
		() => {
		}
	);

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
