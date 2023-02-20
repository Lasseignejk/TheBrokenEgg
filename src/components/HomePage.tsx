import React from "react";
import { Carousel, CarouselItem } from "./Carousel";

const items = Array.from({ length: 10 }).map((_, i) => ({
	id: i,
	src: `https://picsum.photos/500?idx=${i}`,
}));

const HomePage = (): JSX.Element => {
	return (
		<div>
			<h2 className="text-xl pl-3">Popular Recipes</h2>
			<div className="w-150px">
				<Carousel
					items={items}
					renderItem={({ item, isSnapPoint }) => (
						<CarouselItem key={item.id} isSnapPoint={isSnapPoint}>
							<img src={item.src} className="" alt="" />
						</CarouselItem>
					)}
				/>
			</div>
		</div>
	);
};

export default HomePage;
