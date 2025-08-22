import { Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

type RoundedButtonProps = React.PropsWithChildren<{
    link?: string;
    type?: "back" | "navigate" | "push"
}>;

export function RoundedButton({ children, type, link }: RoundedButtonProps) {
    const router = useRouter();
    return (
        <Pressable
            className="bg-brandGray px-4 py-2 rounded-3xl w-20 h-12 justify-center items-center flex"
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