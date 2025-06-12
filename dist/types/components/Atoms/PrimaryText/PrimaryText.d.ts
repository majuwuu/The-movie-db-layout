import React from "react";
import "../../../tailwind.css";
export interface PrimaryTextProps {
    label: string;
    size: "10px" | "11px" | "12px" | "13px" | "14px" | "18px";
    weigth: "bold" | "normal" | "light" | "medium" | "semibold" | "thin";
    color?: "#606265";
}
declare const PrimaryText: React.FC<PrimaryTextProps>;
export default PrimaryText;
