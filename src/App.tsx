import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Recipe from "./pages/Recipe";
import Search from "./pages/Search";
import About from "./pages/About";
function App() {
	return (
		<div className="flex flex-col justify-between min-h-screen">
			<div>
				<Navbar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="search">
						<Route index element={<Search />} />
						<Route path=":recipeid" element={<Recipe />} />
					</Route>
				</Routes>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
