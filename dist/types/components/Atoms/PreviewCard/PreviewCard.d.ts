import React from "react";
export interface PreviewCardProps {
    imageSrc: string;
    title?: string;
    description?: string;
    genre?: string;
    onHoverChange?: (hovering: boolean) => void;
    className?: string;
}
declare const PreviewCard: React.FC<PreviewCardProps>;
export default PreviewCard;
