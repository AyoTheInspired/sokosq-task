import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useToolkit } from "../../../src";
import StarRatingComponent from "react-star-rating-component";

type Props = {
	product: ProductType;
};

const SingleProduct = ({ product }: Props) => {
	const { toastSuccess } = useToolkit();
	return (
		<div className="w-3/4 md:w-[42%] lg:w-[23.5%] flexed flex-col bg-white mb-10 rounded-md hover:scale-[1.03] curp transition-all p-3 h-[300px]">
			<div className="flexed p-3 h-full">
				<img
					src={product.image}
					alt={product.title}
					className="object-covers"
					width={100}
					height={120}
				/>
			</div>

			<div className="mt-auto flex-btw w-full text-sm">
				<p className="">{product?.title?.substring(0, 18)}...</p>
				<div>
					<FaCartPlus
						onClick={() =>
							toastSuccess(`${product.title} has been added to cart`)
						}
						className="text-2xl curp"
					/>
				</div>
			</div>
			{/* price & rating */}
			<div className="mt-1 flex-btw w-full">
				<p className="">$ {product?.price}</p>
				<div>
					<StarRatingComponent
						name={product.title}
						starCount={5}
						value={product.rating.rate}
					/>
				</div>
			</div>
			<div className="w-full flexed py-1.5 pry-bg text-white mt-2">Details</div>
		</div>
	);
};

export default SingleProduct;
