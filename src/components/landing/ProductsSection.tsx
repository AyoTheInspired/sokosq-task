import { useProducts, useToolkit, SingleProduct } from "../../../src";
import { SiSpinrilla } from "react-icons/si";

const ProductsSection = () => {
	const { getAllProducts, productsLoading, productsData } = useProducts();
	const { toastSuccess, useState, useEffect } = useToolkit();

	useEffect(() => {
		getAllProducts();
	}, []);

	return (
		<main
			style={{
				minHeight: "calc(100vh - 56px)",
			}}
			className="side-pad w-full mx-auto pry-bg pt-10">
			{productsLoading ? (
				<div className="flexed flex-col text-white pt-20">
					<SiSpinrilla className="animate-spin text-3xl" />
					<p className="mt-3 text-sm">Fetching Products...</p>
				</div>
			) : productsData?.length === 0 ? (
				<div className="flexed mt-14">
					<p className="text-lg text-white">No Products Found</p>
				</div>
			) : (
				<section className="flex items-start justify-center lg:justify-between flex-wrap">
					{productsData?.map((product: ProductType) => (
						<SingleProduct product={product} key={product.id} />
					))}
				</section>
			)}
		</main>
	);
};

export default ProductsSection;
// onClick={() => toastSuccess("here")}
