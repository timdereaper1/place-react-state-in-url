interface LoaderProps {
	active: boolean;
}

export default function Loader({ active }: LoaderProps) {
	if (!active) return null;
	return <div className="loader"></div>;
}
