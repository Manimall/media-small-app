import React from 'react';
import styles from './Carousel.module.css';

const SlideNavItem = (props) => (
	<li className={styles.SlideNavItem}>
		<button aria-current={props.iscurrent} {...props}>
			<span />
		</button>
	</li>
);

export { SlideNavItem };
