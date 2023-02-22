import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (): JSX.Element => {
	const showNavbar = (): void => {
		const navMenu = document.querySelector(".nav-menu") as HTMLDivElement;
		const hamburger = document.querySelector(".hamburger") as HTMLDivElement;
		navMenu.classList.toggle("active");
		hamburger.classList.toggle("active");
	};

	return (
		<nav className="navbar h-20 flex justify-between items-center px-3 relative text-main z-10">
			<h1 className="text-3xl font-grandStand text-main font-[700] pl-3">
				<Link to={"/"}>The Broken Egg</Link>
			</h1>

			<ul
				className="nav-menu w-full fixed flex flex-col py-8 transition-all duration-[0.3s] ease-in-out text-center justify-between items-center gap-5 text-text bg-[#ffd982] top-[70px] left-[-100%] md:static md:flex-row md:w-96 md:text-left md:transition-none md:bg-background md:py-3"
				onClick={() => showNavbar()}>
				<li className="nav-item">
					<Link
						to={"/"}
						className="transition-colors ease-in duration-75 hover:text-main text-2xl font-bold md:text-xl">
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link
						to={"/about"}
						className="transition-colors ease-in duration-75 hover:text-main text-2xl font-bold md:text-xl">
						About
					</Link>
				</li>
				<li className="nav-text">
					<Link
						to={"/search"}
						className="transition-colors ease-in duration-75 hover:text-main text-2xl font-bold md:text-xl">
						Search Recipes
					</Link>
				</li>
			</ul>
			<div
				className="hamburger md:hidden cursor-pointer"
				onClick={() => showNavbar()}>
				<span className="bar block w-[25px] h-[3px] my-[5px] mx-auto transition-all duration-[0.3s] ease-in-out bg-text"></span>
				<span className="bar block w-[25px] h-[3px] my-[5px] mx-auto transition-all duration-[0.3s] ease-in-out bg-text"></span>
				<span className="bar block w-[25px] h-[3px] my-[5px] mx-auto transition-all duration-[0.3s] ease-in-out bg-text"></span>
			</div>
		</nav>
	);
};

export default Navbar;
