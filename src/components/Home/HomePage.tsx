import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import { aroundTheWorldSlides, under30Slides } from "../Carousel/CarouselData";
import { featuredRecipe } from "./HomeData";
import HomeFeaturedRecipe from "./HomeFeaturedRecipe";
import LeftImage from "../LeftImage";
import RightImage from "../RightImage";
import { useDocumentTitle } from "../../util/hooks";

const HomePage = (): JSX.Element => {
	useDocumentTitle("The Broken Egg | Home");
	return (
		<div className="">
			<div className=" min-h-[calc(100vh-14.3rem)] lg:grid  lg:grid-cols-homelg xl:grid-cols-homexl">
				<LeftImage />
				<div className="w-full flex flex-col justify-center items-center md:justify-start gap-5 xl:gap-10">
					<div className="bg-mobileBanner bg-contain h-40 lg:h-28 md:w-full lg:rounded-2xl">
						<div className="flex justify-center items-center bg-overlay py-3 h-40 lg:bg-background lg:h-28 lg:rounded-2xl">
							<h1 className="text-2xl text-center font-grandStand font-bold px-3 leading-relaxed lg:text-3xl">
								Because you can't make an omelet without breaking a few eggs
							</h1>
						</div>
					</div>
					<div className="flex flex-col w-full items-center gap-10 md:flex-row md:justify-evenly xl:flex-row xl:justify-evenly">
						{/* this div controls the width of the carousel */}
						<div className=" w-[300px] xl:w-[400px] flex flex-col justify-center items-center gap-10">
							<div className="">
								<h1 className="text-2xl mb-3 border-b-2 border-main">
									Dinner in 30 or Less
								</h1>

								<Carousel slides={under30Slides} />
							</div>
						</div>

						<div className=" w-[300px] xl:w-[400px] flex flex-col justify-center items-center gap-10 mb-5 md:mb-0 ">
							<div>
								<h1 className="text-2xl mb-3 border-b-2 border-main">
									From Around the World
								</h1>
								<Carousel slides={aroundTheWorldSlides} />
							</div>
						</div>
					</div>

					<div className="w-[300px] md:w-1/2">
						<h1 className="text-2xl mb-3 border-b-2 border-main">
							Today's Featured Recipe
						</h1>
						<div>
							<HomeFeaturedRecipe {...featuredRecipe} />
						</div>
					</div>

					<div className="bg-mobileBanner bg-contain h-40 w-full lg:bg-none">
						<div className="flex flex-col justify-center items-center bg-overlay py-3 h-40 lg:bg-background">
							<Link
								to={"/search"}
								className="hover:text-main ease-in duration-200 lg:hover:scale-110">
								<h1 className="text-2xl text-center font-italic font-grandStand font-bold px-3 leading-relaxed">
									Click here to browse all of our recipes
								</h1>
							</Link>
						</div>
					</div>
				</div>
				<RightImage />
			</div>
		</div>
	);
};

export default HomePage;
