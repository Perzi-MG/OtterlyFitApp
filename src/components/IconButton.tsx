import { Pressable } from "react-native";
import { useRouter } from "expo-router";
import { ButtonProps } from "@/assets/types";

export default function IconButton({ children, type, link }: ButtonProps) {
    const router = useRouter();
    return (
        <Pressable
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
    )
}