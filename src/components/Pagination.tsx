interface PaginationProps {
	count: number;
	onChange: (page: number) => void;
	activePage: number;
}

const RESULTS_PER_PAGE = 10;

export default function Pagination({ count, activePage, onChange }: PaginationProps) {
	if (count < RESULTS_PER_PAGE) return null;
	const totalPages = Math.ceil(count / RESULTS_PER_PAGE);
	const pages = Array.from({ length: totalPages });
	return (
		<ul className="pages">
			{pages.map((_, idx) => {
				const page = idx + 1;
				const isPageCurrentlySelected = page === activePage;
				return (
					<li
						className={`pages__page ${
							isPageCurrentlySelected ? 'pages__page--active' : ''
						}`}
						onClick={() => onChange(page)}
						key={page}
					>
						{idx + 1}
					</li>
				);
			})}
		</ul>
	);
}
