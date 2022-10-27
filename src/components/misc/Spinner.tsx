import React from "react";
import { SiSpinrilla } from "react-icons/si";

type Props = {
	text: string;
};

const Spinner = ({ text }: Props) => {
	return (
		<div className="flexed flex-col text-white pt-20">
			<SiSpinrilla className="animate-spin text-3xl" />
			<p className="mt-3 text-sm">{text}...</p>
		</div>
	);
};

export default Spinner;
