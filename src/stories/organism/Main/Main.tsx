import React from "react";
import "../../../tailwind.css";
import PrimaryText from "../../Atoms/PrimaryText";
import TrailerPreview from "../../Molecules/TrailerPreview";
import { MainContentProps } from "../../../types/organism";

const Main: React.FC<MainContentProps> = ({
	bannerPromo,
	continueWatching,
	popular,
}) => {
	return (
		<main className="bg-[#17171B] px-4 sm:pl-22 sm:pr-12 lg:max-w-min pb-4.5 xs:p-10 lg:pt-8.5 2xl:pl-24 max-w-full">
			<section className="lg:block lg:h-[134px] lg:w-[834px] relative">
				<TrailerPreview
					title=""
					thirdTitle=""
					secondaryTitle=""
					link=""
					duration=""
					views=""
					imageSrc={bannerPromo.imageSrc}
					currentViewers={bannerPromo.currentViewers}
					genre={bannerPromo.genre}
					description={bannerPromo.description}
				/>
			</section>
			<section>
				<div className="pt-9.5 pb-5.5 flex justify-between w-full flex-wrap">
					<div className="flex flex-wrap items-center gap-2 sm:gap-5">
						<PrimaryText label="Continue watching" size="18px" weigth="bold" />
						<PrimaryText
							label="|"
							size="12px"
							weigth="normal"
							color="#606265"
						/>
						<PrimaryText
							label={`${continueWatching.length} Movies`}
							size="12px"
							weigth="normal"
							color="#606265"
						/>
					</div>
					<div className="cursor-pointer">
						<PrimaryText
							label={`All Movies >`}
							size="12px"
							weigth="normal"
							color="#606265"
						/>
					</div>
				</div>

				<div className="flex flex-col gap-6  w-full sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:gap-8">
					{continueWatching.map((item, idx) => (
						<article key={idx} className="w-full lg:w-[402px] lg:h-[170px]">
							<TrailerPreview
								title={item.title}
								secondaryTitle={item.secondaryTitle}
								link={item.link}
								duration={item.duration}
								imageSrc={item.imageSrc}
								genre={item.genre}
								description={item.description}
								currentViewers={bannerPromo.currentViewers}
								trend={item.trend}
							/>
						</article>
					))}
				</div>
			</section>
			<section className="pt-9.5">
				<div className=" flex justify-between w-full flex-wrap  pb-4.5">
					<div className="flex lg:flex-wrap items-center gap-2 sm:gap-4">
						<PrimaryText
							label="Popular movies 2021"
							size="18px"
							weigth="bold"
						/>
					</div>
					<div className="cursor-pointer">
						<PrimaryText
							label={`All Movies >`}
							size="12px"
							weigth="normal"
							color="#606265"
						/>
					</div>
				</div>

				<div className="flex flex-col gap-6 pb-6  w-full sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:gap-7.5">
					{popular.map((item, idx) => (
						<article key={idx} className="w-full lg:w-[258px] lg:h-[139px]">
							<TrailerPreview
								title={item.title}
								secondaryTitle={item.secondaryTitle}
								link={item.link}
								duration={item.duration}
								imageSrc={item.imageSrc}
								stars={item.stars}
								genre={item.genre}
								description={item.description}
							/>
						</article>
					))}
				</div>
			</section>
		</main>
	);
};

export default Main;
