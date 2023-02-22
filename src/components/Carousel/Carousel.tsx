import React, { useRef } from "react";
import { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";
import CarouselControls from "./CarouselControls";
import CarouselIndicators from "./CarouselIndicators";
import "./Carousel.css";

interface Slides {
	id: number;
	url: string;
}
interface CarouselProps {
	slides: Slides[];
}

const Carousel = ({ slides }: CarouselProps): JSX.Element => {
	const [currentSlide, setCurrentSlide] = useState<number>(0);
	const slideInterval = useRef();

	const prev = (): void => {
		startSlideTimer();
		const index = currentSlide > 0 ? currentSlide - 1 : slides?.length - 1;
		setCurrentSlide(index);
	};
	const next = (): void => {
		startSlideTimer();
		const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
		setCurrentSlide(index);
	};

	const switchIndex = (index: number): void => {
		startSlideTimer();
		setCurrentSlide(index);
	};

	const startSlideTimer = (): void => {
		stopSlideTimer();
		slideInterval.current = setInterval((): void => {
			setCurrentSlide((currentSlide: number) =>
				currentSlide < slides.length - 1 ? currentSlide + 1 : 0
			);
		}, 3000);
	};

	const stopSlideTimer = (): void => {
		if (slideInterval.current) {
			clearInterval(slideInterval.current);
		}
	};

	useEffect(() => {
		startSlideTimer();

		return () => stopSlideTimer();
	}, []);

	return (
		<div className="carousel h-[200px]">
			<div
				className="carousel-inner"
				style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
				{slides.map(
					(singular: Slides): JSX.Element => (
						<CarouselItem
							{...singular}
							stopSlide={stopSlideTimer}
							startSlide={startSlideTimer}
						/>
					)
				)}
			</div>

			<CarouselIndicators
				slides={slides}
				currentIndex={currentSlide}
				switchIndex={switchIndex}
			/>

			<CarouselControls prev={prev} next={next} />
		</div>
	);
};

export default Carousel;
