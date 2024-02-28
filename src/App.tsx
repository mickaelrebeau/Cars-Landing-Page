import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import "./App.css";
import { background } from "./assets/videos";
import { Gallery } from "./components/Gallery";

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
				<div className="w-full fixed bg-black/25 backdrop-blur-sm">
					<Header />
				</div>
				<Home />
				<Gallery />
			</div>
		</div>
	);
}

export default App;
