import React from "react";
import "../../../tailwind.css";
export interface HeaderNavBarProps {
    navItems: {
        title: string;
        link: string;
    }[];
    userData: {
        name: string;
        imageSrc: string;
    }[];
}
declare const Header: React.FC<HeaderNavBarProps>;
export default Header;
