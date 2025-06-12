import React from "react";
import "../../../tailwind.css";
export interface TagItem {
    label: string;
    color: "#F36F45" | "#8769FF" | "#61D1EA" | "#FFFFFF";
}
declare const TagItem: React.FC<TagItem>;
export default TagItem;
