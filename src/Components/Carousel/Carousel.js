import React, { useReducer, useEffect } from 'react';
import { images } from './DummyApi';
import styles from './Carousel.module.css';
import {SingleSlide} from "./singleSlide";
import {SlideNavItem} from "./SlideNavItem";
import {FaPause, FaPlay, FaBackward, FaForward} from "react-icons/fa";
import Alert from "@reach/alert";
import VisuallyHidden from "@reach/visually-hidden";
import { getCurrentIndex, getIsPlaying, getTakeFocus } from '../../CarouselReducer';
import {connect} from "react-redux";


const Carousel = (props) => {
	// console.log(images);
	// console.log(props);

	let SLIDE_DURATION = 3000;

	const appReducer = (state, action) => {
		switch(action.type) {
			case `NEXT`:
			case `PROGRESS`:
				return {
					...state,
					isPlaying: action.type === `PROGRESS`,
					currentIndex: (state.currentIndex + 1) % images.length
				};
			case `PREV`:
				return {
					...state,
					isPlaying: false,
					currentIndex: (state.currentIndex - 1 + images.length) % images.length
				};
			case `PLAY`:
				return {
					...state,
					isPlaying: true,
				};
			case `PAUSE`:
				return {
					...state,
					isPlaying: false,
				};
			case `GOTO`:
				return {
					...state,
					takeFocus: true,
					currentIndex: action.index,
				};
			case `UNSET_FOCUS`:
				return {
					...state,
					takeFocus: false,
				};
			default: return state;
		}
	};

	const initialState = {
		currentIndex: 0,
		isPlaying: false,
		takeFocus: false,
	};

	const [state, dispatch] = useReducer(appReducer, initialState);

	useEffect(() => {
		if (state.isPlaying) {
			let timeOut = setTimeout(() => {
				dispatch({ type:`PROGRESS` });
			}, SLIDE_DURATION);
			return () => clearTimeout(timeOut);
		}
	}, [state.currentIndex, state.isPlaying, SLIDE_DURATION]);

	useEffect( () => {
		if (state.takeFocus) dispatch({ type:`UNSET_FOCUS`,  });
	}, [state.takeFocus]);

	const handleIsCurrent = (index) => index === state.currentIndex;

	return (
		<section className={'Carousel'} aria-label="Images from Space" >
			<ul>
				{images.map((image, index) => (
					<SingleSlide
						key={index}
						id={`image-${index}`}
						imageInfo={image}
						children={image.content}
						takeFocus={state.takeFocus}
						isCurrent={handleIsCurrent(index)}
					/>
				))}
			</ul>

			<ul className={styles.SlideNav}>
				{images.map((slide, index) => (
					<SlideNavItem
						key={index}
						aria-label={`slide ${index + 1}`}
						isCurrent={handleIsCurrent(index)}
						onClick={() => { dispatch({ type:`GOTO`, index }) }}
					/>
				))}
			</ul>

			<div className={styles.Controls}>
				{state.isPlaying ? (
					<button
						className={`${styles.IconButton} ${styles.playPause}`}
						aria-label={'Pause'}
						onClick={() => { dispatch({ type:`PAUSE` }) }}
						children={ <FaPause /> }
					/>
				) : (
					<button
						className={`${styles.IconButton} ${styles.playPause}`}
						aria-label={'Play'}
						onClick={() => { dispatch({ type:`PLAY` }) }}
						children={ <FaPlay /> }
					/>
				)}

				<button
					className={styles.IconButton}
					aria-label={'Previous Slide'}
					onClick={() => { dispatch({ type:`PREV` }) }}
					children={ <FaBackward  /> }
				/>

				<button
					className={styles.IconButton}
					aria-label={'Next Slide'}
					onClick={() => { dispatch({ type:`NEXT` }) }}
					children={ <FaForward  /> }
				/>
			</div>

			<VisuallyHidden>
				<Alert>
					Item {state.currentIndex + 1} of (` `) {images.length}
				</Alert>
			</VisuallyHidden>
		</section>
	);
};

const mapStateToProps = (state) => ({
	isPlaying: getIsPlaying(state),
	currentIndex: getCurrentIndex(state),
	takeFocus: getTakeFocus(state),
});

// const mapDispathcToProps = {
//	
// };

export default connect(
	mapStateToProps,
	// mapDispatchToProps,
)(Carousel);
