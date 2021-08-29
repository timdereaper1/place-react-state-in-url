import { Person } from '../types';
import Loader from './Loader';
import PersonItem from './PersonItem';

interface PeopleListProps {
	people: Person[];
	loading: boolean;
}

export default function PeopleList({ people, loading }: PeopleListProps) {
	return (
		<ul className="people">
			<Loader active={loading} />
			{people.map((person) => (
				<PersonItem person={person} key={person.name} />
			))}
		</ul>
	);
}
