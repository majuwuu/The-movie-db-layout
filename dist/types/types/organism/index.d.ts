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
export type ViewerProps = {
    id: string;
    imageSrc: string;
};
export type BannerPromoProps = {
    id: string;
    title: string;
    imageSrc: string;
    currentViewers?: ViewerProps[];
    description?: string;
    genre?: string;
};
export type ContinueWatchingItem = {
    id: string;
    title: string;
    secondaryTitle: string;
    link: string;
    thirdTitle: string;
    duration: string;
    imageSrc: string;
    trend?: boolean;
    views?: string;
    currentViewers?: ViewerProps[];
    description?: string;
    genre?: string;
};
export type PopularItemProps = {
    id: string;
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
export type MainContentProps = {
    bannerPromo: BannerPromoProps;
    continueWatching: ContinueWatchingItem[];
    popular: PopularItemProps[];
};
export type TrailerVideoProps = {
    id: string;
    title: string;
    secondaryTitle: string;
    link: string;
    thirdTitle: string;
    duration: string;
    views: string;
    imageSrc: string;
    description?: string;
    genre?: string;
};
export interface SidebarProps {
    videos: TrailerVideoProps[];
    category: {
        allCategories: string[];
        favouriteCategorie: string[];
    };
    onCloseSideBar?: () => void;
}
