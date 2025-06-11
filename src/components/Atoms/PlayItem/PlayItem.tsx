import React from "react";
import "../../../tailwind.css";

const PlayItem: React.FC = () => {
	return (
		<div className="w-7 h-7 flex justify-center items-center rounded-full bg-[#C4C4C4]">
			<svg
				width="11px"
				height="11px"
				viewBox="0 0 12 12"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M2.6386 1.9083V10.1583C2.63886 10.2418 2.6619 10.3237 2.70524 10.3951C2.74857 10.4665 2.81055 10.5248 2.88452 10.5636C2.95849 10.6024 3.04164 10.6203 3.12502 10.6153C3.20841 10.6104 3.28886 10.5828 3.35773 10.5355L9.31606 6.41051C9.5631 6.23955 9.5631 5.82797 9.31606 5.65655L3.35773 1.53155C3.289 1.48381 3.20851 1.45581 3.12499 1.4506C3.04147 1.44538 2.95812 1.46316 2.88399 1.502C2.80987 1.54083 2.7478 1.59924 2.70454 1.67087C2.66128 1.7425 2.63847 1.82462 2.6386 1.9083Z"
					fill="white"
				/>
			</svg>
		</div>
	);
};
export default PlayItem;
