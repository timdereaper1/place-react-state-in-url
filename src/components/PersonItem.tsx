import { Person } from '../types';

interface PersonItemProps {
	person: Person;
}

export default function PersonItem({ person: { name } }: PersonItemProps) {
	return <li className="person">{name}</li>;
}
