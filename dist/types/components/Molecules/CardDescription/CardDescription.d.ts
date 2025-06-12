import React from "react";
import "../../../tailwind.css";
export interface CardDescriptionProps {
    title: string;
    secondaryTitle: string;
    link: string;
    thirdTitle?: string;
    duration: string;
    stars?: string;
}
declare const CardDescription: React.FC<CardDescriptionProps>;
export default CardDescription;
