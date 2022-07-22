import React from 'react';
import UserBasicInfo from './UserBasicInfo/UserBasicInfo';
import UserBio from './UserBio/UserBio';
import UserStatus from './UserStatus/UserStatus';
import UserDetail from './UserDetail/UserDetail';
import './User.scss';
import UserAvatar from './UserAvatar/UserAvatar';

const User = () => {
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
