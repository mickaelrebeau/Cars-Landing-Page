import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<nav className="mx-auto py-6 w-[90%] flex items-center justify-between">
			<h1 className="text-3xl font-bold font-amiri">
				<Link to="/">Vintage Cars</Link>
			</h1>
			<ul className="flex gap-12 font-raleway">
				<li className="font-semibold">
					<a href="#Presentation">Presentation</a>
				</li>
				<li className="font-semibold">
					<a href="#Gallery">Gallery</a>
				</li>
				<li className="font-semibold">
					<a href="#Cobra">Cobra</a>
				</li>
				<li className="font-semibold">Section</li>
				<li className="font-semibold">Section</li>
			</ul>
		</nav>
	);
};
