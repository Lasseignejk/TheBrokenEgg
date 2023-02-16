import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Recipe from "./components/Recipe";
import Search from "./components/Search";
function App() {
	return (
		<div>
			<div>
				<Navbar />

				<Routes>
					<Route path="/" element={<Home />} />
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
