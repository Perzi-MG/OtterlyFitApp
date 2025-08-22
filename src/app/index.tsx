import { Link, useRouter } from 'expo-router'
import { View, Text, Pressable } from 'react-native'
export default function index() {

  const router = useRouter();
  return (
    <View className='flex justify-center items-center h-full'>
      <Link href="/login" asChild prefetch>
        <Pressable onPress={() => router.navigate('/login')}>
          <Text className='text-2xl font-bold'>Go to Login</Text>
        </Pressable>
      </Link>
    </View>
  )
}