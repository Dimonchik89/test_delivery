import { useState } from 'react';
import Calendar from 'react-calendar';
import Arrow from '../icons/Arrow';
import Plus from '../icons/Plus';

import 'react-calendar/dist/Calendar.css';
import '../../styles/calendar.css';

const InfoCalendar = () => {
	const [value, onChange] = useState(new Date());

	return (
		<div className="flex flex-col info-calendar">
			<h3 className="title">Календар поїздок</h3>
			<div className="info-calendar__wrapper">
				<button className="button-outline">
					<Plus />
					<p>Купити квиток</p>
				</button>
				<Calendar onChange={onChange} value={value} className={'calendar'} nextLabel={<Arrow style={{ transform: 'rotate(-90deg)' }} />} next2Label={null} prev2Label={null} prevLabel={<Arrow style={{ transform: 'rotate(90deg)' }} />} />
			</div>
		</div>
	);
};

export default InfoCalendar;
