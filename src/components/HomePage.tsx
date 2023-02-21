import React from "react";

const HomePage = (): JSX.Element => {
	return (
		<div className="h-[calc(100vh-14.3rem)] relative">
			<div className="h-full md:grid md:grid-cols-homemd xl:grid-cols-homexl ">
				<div className="relative h-full overflow-hidden hidden md:block">
					<img src="../../BrokenEggHomeLeft.png" alt="" className="w-full" />
					<img src="../../BrokenEggHomeLeft.png" alt="" className="w-full" />
					<img src="../../BrokenEggHomeLeft.png" alt="" className="w-full" />
				</div>
				<div className="w-full flex justify-center md:items-center">
					<div className="flex flex-col items-center mt-3 px-3 gap-10 sm:w-3/4"></div>
				</div>
				<div className="relative h-full overflow-hidden hidden md:block">
					<img src="../../BrokenEggHomeRight.png" alt="" className="w-full" />
					<img src="../../BrokenEggHomeRight.png" alt="" className="w-full" />
					<img src="../../BrokenEggHomeRight.png" alt="" className="w-full" />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
