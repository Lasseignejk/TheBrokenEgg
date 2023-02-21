import React from "react";

const HomePage = (): JSX.Element => {
	return (
		<div className="h-[calc(100vh-14.3rem)] relative">
			<div className="h-full hidden md:block">
				<div className="relative h-full overflow-hidden">
					<img
						src="../../BrokenEgg1.png"
						alt=""
						className="h-[120%] overflow-hidden"
					/>
				</div>
				<div className="absolute top-0 left-0">
					<h1>The Broken Egg</h1>
				</div>
				<div></div>
			</div>
			<div className="h-full md:hidden">Hidden on middle</div>
		</div>
	);
};

export default HomePage;
