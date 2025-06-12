import React from "react";
import "../../../tailwind.css";
export interface SortBy {
    category: {
        allCategories: string[];
        favouriteCategorie: string[];
    };
}
declare const SortBy: React.FC<SortBy>;
export default SortBy;
