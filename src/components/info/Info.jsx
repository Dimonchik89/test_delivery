import React, { useState } from 'react';
import Container from '../container/Container';
import InfoLeftTextBlock from './InfoLeftTextBlock';
import InfoLeftImgBlock from './InfoLeftImgBlock';
import InfoCountryList from './InfoCountryList';
import InfoCalendar from './InfoCalendar';
import { countriesList } from '../../constants/infoConstants';
import '../../styles/info.css';

const Info = () => {
	const [countryCount, setCountryCountList] = useState(5);

	const showMore = () => {
		setCountryCountList(countriesList.length);
	};

	return (
		<div className="info">
			<Container>
				<div className="info-wrapper">
					<div className="info-content">
						<InfoLeftTextBlock />
						<InfoLeftImgBlock />
					</div>

					<div className="info-official">
						<InfoCountryList countriesList={countriesList} countryCount={countryCount} showMore={showMore} />
						<InfoCalendar />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Info;
