import { ApiResponse } from '../types';

export async function getStarWarsInstance<T = unknown>(path: string): Promise<ApiResponse<T>> {
	try {
		const STAR_WARS_API_BASE_URL = 'https://swapi.dev/api';
		const response = await fetch(STAR_WARS_API_BASE_URL + path);
		const data = await response.json();
		return getApiResponseData<T>(data);
	} catch (error) {
		return getApiErrorResponse(error as Error);
	}
}

export function getApiErrorResponse(error: Error) {
	return { error: error.message, success: false, data: undefined };
}

export function getApiResponseData<T = unknown>(data: T) {
	return { error: undefined, success: true, data };
}
