import { FaCartPlus } from "react-icons/fa";
import { LandingNav, Spinner, useProducts, useToolkit } from "../../src";

const SingleProduct = () => {
	const { router, useEffect, useState, toastSuccess } = useToolkit();
	const {
		getSingleProduct,
		singleLoading,
		singleProduct: product,
	} = useProducts();

	const productID = router?.query?.productId;

	useEffect(() => {
		getSingleProduct(productID);
	}, [productID]);

	return (
		<main className="pry-bg">
			<LandingNav />
			<section
				style={{
					minHeight: "calc(100vh - 56px)",
				}}
				className="w-full flexed side-pad py-10 lg:pya-20">
				{singleLoading ? (
					<Spinner text="Please wait" />
				) : (
					<div className="w-full md:w-[43%] lg:w-[45%] flexed flex-col space-y-7 py-8 px-4 bg-white rounded-md">
						<div className="my-5">
							<img
								src={product?.image}
								alt="cart-item"
								className="object-cover"
								width={220}
							/>
						</div>

						<div className="flex-btw w-full">
							<p className="m-0 pr-5">{product?.title}</p>
							<p className="m-0 whitespace-nowrap">$ {product?.price}</p>
						</div>

						<p className="text-center">{product?.description}</p>

						<div className="flex-btw w-max space-x-4">
							<p className="m-0 pry-bg text-white capitalize px-4 py-2 rounded-sm shadow-sm">
								{product?.category}
							</p>
							<FaCartPlus
								onClick={() =>
									toastSuccess(`${product?.title} has been added to cart`)
								}
								className="text-2xl curp"
							/>{" "}
						</div>
					</div>
				)}
			</section>
		</main>
	);
};

export default SingleProduct;
