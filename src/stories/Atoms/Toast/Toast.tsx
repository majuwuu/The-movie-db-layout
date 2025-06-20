import React from "react";
import { ToastProps } from "../../../types/atoms";

const Toast = ({ label }: ToastProps) => {
	return (
		<div className="bg-primary-gray max-w-min whitespace-nowrap p-3 rounded-[20px] text-white">
			{label}
		</div>
	);
};
export default Toast;
