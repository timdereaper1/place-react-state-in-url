import React from 'react';

interface SearchInputProps {
	onChange: (name: string) => void;
	value: string;
}

export default function SearchInput({ onChange, value }: SearchInputProps) {
	function searchPersonByName(event: React.ChangeEvent<HTMLInputElement>) {
		onChange(event.target.value);
	}

	return (
		<input
			type="search"
			name="name"
			id="name"
			onChange={searchPersonByName}
			value={value}
			className="search-field"
			placeholder="Search by name..."
		/>
	);
}
