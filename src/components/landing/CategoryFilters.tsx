import React from "react";

type Props = {
	categories: string[];
	selectedCategory: string;
	setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

const CategoryFilters = ({
	categories,
	selectedCategory,
	setSelectedCategory,
}: Props) => {
	return (
		<div className="mb-8 sticky top-14 z-40 pry-bg py-5 w-full flex items-center justify-start md:justify-around overflow-x-scroll scrollbar-hide">
			{categories?.map((item: string) => (
				<button
					key={item}
					onClick={() => setSelectedCategory(item)}
					className={`outline-none mr-4 md:mr-0 whitespace-nowrap border capitalize text-sm py-1.5 px-3 rounded-sm transition-colors duration-150 ${
						item === selectedCategory
							? "bg-white text-[#388e3c] font-medium border-[#388e3c] shadow-lg"
							: "border-white text-white"
					}`}>
					{item}
				</button>
			))}
		</div>
	);
};

export default CategoryFilters;
