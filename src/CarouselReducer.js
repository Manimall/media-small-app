import {images} from "./Components/Carousel/DummyApi";
import { handleActions } from "redux-actions";
import * as actions from './CarouselActions';
import { combineReducers } from "redux";

const isPlaying = handleActions({
	[actions.goToNextSlide]: (_state, action) => action.type === actions.progress.toString(),
	[actions.progress]: (_state, action) => action.type === actions.progress.toString(),
	[actions.goToPrevSlide]: () => false,
	[actions.play]: () => true,
	[actions.pause]: () => false,
}, false);

const currentIndex = handleActions({
	[actions.goToNextSlide]: (state, array) => (state.currentIndex + 1) % array.length,
	[actions.progress]: (state, array) => (state.currentIndex + 1) % array.length,
	[actions.goToPrevSlide]: (state, array) => (state.currentIndex - 1 + array.length) % array.length,
	[actions.goTo]: (_state, action) => action.index,
}, 0);

const takeFocus = handleActions({
	[actions.goTo]: () => true,
	[actions.unsetFocus]: () => false,
}, false);


// selectors
const getIsPlaying = (state) => state.isPlaying;
const getCurrentIndex = (state) => state.currentIndex;
const getTakeFocus = (state) => state.takeFocus;

export { getCurrentIndex, getIsPlaying, getTakeFocus };

export default combineReducers({
	isPlaying,
	currentIndex,
	takeFocus,
});
