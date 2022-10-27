import { useRouter } from "next/router";
import { HiOutlineShoppingCart } from "react-icons/hi";
import React from "react";

const LandingNav = () => {
	const router = useRouter();

	return (
		<nav className="sticky top-0 w-full flex-btw h-14 side-pad bg-[#43a047]">
			<div className="flexed pry-bg curp px-3.5 py-2 rounded-md text-white text-sm shadow-lg">
				SokoSQ
			</div>

			<div className="flexed  curp rounded-full h-10 w-10 text-white shadow-sm relative">
				<div className="absolute h-4 w-4 rounded-full right-0 top-1 flexed text-[10px] pry-bg text-white">
					0
				</div>
				<HiOutlineShoppingCart className="text-[22px]" />
			</div>
		</nav>
	);
};

export default LandingNav;
