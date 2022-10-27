import {
	useProducts,
	useToolkit,
	SingleProduct,
	CategoryFilters,
} from "../../../src";
import { SiSpinrilla } from "react-icons/si";

const ProductsSection = () => {
	const { getAllProducts, productsLoading, productsData, categories } =
		useProducts();
	const { useState, useEffect } = useToolkit();
	const [selectedCategory, setSelectedCategory] = useState("all");

	const filteredProducts = productsData.filter((product: ProductType) => {
		if (selectedCategory === "all") {
			return true;
		} else {
			return product.category === selectedCategory;
		}
	});

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
			) : filteredProducts?.length === 0 ? (
				<div className="flexed mt-14">
					<p className="text-lg text-white">No Products Found</p>
				</div>
			) : (
				<section className="flex flex-col">
					<CategoryFilters
						categories={categories}
						selectedCategory={selectedCategory}
						setSelectedCategory={setSelectedCategory}
					/>
					<div className="flex items-center justify-center lg:justify-between flex-wrap">
						{filteredProducts?.map((product: ProductType) => (
							<SingleProduct product={product} key={product.id} />
						))}
					</div>
				</section>
			)}
		</main>
	);
};

export default ProductsSection;
