import "../../../tailwind.css";
export interface HeaderNavBarProps {
    navItems: {
        title: string;
        link: string;
    }[];
}
declare const HeaderNavBar: ({ navItems }: HeaderNavBarProps) => import("react/jsx-runtime").JSX.Element;
export default HeaderNavBar;
