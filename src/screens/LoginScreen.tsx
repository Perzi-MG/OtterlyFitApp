import { Apple, ArrowBack, Google, Lock, Mail, User } from '@/assets/icons/icons'
import IconButton from '@/components/IconButton'
import InputButton from '@/components/InputButton'
import { LargeButton } from '@/components/LargeButton'
import { Link } from 'expo-router'
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
export default function LoginScreen() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View className='flex justify-start items-center h-full bg-brandGray w-full py-safe-offset-10 px-8 gap-10'>
                <View className='flex flex-row items-center w-full'>
                    <IconButton type='back'>
                        <ArrowBack color="aqua" />
                    </IconButton>
                    <View className='flex-1 items-center'>
                        <Text className='text-blue font-semibold text-2xl'>Sign In</Text>
                    </View>
                </View>
                <View className='flex flex-col gap-7 w-full'>
                    <InputButton placeholder='Enter your email' secure={false} >
                        <Mail color='aqua' />
                    </InputButton>
                    <InputButton placeholder='Enter your password' secure={true} >
                        <Lock color='aqua' />
                    </InputButton>
                    <Link className='text-aqua text-right text-lg pr-2' href="#">Forgot Password?</Link>
                </View>
                <View className='flex flex-col w-full items-center gap-4 justify-end'>
                    <LargeButton type='navigate' link='main' color='blue'>
                        <Text className='text-white font-semibold text-xl'>Sign In</Text>
                    </LargeButton>
                    <Text className='text-gray text-lg'>Don´t have an account? <Link className='text-aqua' href="/signup">Sign Up</Link></Text>
                </View>
                <View className='w-full flex flex-1 flex-col items-center gap-7 justify-end'>
                    <Text className='text-gray text-xl'>OR</Text>
                    <LargeButton type='navigate' link='main' color='transparent-white'>
                        <Google color='white' />
                        <Text className='text-white font-semibold text-xl text-center flex-1'>Sign In with Google</Text>
                    </LargeButton>
                    <LargeButton type='navigate' link='main' color='transparent-white'>
                        <Apple color='white' />
                        <Text className='text-white font-semibold text-xl text-center flex-1'>Sign In with Apple</Text>
                    </LargeButton>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}