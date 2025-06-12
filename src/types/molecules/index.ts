export interface AddGenres {
	category: {
		allCategories: string[];
		favouriteCategorie: string[];
	};
}
export interface CardDescriptionProps {
	title: string;
	secondaryTitle: string;
	link: string;
	thirdTitle?: string;
	duration: string;
	stars?: string;
}

export type CurrentUser = {
	imageSrc: string;
	id: string;
};

export type CurrentViewersProps = {
	currentViewers: CurrentUser[];
};

export interface FavouriteGenres {
	category: {
		allCategories: string[];
		favouriteCategorie: string[];
	};
}

export interface HeaderUtilities {
	userData: {
		name: string;
		imageSrc: string;
	}[];
}

export interface ProfileComponentProps {
	imageSrc: string;
}

export interface RatedProps {
	rate: string;
}

export interface SortBy {
	category: {
		allCategories: string[];
		favouriteCategorie: string[];
	};
}

export interface VideoCardDescriptionProps {
	title: string;
	secondaryTitle: string;
	link: string;
	thirdTitle?: string;
	duration: string;
	views?: string;
	stars?: string;
	currentViewers?: {
		imageSrc: string;
		id: string;
	}[];
	trend?: boolean;
	imageSrc: string;
	description?: string;
	genre?: string;
}

export interface ViewersProps {
	viewers: string;
}
