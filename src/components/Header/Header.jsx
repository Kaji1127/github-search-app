import React from 'react';
import ToggleThemeButton from '../ToggleThemeButton/ToggleThemeButton';
import './Header.scss';

const Header = () => {
	return (
		<header className="header">
			<h1>devfinder</h1>
			<ToggleThemeButton />
		</header>
	);
};

export default Header;
