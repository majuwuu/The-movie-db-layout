import React, { useState } from "react";

import "../../../tailwind.css";
import Button from "../../Atoms/Button";
import PlayItem from "../../Atoms/PlayItem";

const WatchNowButton: React.FC = () => {
	return (
		<div className="flex flex-row items-center justify-center w-25 h-8 rounded-[5px] bg-[#F36F45] cursor-pointer">
			<div className=" opacity-75 w-5 mx-2 -ml-2 ">
				<PlayItem />
			</div>
			<div className="h-full flex items-center">
				<div className="-mt-1">
					<Button label={"Watch Now"} size={"10px"} weight={"normal"} />
				</div>
			</div>
		</div>
	);
};

export default WatchNowButton;
