import { ListResponse, Person } from '../types';
import { getStarWarsInstance } from './apiFunctions';
import { createQueryParamsFromObject } from './url';
import { removeEmptyFieldsInObject } from './utilities';

export function getPeopleInStarWars(page?: number, search?: string) {
	const queryParam = createQueryParamsFromObject(removeEmptyFieldsInObject({ page, search }));
	return getStarWarsInstance<ListResponse<Person>>('/people/' + queryParam);
}
