import React from "react";
import "../../../tailwind.css";
export interface AddGenres {
    category: {
        allCategories: string[];
        favouriteCategorie: string[];
    };
}
declare const AddGenres: React.FC<AddGenres>;
export default AddGenres;
