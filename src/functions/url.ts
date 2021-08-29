import { convertStringToPrimitiveValue } from './utilities';

export function createQueryParamsFromObject(obj: Record<string, unknown>) {
	return Object.keys(obj).reduce<string>(
		(acc, key, idx, keys) => acc + `${key}=${obj[key]}${idx === keys.length - 1 ? '' : '&'}`,
		'?'
	);
}

export function getObjectFromURLQueryParams<T = Record<string, unknown>>(queryParam: string) {
	const sanitizedQueryParam = queryParam.replace('?', '');
	const stringifiedKeyValuePairs = sanitizedQueryParam.split('&');
	return stringifiedKeyValuePairs.reduce<T>((acc, stringifiedKVPair) => {
		const [key, value] = stringifiedKVPair.split('=');
		return { ...acc, [key]: convertStringToPrimitiveValue(value) };
	}, {} as T);
}

export function extractObjectInURL<T>(url: string): T | undefined {
	try {
		const queryParam = new URL(url).search;
		if (!queryParam) return undefined;
		return getObjectFromURLQueryParams<T>(queryParam);
	} catch (error) {
		return undefined;
	}
}
