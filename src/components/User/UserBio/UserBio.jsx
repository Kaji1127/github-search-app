import React from 'react';
import { useContext } from 'react';
import { GithubContext } from '../../../store/GithubContext';
import './UserBio.scss';

const UserBio = () => {
	const githubCtx = useContext(GithubContext);
	const { githubDev } = githubCtx;
	const { bio } = githubDev;

	// console.log(typeof bio);
	return (
		<p className="biography">
			{bio === null ? 'This profile has no bio.' : bio}
		</p>
	);
};

export default UserBio;
