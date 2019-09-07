import { useEffect, useState } from 'react'

const useMedia = (query) => {
	let initialState = window.matchMedia(query).matches;

	const [matches, setMatches] = useState(initialState);

	useEffect(
		() => {
			let newMedia = window.matchMedia(query);
			if (newMedia.matches !== matches) setMatches(newMedia.matches);

			const mediaListener = () => setMatches(newMedia.matches);
			newMedia.addListener(mediaListener);
			return () => newMedia.removeListener(mediaListener);
		},[query, matches]);

	return matches;
};

export { useMedia };
