import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './reset.scss';
import './index.scss';
import { GithubProvider } from './store/GithubContext';
import { ThemeProvider } from './store/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider>
			<GithubProvider>
				<App />
			</GithubProvider>
		</ThemeProvider>
	</React.StrictMode>
);
