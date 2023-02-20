import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar/Navbar";
import RecipePage from "./components/Recipe/RecipePage";
import SearchPage from "./components/Search/SearchPage";
import AboutPage from "./components/AboutPage";
import ErrorPage from "./components/ErrorPage";
function App() {
	return (
		<div className="flex flex-col justify-between min-h-screen">
			<div>
				<Navbar />

				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="search">
						<Route index element={<SearchPage />} />
						<Route path=":recipeid" element={<RecipePage />} />
					</Route>
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
