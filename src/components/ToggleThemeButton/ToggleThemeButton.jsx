import React from 'react';
import { ReactComponent as MoonIcon } from '../../assets/icon-moon.svg';
import './ToggleThemeButton.scss';

const ToggleThemeButton = () => (
	<button type="button" className="theme-button">
		<span>dark</span>
		<MoonIcon />
	</button>
);

export default ToggleThemeButton;
