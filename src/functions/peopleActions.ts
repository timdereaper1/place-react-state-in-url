import { ApiResponse, ListResponse, Person } from '../types';

export type ReducerActions =
	| { type: 'FETCH_PEOPLE' }
	| {
			type: 'FINISH_FETCHING_PEOPLE';
			payload: ListResponse<Person> | undefined;
	  }
	| {
			type: 'SEARCH_FOR_A_PERSON_IN_STAR_WARS';
			payload: { search: string };
	  }
	| {
			type: 'FOUND_MATCHING_PEOPLE_IN_STAR_WARS';
			payload: ListResponse<Person> | undefined;
	  }
	| {
			type: 'MOVE_TO_NEXT_PAGE';
			payload: { page: number };
	  };

export function startFetchingPeopleInStarWars(): ReducerActions {
	return { type: 'FETCH_PEOPLE' };
}

export function storeFetchedPeopleInStarWars(
	response: ApiResponse<ListResponse<Person>>
): ReducerActions {
	return { type: 'FINISH_FETCHING_PEOPLE', payload: response.data };
}

export function startSearchingForPerson(search: string): ReducerActions {
	return { type: 'SEARCH_FOR_A_PERSON_IN_STAR_WARS', payload: { search } };
}

export function moveToNextPage(page: number): ReducerActions {
	return { type: 'MOVE_TO_NEXT_PAGE', payload: { page } };
}
