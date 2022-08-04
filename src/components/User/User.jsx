import React, { useContext } from 'react';
import UserBasicInfo from './UserBasicInfo/UserBasicInfo';
import UserBio from './UserBio/UserBio';
import UserStatus from './UserStatus/UserStatus';
import UserDetail from './UserDetail/UserDetail';
import './User.scss';
import UserAvatar from './UserAvatar/UserAvatar';
import { GithubContext } from '../../store/GithubContext';
import { ThreeDots } from 'react-loader-spinner';

const User = () => {
	const githubCtx = useContext(GithubContext);
	const { isLoading } = githubCtx;

	console.log(isLoading);

	if (isLoading) {
		return (
			<section className={`user ${isLoading && 'loading-wrapper'}`}>
				<ThreeDots color="hsl(212, 100%, 50%)" height={80} width={80} />
			</section>
		);
	}

	return (
		<section className="user">
			<UserAvatar />
			<UserBasicInfo />
			<UserBio />
			<UserStatus />
			<UserDetail />
		</section>
	);
};

export default User;
