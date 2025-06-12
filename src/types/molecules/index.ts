export interface AddGenresProps {
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

export type CurrentUserProps = {
	imageSrc: string;
	id: string;
};

export type CurrentViewersProps = {
	currentViewers: CurrentUserProps[];
};

export interface FavouriteGenresProps {
	category: {
		allCategories: string[];
		favouriteCategorie: string[];
	};
}

export interface HeaderUtilitiesProps {
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

export interface SortByProps {
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
