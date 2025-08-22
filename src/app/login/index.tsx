import { View, Text } from 'react-native'
import { Pressable } from 'react-native'
import { useRouter } from 'expo-router'
export default function index() {
  const router = useRouter();
  return (
    <View className='flex justify-center items-center h-full'>
      <Pressable onPress={() => router.back()}>
        <Text className='text-2xl font-bold'>Go to Home</Text>
      </Pressable>
    </View>
  )
}