import React from 'react';
import styles from "./Carousel.module.css";
import {images} from "./DummyApi";
import {SlideNavItem} from "./SlideNavItem";
import {FaPause, FaPlay, FaBackward, FaForward} from "react-icons/fa";


export const ControlPanel = (props) => {
	const { goTo, pause, play, next, prev, isPlaying, currentIndex } = props;

	const handleIsCurrent = (index) => index === currentIndex;

	return (
		<>
			<ul className={styles.SlideNav}>
				{images.map((slide, index) => (
					<SlideNavItem
						key={index}
						aria-label={`slide ${index + 1}`}
						iscurrent={handleIsCurrent(index).toString()}
						onClick={() => goTo(index)}
					/>
				))}
			</ul>

			<div className={styles.Controls}>
				{isPlaying ? (
					<button
						className={`${styles.IconButton} ${styles.playPause}`}
						aria-label={'Pause'}
						onClick={() => pause() }
						children={ <FaPause /> }
					/>
				) : (
					<button
						className={`${styles.IconButton} ${styles.playPause}`}
						aria-label={'Play'}
						onClick={() => play()}
						children={ <FaPlay /> }
					/>
				)}

				<button
					className={styles.IconButton}
					aria-label={'Previous Slide'}
					onClick={() => prev(images) }
					children={ <FaBackward  /> }
				/>

				<button
					className={styles.IconButton}
					aria-label={'Next Slide'}
					onClick={() => next(images)}
					children={ <FaForward  /> }
				/>
			</div>
		</>
	);
};