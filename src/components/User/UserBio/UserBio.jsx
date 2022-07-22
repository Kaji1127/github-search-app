import React from 'react';
import { useContext } from 'react';
import { GithubContext } from '../../../store/GithubContext';
import './UserBio.scss';

const UserBio = () => {
	const githubCtx = useContext(GithubContext);
	const { bio } = githubCtx;

	return (
		<p className="biography">
			{bio !== null ? { bio } : 'This profile has no bio.'}
		</p>
	);
};

export default UserBio;
