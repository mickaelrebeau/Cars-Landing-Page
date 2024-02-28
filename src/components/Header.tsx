export const Header = () => {
	return (
		<nav className="mx-auto py-8 w-[80%] flex justify-between">
			<h1 className="text-3xl font-bold">Vintage Cars</h1>
			<ul className="flex gap-4">
				<li className="font-bold">
					<a href="#Gallery">Gallery</a>
				</li>
				<li className="font-bold">Section</li>
				<li className="font-bold">Section</li>
				<li className="font-bold">Section</li>
				<li className="font-bold">Section</li>
			</ul>
		</nav>
	);
};
