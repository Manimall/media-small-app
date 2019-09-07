import React, { useEffect } from 'react';
import { images } from './DummyApi';
import Alert from "@reach/alert";
import VisuallyHidden from "@reach/visually-hidden";
import { getCurrentIndex, getIsPlaying, getTakeFocus } from '../../CarouselReducer';
import {connect} from "react-redux";
import * as actions from '../../CarouselActions';
import {ControlPanel} from "./ControlPanel";
import {CarouselList} from "./CarouselList";


const Carousel = (props) => {
	const { isPlaying, currentIndex,	progress } = props;

	let SLIDE_DURATION = 3000;

	useEffect(() => {
		if (isPlaying) {
			let timeOut = setTimeout(() => {
				progress(images);
			}, SLIDE_DURATION);
			return () => clearTimeout(timeOut);
		}
	}, [currentIndex, isPlaying, SLIDE_DURATION, progress]);

	return (
		<section className={'Carousel'} aria-label="Images from Space" >

			<CarouselList {...props} />

			<ControlPanel {...props} />

			<VisuallyHidden>
				<Alert>
					Item {currentIndex + 1} of (` `) {images.length}
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

const mapDispatchToProps = {
	next: actions.goToNextSlide,
	prev: actions.goToPrevSlide,

	goTo: actions.goTo,

	progress: actions.progress,

	play: actions.play,
	pause: actions.pause,

	unsetFocus: actions.unsetFocus
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Carousel);
