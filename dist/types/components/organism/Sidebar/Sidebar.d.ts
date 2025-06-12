import React from "react";
import "../../../tailwind.css";
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
declare const Sidebar: React.FC<SidebarProps>;
export default Sidebar;
