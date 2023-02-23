import React from "react";

interface Slides {
	id: number;
	url: string;
}

interface IndicatorsProps {
	slides: Slides[];
	currentIndex: number;
	switchIndex: (index: number) => void;
}

const CarouselIndicators = ({
	slides,
	currentIndex,
	switchIndex,
}: IndicatorsProps): JSX.Element => {
	return (
		<div className="carousel-indicators">
			{slides.map((_, index) => (
				<button
					className={`carousel-indicator-item ${
						currentIndex === index ? "active" : ""
					}`}
					onClick={(): void => switchIndex(index)}
					key={index}></button>
			))}
		</div>
	);
};

export default CarouselIndicators;
