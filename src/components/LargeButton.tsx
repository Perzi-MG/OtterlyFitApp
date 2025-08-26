import { Pressable } from "react-native";
import { useRouter } from "expo-router";
import { ButtonProps } from "@/assets/types";

export function LargeButton({ children, type, link, color }: ButtonProps) {
    const router = useRouter();

    let buttonClassName =
        "px-4 py-2 rounded-full w-full h-[66px] justify-center items-center flex flex-row";
    if (color === "transparent-blue") {
        buttonClassName += " bg-transparent border-2 border-blue";
    } else if (color === "transparent-white") {
        buttonClassName += " bg-transparent border-2 border-gray";
    } else if (color === "blue") {
        buttonClassName += " bg-blue";
    }

    return (
        <Pressable
            className={buttonClassName}
            onPress={() => {
                if (type === "back") {
                    router.back();
                } else if (type === "navigate" && link) {
                    router.navigate(link);
                } else if (type === "push" && link) {
                    router.push(link);
                }
            }}
        >
            {children}
        </Pressable>
    );
}