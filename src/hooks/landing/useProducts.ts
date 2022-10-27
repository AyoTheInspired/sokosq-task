import axios from "axios";
import { useState } from "react";
import { useToolkit } from "../../../src";

const useProducts = () => {
	const [productsLoading, setProductsLoading] = useState(false);
	const [productsData, setProductsData] = useState<ProductType[]>([]);
	const [categories, setCategories] = useState<any>([]);
	const { toastError } = useToolkit();

	const getAllProducts = async () => {
		setProductsLoading(true);

		try {
			const { data } = await axios.get("https://fakestoreapi.com/products");

			if (data?.length > 0) {
				const unique = [
					"all",
					...new Set(data?.map((item: ProductType) => item.category)),
				];
				setCategories(unique);
			}
			setProductsData(data);
			setProductsLoading(false);
		} catch (error: any) {
			const msg = error?.response?.data?.message;
			toastError(msg || "Something went wrong");
			setProductsLoading(false);
		}
	};

	return { getAllProducts, productsLoading, productsData, categories };
};

export default useProducts;
