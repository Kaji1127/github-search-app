import { createContext, useState } from 'react';
import axios from 'axios';
import data from '../data';

const GithubContext = createContext();
const baseURL = 'https://api.github.com/users';

const GithubProvider = ({ children }) => {
	const [githubDev, setGithubDev] = useState(data);
	const [error, setError] = useState({ show: false, msg: '' });
	const [isLoading, setIsLoading] = useState(false);

	const toggleError = (show = false, msg = '') => {
		setError({ show, msg });
	};

	const searchGithubUser = async (user) => {
		toggleError();
		setIsLoading(true);

		const res = await axios
			.get(`${baseURL}/${user}`)
			.catch((err) => console.log(err));
		console.log(res);

		if (res) {
			setGithubDev(res.data);
		} else {
			toggleError(true, 'No results');
		}

		setIsLoading(false);
	};
	return (
		<GithubContext.Provider
			value={{ githubDev, searchGithubUser, error, isLoading }}
		>
			{children}
		</GithubContext.Provider>
	);
};

export { GithubContext, GithubProvider };
