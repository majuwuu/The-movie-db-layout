import React from "react";
import "../../../tailwind.css";

const PlayItem = () => {
	return (
		<div className="w-full h-full">
			<svg
				width="auto"
				height="auto"
				viewBox="0 0 10 11"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M8.85705 5.06748C9.05455 5.32581 9.05455 5.67456 8.85705 5.93248C8.23496 6.74456 6.74246 8.41665 4.99996 8.41665C3.25746 8.41665 1.76496 6.74456 1.14288 5.93248C1.04679 5.80879 0.994629 5.65661 0.994629 5.49998C0.994629 5.34335 1.04679 5.19117 1.14288 5.06748C1.76496 4.2554 3.25746 2.58331 4.99996 2.58331C6.74246 2.58331 8.23496 4.2554 8.85705 5.06748V5.06748Z"
					stroke="white"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M5 6.75C5.69036 6.75 6.25 6.19036 6.25 5.5C6.25 4.80964 5.69036 4.25 5 4.25C4.30964 4.25 3.75 4.80964 3.75 5.5C3.75 6.19036 4.30964 6.75 5 6.75Z"
					stroke="white"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
	);
};
export default PlayItem;
