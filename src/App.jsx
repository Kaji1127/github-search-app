import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import './App.scss';
import User from './components/User/User';

const App = () => {
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
