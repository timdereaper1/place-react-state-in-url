import React from 'react';
import {
	moveToNextPage,
	startFetchingPeopleInStarWars,
	startSearchingForPerson,
	storeFetchedPeopleInStarWars,
} from '../functions/peopleActions';
import { initialState, peopleInStarWarsReducer } from '../functions/peopleReducer';
import { getPeopleInStarWars } from '../functions/starWarsApi';
import { createQueryParamsFromObject, extractObjectInURL } from '../functions/url';
import { removeEmptyFieldsInObject } from '../functions/utilities';

export default function useStarWarsPeople() {
	const [state, dispatch] = React.useReducer(peopleInStarWarsReducer, initialState, (state) => {
		const args = extractObjectInURL<{ page: number; search: string }>(window.location.href);
		if (!args) return state;
		return { ...state, ...args };
	});
	const { page, search } = state;

	React.useEffect(() => {
		async function fetchPeopleInStarWarsToState(page: number, searchQuery?: string) {
			dispatch(startFetchingPeopleInStarWars());
			const response = await getPeopleInStarWars(page, searchQuery);
			dispatch(storeFetchedPeopleInStarWars(response));
		}
		fetchPeopleInStarWarsToState(page, search);
	}, [page, search]);

	React.useEffect(() => {
		const queryParam = createQueryParamsFromObject(removeEmptyFieldsInObject({ page, search }));
		window.history.replaceState({}, '', queryParam);
	}, [page, search]);

	async function fetchPeopleInNextPage(activePage: number) {
		dispatch(moveToNextPage(activePage));
	}

	function fetchPeopleWhichMatchSearchQuery(searchQuery: string) {
		dispatch(startSearchingForPerson(searchQuery));
	}

	return { ...state, fetchPeopleWhichMatchSearchQuery, fetchPeopleInNextPage };
}
