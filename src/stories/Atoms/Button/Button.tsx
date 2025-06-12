import React from "react";
import "../../../tailwind.css";
import PrimaryText from "../PrimaryText";
import { ButtonProps } from "../../../types/atoms";

const Button: React.FC<ButtonProps> = ({ label, size, weight }) => {
	return (
		<button className="appearance-none">
			<PrimaryText size={"10px"} label={label} weigth="normal" />
		</button>
	);
};
export default Button;
