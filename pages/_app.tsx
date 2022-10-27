import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastProvider } from "react-toast-notifications";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ToastProvider autoDismiss autoDismissTimeout={3500} placement="top-center">
			<div className="max-w-[2000px]">
				<Component {...pageProps} />
			</div>
		</ToastProvider>
	);
}
