import React from 'react';
import classNames from 'classnames';

const HeaderNav = ({ links, handleLinkClick, activeLink }) => {
	return (
		<nav className="flex items-center">
			<ul className="header-nav">
				{links.map(({ title }, index) => (
					<li
						key={title}
						className={classNames('header-nav__link', {
							_active: index === activeLink,
						})}
						onClick={() => handleLinkClick(index)}
					>
						<a href="">{title}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default HeaderNav;
