import React from 'react';
import { useContext } from 'react';
import { GithubContext } from '../../../store/GithubContext';
import './UserStatus.scss';

const UserStatus = () => {
	const githubCtx = useContext(GithubContext);
	const { githubDev } = githubCtx;
	const { public_repos, following, followers } = githubDev;

	return (
		<div className="status">
			<div className="status__content">
				<p>Repos</p>
				<h3>{public_repos}</h3>
			</div>
			<div className="status__content">
				<p>Followers</p>
				<h3>{followers}</h3>
			</div>
			<div className="status__content">
				<p>Following</p>
				<h3>{following}</h3>
			</div>
		</div>
	);
};

export default UserStatus;
