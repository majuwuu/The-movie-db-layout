import React from "react";

export interface ImageBubbleProps {
	children: React.ReactNode;
}
const ImageBubble: React.FC<ImageBubbleProps> = ({ children }) => {
	return <div>{children}</div>;
};

export default ImageBubble;
