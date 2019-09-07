import React from 'react';

let initialImgNumber = 1;
const generatePath = (extension) => (`url("${process.env.PUBLIC_URL}/img/hubblePhotos/${initialImgNumber++}.${extension}")`);


const images = [
	{
		src: generatePath(`jpg`),
		title: "Lagoon Nebula (Visible-light View)",
		content: (
			<p>
				At the center of the photo, a monster young
				star 200,000 times brighter than our Sun is
				blasting powerful ultraviolet radiation and
				hurricane-like stellar winds, carving out a
				fantasy landscape of ridges, cavities, and
				mountains of gas and dust.
			</p>
		)
	},
	{
		src: generatePath(`jpg`),
		title: "Eagle Nebula",
		content: (
			<p>
				The Eagle Nebula pillars are bathed in the
				blistering ultraviolet light from a grouping
				of young, massive stars located off the top
				of the image. Streamers of gas can be seen
				bleeding off the pillars as the intense
				radiation heats and evaporates it into
				space. Denser regions of the pillars are
				shadowing material beneath them from the
				powerful radiation. Stars are being born
				deep inside the pillars, which are made of
				cold hydrogen gas laced with dust. The
				pillars are part of a small region of the
				Eagle Nebula, a vast star-forming region
				6,500 light-years from Earth.
			</p>
		)
	},
	{
		src: generatePath(`jpg`),
		title: "Bubble Nebula (NGC 7635)",
		content: (
			<p>
				For the 26th birthday of NASA's Hubble Space
				Telescope, astronomers are highlighting a
				Hubble image of an enormous bubble being
				blown into space by a super-hot, massive
				star. The Hubble image of the Bubble Nebula,
				or NGC 7635, was chosen to mark the 26th
				anniversary of the launch of Hubble into
				Earth orbit by the STS-31 space shuttle crew
				on April 24, 1990.
			</p>
		)
	},
	{
		src: generatePath(`jpg`),
		title: `Hubble Spots a Stunning Spiral`,
		content: (
			<p>
				Galaxies come in many shapes and sizes. One of the key galaxy types we see in the universe is the spiral galaxy,
				as demonstrated in an especially beautiful way by the subject of this Hubble Space Telescope image, NGC 2985.
				NGC 2985 lies over 70 million light-years from the solar system in the constellation of Ursa Major (the Great
				Bear).
			</p>
		)
	},
	{
		src: generatePath(`jpg`),
		title: `Hubble Celebrates 29th Anniversary with a Colorful Look at the Southern Crab Nebula`,
		content: (
			<p>
				In celebration of the 29th anniversary of the launch of NASA's Hubble Space Telescope, astronomers captured this
				festive, colorful look at the tentacled Southern Crab Nebula.
			</p>
		)
	},
	{
		src: generatePath(`png`),
		title: `Hubble Captures Dynamic Dying Star`,
		content: (
			<p>
				This Hubble image shows a dark, gloomy scene in the constellation of Gemini (the Twins). The subject of this
				image confused astronomers when it was first studied — rather than being classified as a single object, it was
				instead recorded as two objects, owing to its symmetrical lobed structure.
			</p>
		)
	}
];


export {images};
