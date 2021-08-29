export interface Person {
	name: string;
	[key: string]: unknown;
}

export interface ListResponse<TResults> {
	count: number;
	next: string | null;
	previous: string | null;
	results: TResults[];
}

export interface ApiResponse<T> {
	error: string | undefined;
	success: boolean;
	data: T | undefined;
}
