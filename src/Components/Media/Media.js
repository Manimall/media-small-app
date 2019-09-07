import React from 'react';
import './Media.css';
import { useMedia } from "./UseMedia";

const Media = () => {
	const small = useMedia('(max-width: 600px)');
	const middle = useMedia('(min-width: 600px) and (max-width: 1300px)');
	const large = useMedia('(min-width: 1300px)');
	return (
		<div className="Media">
			<h2>Media</h2>
			<p>
				Small ? {small ? `yes, it's small` : `nope`}
			</p>
			<p>
				Middle ? {middle ? `yes, it's middle` : `nope`}
			</p>
			<p>
				Large ? {large ? `yes, it's large` : `nope`}
			</p>
		</div>
	)
};

export default Media;

