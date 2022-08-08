import React, { useContext, useState, useEffect } from 'react';
import { ReactComponent as MoonIcon } from '../../assets/icon-moon.svg';
import ThemeContext from '../../store/ThemeContext';
import './ToggleThemeButton.scss';

const ToggleThemeButton = () => {
	const themeCtx = useContext(ThemeContext);
	const theme = themeCtx.state.theme;

	const [appTheme, setAppTheme] = useState(theme);

	useEffect(() => {
		document.documentElement.className = appTheme;
	}, [appTheme]);

	const toggleThemeHandler = () => {
		if (theme === 'dark-theme') {
			themeCtx.dispatch({ type: 'LIGHT_THEME' });
			document.documentElement.className = setAppTheme('light-theme');
		} else {
			themeCtx.dispatch({ type: 'DARK_THEME' });
			document.documentElement.className = setAppTheme('dark-theme');
		}
	};

	return (
		<button type="button" className="theme-button" onClick={toggleThemeHandler}>
			<span>{appTheme === 'light-theme' ? 'dark' : 'light'}</span>
			<MoonIcon />
		</button>
	);
};

export default ToggleThemeButton;
