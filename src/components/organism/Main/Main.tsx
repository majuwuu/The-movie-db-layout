import React from "react";
import "../../../tailwind.css";
import PrimaryText from "../../Atoms/PrimaryText";
import TrailerPreview from "../../Molecules/TrailerPreview";

type Viewer = {
	id: string;
	imageSrc: string;
};

type BannerPromo = {
	imageSrc: string;
	currentViewers?: Viewer[];
	description?: string;
	genre?: string;
};

type ContinueWatchingItem = {
	title: string;
	secondaryTitle: string;
	link: string;
	thirdTitle: string;
	duration: string;
	imageSrc: string;
	trend?: boolean;
	views?: string;
	currentViewers?: Viewer[];
	description?: string;
	genre?: string;
};

type PopularItem = {
	title: string;
	secondaryTitle: string;
	link: string;
	thirdTitle?: string;
	duration: string;
	imageSrc: string;
	stars?: string;
	description?: string;
	genre?: string;
};

type MainContent = {
	bannerPromo: BannerPromo;
	continueWatching: ContinueWatchingItem[];
	popular: PopularItem[];
};

const Main: React.FC<MainContent> = ({
	bannerPromo,
	continueWatching,
	popular,
}) => {
	return (
		<main className="pl-24 bg-[#17171B] p-10">
			<section className="h-[134px] w-[834px]">
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
			<section className="flex flex-wrap">
				<div className="py-4 flex justify-between w-full">
					<div className="flex">
						<PrimaryText label="Continue watching" size="18px" weigth="bold" />
						<div className="ml-4">
							<PrimaryText
								label={`|`}
								size="12px"
								weigth="normal"
								color="#606265"
							/>
						</div>
						<div className="ml-4">
							<PrimaryText
								label={`${continueWatching.length} Movies`}
								size="12px"
								weigth="normal"
								color="#606265"
							/>
						</div>
					</div>
					<div className="pr-14 cursor-pointer">
						<PrimaryText
							label={`All Movies >`}
							size="12px"
							weigth="normal"
							color="#606265"
						/>
					</div>
				</div>
				<div className="flex flex-row gap-6 w-full">
					{continueWatching.map((item, idx) => (
						<article className="w-[402px] h-[170px]" key={idx}>
							<TrailerPreview
								title={item.title}
								secondaryTitle={item.secondaryTitle}
								link={item.link}
								thirdTitle={item.thirdTitle}
								duration={item.duration}
								views={item.views}
								imageSrc={item.imageSrc}
								trend={item.trend}
								currentViewers={item.currentViewers}
								genre={item.genre}
								description={item.description}
							/>
						</article>
					))}
				</div>
			</section>
			<section aria-labelledby="popular-heading" className="flex flex-wrap">
				<div className="py-4 w-full">
					<div className="pt-4 flex justify-between w-full">
						<div className="flex">
							<PrimaryText
								label="Popular movies 2021"
								size="18px"
								weigth="bold"
							/>
							<div className="ml-4">
								<PrimaryText
									label={`|`}
									size="12px"
									weigth="normal"
									color="#606265"
								/>
							</div>
							<div className="ml-4">
								<PrimaryText
									label={`${continueWatching.length} Movies`}
									size="12px"
									weigth="normal"
									color="#606265"
								/>
							</div>
						</div>
						<div className="pr-14 cursor-pointer">
							<PrimaryText
								label={`All Movies >`}
								size="12px"
								weigth="normal"
								color="#606265"
							/>
						</div>
					</div>
				</div>
				<div className="flex flex-row gap-6 py-4 w-full">
					{popular.map((item, idx) => (
						<article key={idx} className="w-[258px] h-[139px]">
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
