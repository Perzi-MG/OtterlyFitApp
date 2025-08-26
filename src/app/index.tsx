import { LargeButton } from '@/components/LargeButton';
import { View, Text, Image } from 'react-native'
export default function index() {
  return (
    <View className='flex justify-normal items-center h-full bg-brandGray w-full py-safe'>
      <Image
        className='w-80 h-96'
        source={require('../assets/icon-no-text.png')}
      />
      <View className='flex justify-center items-center mb-16'>
        <Text className='text-darkBlue font-bold text-5xl'>OtterlyFit</Text>
        <Text className='text-darkBlue font-semibold text-xl'>Nutriando tu vida</Text>
      </View>
      <View className='flex gap-6 w-full px-14'>
        <LargeButton type='navigate' link='/login' color='blue'>
          <Text className='text-2xl text-white font-medium'>Login</Text>
        </LargeButton>
        <LargeButton type='navigate' link='/signup' color='transparent-blue'>
          <Text className='text-2xl text-blue font-medium'>Sign Up</Text>
        </LargeButton>
      </View>
    </View>
  )
}