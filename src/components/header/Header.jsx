import React, { useState } from 'react';
import Container from '../container/Container';
import Logo from '../icons/Logo';
import classNames from 'classnames';
import HeaderNav from '../nav/HeaderNav';
import HeaderMobileNav from '../nav/HeaderMobileNav';
import { links } from '../../constants/headerConstants';
import '../../styles/header.css';

const Header = () => {
	const [mobileMenuActive, setMobileMenuActive] = useState(false);
	const [activeLink, setActiveLink] = useState(links.length - 1);

	const handleLinkClick = (num) => {
		setActiveLink(num);
	};

	const handleChangeMobileMenu = () => {
		setMobileMenuActive((prev) => !prev);
	};

	return (
		<header className="header">
			<Container>
				<div className="flex justify-between items-center header-content">
					<div className="flex header-left">
						<Logo />
						<HeaderNav links={links} handleLinkClick={handleLinkClick} activeLink={activeLink} />
					</div>
					<div className="header-account">
						<button className="header-account__link ">Створити профіль</button>
						<button className="button">Увійти</button>
					</div>
					<div
						className={classNames('burger', {
							_active: mobileMenuActive,
						})}
						onClick={handleChangeMobileMenu}
					>
						<div className="bar1"></div>
						<div className="bar2"></div>
						<div className="bar3"></div>
					</div>
					<HeaderMobileNav isActive={mobileMenuActive} links={links} handleLinkClick={handleLinkClick} activeLink={activeLink} handleChangeMobileMenu={handleChangeMobileMenu} />
				</div>
			</Container>
		</header>
	);
};

export default Header;
