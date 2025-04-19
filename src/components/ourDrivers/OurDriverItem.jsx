import React, { useEffect, useState } from 'react';
import Instagram from '../icons/Instagram';
import Linkedin from '../icons/Linkedin';

const OurDriverItem = ({ name, workExperience, url }) => {
	const [experienceText, setExperienceText] = useState('');
	const imgUrl = url ? url : '/user/Avatar.jpg';

	useEffect(() => {
		if (workExperience === 1) {
			setExperienceText(`${workExperience} рік`);
		} else if (workExperience > 1 && workExperience < 5) {
			setExperienceText(`${workExperience} роки`);
		} else {
			setExperienceText(`${workExperience} років`);
		}
	}, [workExperience]);

	return (
		<li key={name} className="flex flex-col items-center driver-item">
			<img src={imgUrl} alt={name} className="driver-image" />
			<div>
				<h4 className="driver-title">{name}</h4>
				<span className="driver-text">Досвід роботи: {experienceText}</span>
			</div>

			<ul className="flex driver-social">
				<li>
					<a href="">
						{' '}
						<Instagram />
					</a>
				</li>
				<li>
					<a href="">
						{' '}
						<Linkedin />
					</a>
				</li>
			</ul>
		</li>
	);
};

export default OurDriverItem;
