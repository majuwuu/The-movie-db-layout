import "../../../tailwind.css";
export interface CardDescriptionProps {
    title: string;
    secondaryTitle: string;
    link: string;
    thirdTitle?: string;
    duration: string;
    views?: string;
    stars?: string;
    currentViewers?: {
        imageSrc: string;
        id: string;
    }[];
    trend?: boolean;
    imageSrc: string;
    description?: string;
    genre?: string;
}
declare const TrailerPreview: React.FC<CardDescriptionProps>;
export default TrailerPreview;
