import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";

const useToolkit = () => {
	const { addToast } = useToasts();
	const router = useRouter();

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
	return { toastSuccess, toastError, toastInfo, useState, useEffect };
};

export default useToolkit;
