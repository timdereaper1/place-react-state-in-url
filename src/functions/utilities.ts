export function convertStringToPrimitiveValue(value: string) {
	try {
		const primitiveValue = JSON.parse(value);
		return primitiveValue;
	} catch (error) {
		return value;
	}
}

export function removeEmptyFieldsInObject(obj: Record<string, unknown>) {
	return Object.keys(obj).reduce(
		(acc, key) => (obj[key] ? { ...acc, [key]: obj[key] } : acc),
		{}
	);
}
