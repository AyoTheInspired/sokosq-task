import axios from "axios";
import { useState } from "react";
import { useToolkit } from "../../../src";

const useProducts = () => {
	const [productsLoading, setProductsLoading] = useState(false);
	const [productsData, setProductsData] = useState<ProductType[]>([]);
	const { toastError } = useToolkit();

	const getAllProducts = async () => {
		setProductsLoading(true);

		try {
			const { data } = await axios.get("https://fakestoreapi.com/products");

			console.log("data :>> ", data);
			setProductsData(data);
			setProductsLoading(false);
		} catch (error: any) {
			const msg = error?.response?.data?.message;
			toastError(msg || "Something went wrong");
			setProductsLoading(false);
		}
	};

	return { getAllProducts, productsLoading, productsData };
};

export default useProducts;
