import { useToasts } from "react-toast-notifications";

const useToolkit = () => {
	const { addToast } = useToasts();

	function toastSuccess(message: string) {
		return addToast(`${message}!`, {
			appearance: "success",
		});
	}

	function toastError(message: string) {
		return addToast(`${message}!`, {
			appearance: "error",
		});
	}

	function toastInfo(message?: string) {
		return addToast(`${message}!`, {
			appearance: "info",
		});
	}
	return { toastSuccess, toastError, toastInfo };
};

export default useToolkit;
