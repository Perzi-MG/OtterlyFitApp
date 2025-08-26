export type ButtonProps = React.PropsWithChildren<{
    link?: string;
    type?: "back" | "navigate" | "push";
    color?: "blue" | "transparent-blue" | "transparent-white";
}>;