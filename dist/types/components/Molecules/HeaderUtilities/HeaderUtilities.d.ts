import React from "react";
import "../../../tailwind.css";
export interface HeaderUtilities {
    userData: {
        name: string;
        imageSrc: string;
    }[];
}
declare const HeaderUtilities: React.FC<HeaderUtilities>;
export default HeaderUtilities;
