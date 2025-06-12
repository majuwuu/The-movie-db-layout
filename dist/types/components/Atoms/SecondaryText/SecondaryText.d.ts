import React from "react";
import "../../../tailwind.css";
export interface SecondaryText {
    label: string;
    size: "10px" | "12px";
    weigth: "thin";
}
declare const SecondaryText: React.FC<SecondaryText>;
export default SecondaryText;
