import React, { useContext } from 'react';
import { GithubContext } from '../../../store/GithubContext';
import './UserAvatar.scss';

const UserAvatar = () => {
	const githubCtx = useContext(GithubContext);
	const { githubDev } = githubCtx;
	const { avatar_url, name } = githubDev;

	return <img src={avatar_url} alt={name} />;
};

export default UserAvatar;
