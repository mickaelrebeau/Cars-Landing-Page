import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import "./App.css";
import { background } from "./assets/videos";
import { Gallery } from "./components/Gallery";
import { Presentation } from "./components/Presentation";
import { Zoom } from "./components/Zoom";
import { History } from "./components/History";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<Routes>
				<Route path="/" element={<Layout />} />
			</Routes>
		</ThemeProvider>
	);
}

function Layout() {
	return (
		<div className="w-full h-screen relative">
			<video
				autoPlay
				loop
				muted
				className="h-screen w-full object-cover fixed z-0"
			>
				<source src={background} type="video/mp4" />
			</video>
			<div className="w-full h-screen relative z-10">
				<div className="top-0 left-1/2 -translate-x-1/2 mt-8 w-[80%] fixed bg-black/25 backdrop-blur-md rounded-full z-10 overflow-hidden">
					<Header />
				</div>
				<Home />
				<Presentation />
				<Gallery />
				<Zoom />
				<History />
			</div>
		</div>
	);
}

export default App;
