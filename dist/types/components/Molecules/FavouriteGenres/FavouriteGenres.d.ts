import React from "react";
import "../../../tailwind.css";
export interface FavouriteGenres {
    category: {
        allCategories: string[];
        favouriteCategorie: string[];
    };
}
declare const FavouriteGenres: React.FC<FavouriteGenres>;
export default FavouriteGenres;
