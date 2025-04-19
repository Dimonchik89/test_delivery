import React from 'react';
import CountryItem from '../Country/CountryItem';
import Arrow from '../icons/Arrow';
import { v4 as uuidv4 } from 'uuid';

const InfoCountryList = ({ countriesList, countryCount, showMore }) => {
	return (
		<div className="info-countries">
			<h3 className="title">Обслуговуємо країни</h3>

			<ul className="info-countries__list">
				{countriesList.slice(0, countryCount).map((item, index) => (
					<CountryItem key={uuidv4()} {...item} />
				))}
				{countryCount < countriesList.length ? (
					<button className="button-link" onClick={showMore}>
						<p>Усі країни</p>
						<Arrow />
					</button>
				) : null}
			</ul>
		</div>
	);
};

export default InfoCountryList;
