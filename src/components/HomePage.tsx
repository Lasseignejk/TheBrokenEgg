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
			<div className=" min-h-[calc(100vh-14.3rem)] md:grid md:grid-cols-homemd xl:grid-cols-homexl">
				<LeftImage />
				<div className="w-full flex flex-col justify-center items-center gap-5">
					<div className="bg-mobileBanner bg-contain h-40">
						<div className="flex flex-col justify-center items-center bg-overlay py-3 h-40">
							<h1 className="text-2xl text-center font-italic font-grandStand font-bold px-3 leading-relaxed">
								Because you can't make an omelet without breaking a few eggs
							</h1>
						</div>
					</div>
					<div className="flex  flex-col sm:w-3/4 md:w-full  items-center lg:items-start px-3">
						{/* this div controls the width of the carousel */}
						<div className=" w-[300px] md:w-[400px] flex flex-col justify-center items-center gap-10 mb-10 ">
							<div className="">
								<h1 className="text-xl px-3 mb-3 border-b-2 border-main">
									Dinner in 30
								</h1>
								<Carousel slides={under30Slides} />
							</div>
							<div>
								<h1 className="text-xl px-3 mb-3 border-b-2 border-main">
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
