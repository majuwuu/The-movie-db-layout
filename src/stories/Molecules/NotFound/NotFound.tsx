import PrimaryText from "../../Atoms/PrimaryText";
import "../../../tailwind.css";
import PopCorn from "../../Atoms/Popcorn";

const NotFound = () => {
	return (
		<div className="h-screen bg-[#17171B] flex justify-center flex-col items-center w-full">
			<div className="w-54 h-54">
				<PopCorn />
			</div>
			<div className="text-center mt-4">
				<PrimaryText size="18px" weigth="bold" label="OOPS!" />
				<PrimaryText
					size="18px"
					weigth="bold"
					label="The page you are looking for doesn't exists."
				/>
			</div>
		</div>
	);
};

export default NotFound;
