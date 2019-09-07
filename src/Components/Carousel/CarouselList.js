import {images} from "./DummyApi";
import {SingleSlide} from "./singleSlide";
import React, {useEffect} from "react";

export const CarouselList = (props) => {
	const {takeFocus, unsetFocus, currentIndex} = props;

	useEffect( () => {
		if (takeFocus) unsetFocus();
	}, [takeFocus, unsetFocus]);

	const handleIsCurrent = (index) => index === currentIndex;

	return (
		<ul>
			{images.map((image, index) => (
				<SingleSlide
					key={index}
					id={`image-${index}`}
					imageInfo={image}
					children={image.content}
					takeFocus={takeFocus}
					isCurrent={handleIsCurrent(index)}
				/>
			))}
		</ul>
	)
};
