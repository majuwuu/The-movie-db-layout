import React from "react";
import "../../../tailwind.css";
export interface ButtonProps {
    label: string;
    size: string;
    weight: string;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
