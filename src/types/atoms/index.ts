export interface ButtonProps {
	label: string;
	size: string;
	weight: string;
}

export interface ImageBubbleProps {
	children: React.ReactNode;
}

export interface PreviewCardProps {
	imageSrc: string;
	title?: string;
	description?: string;
	genre?: string;
	onHoverChange?: (hovering: boolean) => void;
}

export interface PrimaryTextPropsProps {
	label: string;
	size: "10px" | "11px" | "12px" | "13px" | "14px" | "18px";
	weigth: "bold" | "normal" | "light" | "medium" | "semibold" | "thin";
	color?: "#606265";
}

export interface SecondaryTextProps {
	label: string;
	size: "10px" | "12px";
	weigth: "thin";
}

export interface TagItemProps {
	label: string;
	color: "#F36F45" | "#8769FF" | "#61D1EA" | "#FFFFFF";
}
