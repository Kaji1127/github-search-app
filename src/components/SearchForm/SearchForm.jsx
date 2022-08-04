import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';
import { GithubContext } from '../../store/GithubContext';
import SearchButton from '../SearchButton/SearchButton';
import './SearchForm.scss';

const SearchForm = () => {
	const [user, setUser] = useState('');
	const githubCtx = useContext(GithubContext);
	const { searchGithubUser, error } = githubCtx;

	const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
	const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (user) {
			searchGithubUser(user);
			setUser('');
		}
	};
	return (
		<>
			<form
				className={`search-form ${error.show && 'error-wrapper'}`}
				onSubmit={onSubmitHandler}
			>
				<SearchIcon />
				<input
					type="text"
					placeholder="Search GitHub username…"
					value={user}
					onChange={(e) => setUser(e.target.value)}
				/>
				{isTablet && error.show && <p>{error.msg}</p>}
				<SearchButton />
			</form>
			{isMobile && error.show && (
				<p className="mobile-error-msg">{error.msg}</p>
			)}
		</>
	);
};

export default SearchForm;
