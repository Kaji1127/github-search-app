import React, { useContext } from 'react';
import { GithubContext } from '../../../store/GithubContext';
import { ReactComponent as LocationIcon } from '../../../assets/icon-location.svg';
import { ReactComponent as BlogIcon } from '../../../assets/icon-website.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/icon-twitter.svg';
import { ReactComponent as CompanyIcon } from '../../../assets/icon-company.svg';
import './UserDetail.scss';

const UserDetail = () => {
	const githubCtx = useContext(GithubContext);

	const { location, blog, company, twitter_username } = githubCtx;

	const infoArr = [location, blog, twitter_username, company];
	console.log(infoArr);

	return (
		<div className="user-detail">
			<div className={`user-detail__inner ${!location && 'not-available'}`}>
				<LocationIcon />
				<p>{location ? location : 'Not Available'}</p>
			</div>

			<div className={`user-detail__inner ${!blog && 'not-available'}`}>
				<BlogIcon />
				<p>{blog ? blog : 'Not Available'}</p>
			</div>

			<div
				className={`user-detail__inner user-detail__twitter ${
					!twitter_username && 'not-available'
				}`}
			>
				<TwitterIcon />
				<p>{twitter_username ? twitter_username : 'Not Available'}</p>
			</div>

			<div className={`user-detail__inner ${!company && 'not-available'}`}>
				<CompanyIcon />
				<p>{company ? company : 'Not Available'}</p>
			</div>
		</div>
	);
};

export default UserDetail;
