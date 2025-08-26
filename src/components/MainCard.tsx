import { Text, View } from "react-native";
import { RoundedButton } from "./RoundedButton";
import Card from "./Card";
import { LinearGradient } from "expo-linear-gradient";
import { MenuIcon, SearchIcon } from "../assets/icons/icons";

export default function MainCard() {
    return (
        <View className="rounded-b-[40px] w-full overflow-hidden">
            <LinearGradient
                colors={['#50CCA6', '#C5C8D9']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ flex: 1, paddingHorizontal: 20, paddingBottom: 20 }}
            >
                <View className='flex-1 flex-col gap-6 z-20'>
                    <View className='flex flex-row justify-between items-center pt-safe'>
                        <RoundedButton type="back">
                            <MenuIcon color="lightBeige"/>
                        </RoundedButton>
                        <RoundedButton>
                            <Text className="text-lightBlue font-semibold">Foto</Text>
                        </RoundedButton>
                    </View>
                    <View className='flex flex-row justify-between items-center'>
                        <Text className='text-4xl font-light'>
                            Bienvenido
                        </Text>
                        <RoundedButton>
                            <SearchIcon color="lightBlue"/>
                        </RoundedButton>
                    </View>
                    <Text className='text-4xl font-semibold -mt-5'>Mike!</Text>
                    <Card />
                </View>
            </LinearGradient>
        </View>
    )
}