export interface HeaderProps {
	navItems: {
		title: string;
		link: string;
	}[];
	userData: {
		name: string;
		imageSrc: string;
	}[];
}

export type Viewer = {
	id: string;
	imageSrc: string;
};

export type BannerPromo = {
	title: string;
	imageSrc: string;
	currentViewers?: Viewer[];
	description?: string;
	genre?: string;
};

export type ContinueWatchingItem = {
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

export type PopularItem = {
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

export type MainContent = {
	bannerPromo: BannerPromo;
	continueWatching: ContinueWatchingItem[];
	popular: PopularItem[];
};
export interface SidebarProps {
	videos: {
		title: string;
		secondaryTitle: string;
		link: string;
		thirdTitle: string;
		duration: string;
		views: string;
		imageSrc: string;
		description?: string;
		genre?: string;
	}[];

	category: {
		allCategories: string[];
		favouriteCategorie: string[];
	};
}
