import React from "react";
import "../../../tailwind.css";
type Viewer = {
    id: string;
    imageSrc: string;
};
type BannerPromo = {
    title: string;
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
declare const Main: React.FC<MainContent>;
export default Main;
