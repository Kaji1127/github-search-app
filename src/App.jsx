// import { useContext } from 'react';
// import { GithubContext } from './store/GithubContext';
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import './App.scss';
import User from './components/User/User';

const App = () => {
	// const githubCtx = useContext(GithubContext);
	// const { created_at } = githubCtx;

	// const date = new Date(created_at);
	// const joinedDate = date.toLocaleString('en-GB', {
	// 	year: 'numeric',
	// 	month: 'short',
	// 	day: 'numeric',
	// });

	return (
		<div className="container">
			<Header />
			<SearchForm />
			<main>
				<User />
			</main>
		</div>
	);
};

export default App;
