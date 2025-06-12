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
};

type PopularItem = {
	title: string;
	secondaryTitle: string;
	link: string;
	thirdTitle?: string;
	duration: string;
	imageSrc: string;
	stars?: string;
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
				/>
			</section>
			<section className="flex flex-wrap">
				<header className="py-4 w-full">
					<PrimaryText label="Continue watching" size="18px" weigth="bold" />
				</header>
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
							/>
						</article>
					))}
				</div>
			</section>
			<section aria-labelledby="popular-heading" className="flex flex-wrap">
				<header className="py-4 w-full">
					<PrimaryText label="Popular" size="18px" weigth="bold" />
				</header>
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
							/>
						</article>
					))}
				</div>
			</section>
		</main>
	);
};

export default Main;
