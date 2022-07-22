import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';
import SearchButton from '../SearchButton/SearchButton';
import './SearchForm.scss';

const SearchForm = () => {
	const onSubmitHandler = (e) => {
		e.preventDefault();
	};
	return (
		<form className="search-form" onSubmit={onSubmitHandler}>
			<SearchIcon />
			<input type="text" placeholder="Search GitHub username…" />
			<SearchButton />
		</form>
	);
};

export default SearchForm;
