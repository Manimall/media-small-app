import { createAction } from "redux-actions";

export const goToNextSlide = createAction(`NEXT`);
export const goToPrevSlide = createAction(`PREV`);
export const progress = createAction(`PROGRESS`);
export const play = createAction(`PLAY`);
export const pause = createAction(`PAUSE`);
export const goTo = createAction(`GOTO`);
export const unsetFocus = createAction(`UNSET_FOCUS`);
