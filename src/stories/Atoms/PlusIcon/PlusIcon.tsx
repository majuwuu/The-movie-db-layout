import React from "react";
import "../../../tailwind.css";

const PlusIcon = () => {
	return (
		<div>
			<svg
				width="12"
				height="12"
				viewBox="0 0 12 12"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<circle cx="6" cy="6" r="6" fill="var(--color-secondary-gray)" />
				<path d="M6 3V6M6 9V6M6 6H3H9" stroke="black" />
			</svg>
		</div>
	);
};
export default PlusIcon;
