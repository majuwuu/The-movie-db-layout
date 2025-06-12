import React from "react";
import "../../../tailwind.css";
type CurrentUser = {
    imageSrc: string;
    id: string;
};
type CurrentViewersProps = {
    currentViewers: CurrentUser[];
};
declare const CurrentViewers: React.FC<CurrentViewersProps>;
export default CurrentViewers;
