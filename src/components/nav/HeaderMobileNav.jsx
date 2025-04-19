import classNames from 'classnames';
import React from 'react';

import '../../styles/headerMobile.css';

const HeaderMobileNav = ({ isActive, links, handleLinkClick, activeLink, handleChangeMobileMenu }) => {
	const handleClick = (num) => {
		handleLinkClick(num);
		handleChangeMobileMenu();
	};

	return (
		<div
			className={classNames('header-nav__mobile header-mobile', {
				_active: isActive,
			})}
		>
			<nav className="flex header-mobile__content">
				<ul className="flex flex-col">
					{links.map(({ title }, index) => (
						<li
							key={title}
							className={classNames('header-mobile__link', {
								_active: index === activeLink,
							})}
							onClick={() => handleClick(index)}
						>
							<a>{title}</a>
						</li>
					))}
				</ul>
			</nav>
			<div className="flex flex-col">
				<button className="header-account__link ">Створити профіль</button>
				<button className="button">Увійти</button>
			</div>
		</div>
	);
};

export default HeaderMobileNav;
