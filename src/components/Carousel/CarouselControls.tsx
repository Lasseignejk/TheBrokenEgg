import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";

interface CarouselControlsProps {
	prev: () => void;
	next: () => void;
}

const CarouselControls = ({
	prev,
	next,
}: CarouselControlsProps): JSX.Element => {
	return (
		<div>
			<button className="carousel-control left" onClick={prev}>
				<FontAwesomeIcon icon={faLessThan} />
			</button>
			<button className="carousel-control right" onClick={next}>
				<FontAwesomeIcon icon={faGreaterThan} />
			</button>
		</div>
	);
};

export default CarouselControls;
