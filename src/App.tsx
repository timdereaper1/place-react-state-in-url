import Pagination from './components/Pagination';
import PeopleList from './components/PeopleList';
import SearchInput from './components/SearchInput';
import useStarWarsPeople from './hooks/useStarWarsPeople';

export default function App() {
	const {
		people,
		page,
		count,
		fetchPeopleInNextPage,
		loading,
		search,
		fetchPeopleWhichMatchSearchQuery,
	} = useStarWarsPeople();

	return (
		<div className="App">
			<SearchInput value={search} onChange={fetchPeopleWhichMatchSearchQuery} />
			<PeopleList people={people} loading={loading !== 'none'} />
			<Pagination count={count} activePage={page} onChange={fetchPeopleInNextPage} />
		</div>
	);
}
