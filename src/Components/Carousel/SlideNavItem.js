import React from 'react';
import styles from './Carousel.module.css';

const SlideNavItem = (props) => {
	// console.log(props);
	return (
		<li className={styles.SlideNavItem}>
			<button aria-current={props.isCurrent} {...props}>
				<span />
			</button>
		</li>
	)
};

export { SlideNavItem };
