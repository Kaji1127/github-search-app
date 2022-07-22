import React, { useContext } from 'react';
import { GithubContext } from '../../../store/GithubContext';
import './UserBasicInfo.scss';

const UserBasicInfo = () => {
	const githubCtx = useContext(GithubContext);
	const { name, login, html_url, created_at } = githubCtx;

	const date = new Date(created_at);
	const joinedDate = date.toLocaleString('en-GB', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		timeZone: 'UTC',
	});
	// console.log(joinedDate);

	return (
		<div className="user-basic">
			<div className="user-basic__content">
				<div className="user-basic__name">
					<h2>{name}</h2>
					<a href={html_url}>@{login}</a>
				</div>
				<p>Joined {joinedDate}</p>
			</div>
		</div>
	);
};

export default UserBasicInfo;
