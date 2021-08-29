import { Person } from '../types';
import { ReducerActions } from './peopleActions';

interface ReducerState {
	count: number;
	people: Person[];
	loading: 'none' | 'searching' | 'fetching';
	page: number;
	search: string;
}

export const initialState: ReducerState = {
	count: 0,
	people: [],
	loading: 'none',
	page: 1,
	search: '',
};

export function peopleInStarWarsReducer(state: ReducerState, action: ReducerActions): ReducerState {
	switch (action.type) {
		case 'FETCH_PEOPLE':
			return { ...state, loading: 'fetching' };
		case 'FINISH_FETCHING_PEOPLE':
			return {
				...state,
				loading: 'none',
				people: action.payload?.results ?? [],
				count: action.payload?.count ?? state.count,
			};
		case 'SEARCH_FOR_A_PERSON_IN_STAR_WARS':
			return {
				...state,
				loading: 'searching',
				search: action.payload.search,
				page: 1,
			};
		case 'MOVE_TO_NEXT_PAGE':
			return { ...state, ...action.payload };
		default:
			return state;
	}
}
