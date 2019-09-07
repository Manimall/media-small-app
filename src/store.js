import rootReducer from './CarouselReducer';
import { createStore } from "redux";

export default () => {
	return createStore(
		rootReducer, // reducer
		undefined, // preloadState
		window.__REDUX_DEVTOOLS_EXTENSION__ // Расширитель хранилища - усилитель - enhancer
			? window.__REDUX_DEVTOOLS_EXTENSION__()
			: noop => noop
	);
};
