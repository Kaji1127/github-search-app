import { createContext, useState } from 'react';
import data from '../data';

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
	const [githubDev, setGithubDev] = useState(data);
	return (
		<GithubContext.Provider value={githubDev}>
			{children}
		</GithubContext.Provider>
	);
};

export { GithubContext, GithubProvider };
