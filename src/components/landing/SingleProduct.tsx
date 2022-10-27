import React from "react";

type Props = {
	product: ProductType;
};

const SingleProduct = ({ product }: Props) => {
	return (
		<div className="w-full md:w-[42%] lg:w-1/4 flexed bg-green-400">
			SingleProduct
		</div>
	);
};

export default SingleProduct;
