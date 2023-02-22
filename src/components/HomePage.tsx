import React from "react";
import Carousel from "./Carousel/Carousel";
import { aroundTheWorldSlides, under30Slides } from "./Carousel/CarouselData";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";

const HomePage = (): JSX.Element => {
	interface Slides {
		id: number;
		url: string;
	}

	// const randomRecipes = (array) => {
	// 	let arrayCopy = array;
	// 	let randomToRender = [];
	// 	let counter = array.length;
	// 	console.log(counter);
	// 	for (let i = 0; i < 5; i++) {
	// 		let randomNum = Math.floor(Math.random() * counter);
	// 		console.log(randomNum);
	// 		randomToRender.push(arrayCopy.slice(randomNum, randomNum + 1));
	// 		arrayCopy.splice(randomNum, 1);
	// 		counter--;
	// 	}
	// 	console.log(arrayCopy);
	// 	console.log(randomToRender);
	// };

	// randomRecipes(under30Slides);

	return (
		<div className="">
			<div className=" min-h-[calc(100vh-14.3rem)] md:grid md:grid-cols-homemd xl:grid-cols-homexl ">
				<LeftImage />
				<div className="w-full flex justify-center md:items-center">
					<div className="flex px-3 sm:w-3/4 lg:w-full">
						<div className=" w-[300px] flex flex-col justify-center items-center gap-10 mb-10">
							<div>
								<h1 className="text-xl bg-main  py-3 px-3 mb-3 rounded-2xl text-center">
									Meals Under 30 Minutes
								</h1>
								<Carousel slides={under30Slides} />
							</div>
							<div>
								<h1 className="text-xl bg-main  py-3 px-3 mb-3 rounded-2xl text-center">
									From Around the World
								</h1>
								<Carousel slides={aroundTheWorldSlides} />
							</div>
						</div>
					</div>
				</div>
				<RightImage />
			</div>
		</div>
	);
};

export default HomePage;
