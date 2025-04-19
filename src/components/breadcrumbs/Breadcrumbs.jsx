import React from 'react';
import classNames from 'classnames';
import { breadcrumbs } from '../../constants/breadcrumbsConstants';

import '../../styles/breadcrumbs.css';

const Breadcrumbs = () => {
	return (
		<div>
			<ul className="breadcrumbs-list">
				{breadcrumbs.map(({ title }, index) => (
					<li
						key={title}
						className={classNames('breadcrumbs-link', {
							_active: index === breadcrumbs.length - 1,
						})}
					>
						<a href="">{title}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Breadcrumbs;
