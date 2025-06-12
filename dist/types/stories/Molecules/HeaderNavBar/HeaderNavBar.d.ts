import React from "react";
import "../../../tailwind.css";
export interface HeaderNavBarProps {
    navItems: {
        title: string;
        link: string;
    }[];
}
declare const HeaderNavBar: React.FC<HeaderNavBarProps>;
export default HeaderNavBar;
