import { ArrowBack, Lock, Mail, User } from '@/assets/icons/icons'
import CheckBox from '@/components/CheckBox';
import IconButton from '@/components/IconButton'
import InputButton from '@/components/InputButton'
import { LargeButton } from '@/components/LargeButton';
import { Link } from 'expo-router';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'

export default function SignUpScreen() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View className='flex justify-start items-center h-full bg-brandGray w-full py-safe-offset-10 px-8 gap-10'>
                <View className='flex flex-row items-center w-full'>
                    <IconButton type='back'>
                        <ArrowBack color="aqua" />
                    </IconButton>
                    <View className='flex-1 items-center'>
                        <Text className='text-blue font-semibold text-2xl'>Sign Up</Text>
                    </View>
                </View>
                <View className='flex flex-col gap-7 w-full'>
                    <InputButton placeholder='Enter your name' secure={false}>
                        <User color='aqua' />
                    </InputButton>
                    <InputButton placeholder='Enter your email' secure={false} >
                        <Mail color='aqua' />
                    </InputButton>
                    <InputButton placeholder='Enter your password' secure={true} >
                        <Lock color='aqua' />
                    </InputButton>
                </View>
                <View className='flex flex-row w-full overflow-clip'>
                    <CheckBox color='aqua' />
                    <Text className='text-gray w-3/4'>I agree to the healthcare <Link className='text-aqua' href="https://icons.expo.fyi/Index">Terms of Service</Link> and <Link className='text-aqua' href="#">Privacy Policy</Link></Text>
                </View>
                <View className='flex flex-1 flex-col w-full items-center gap-4 justify-end'>
                    <LargeButton type='navigate' link='main' color='blue'>
                        <Text className='text-white font-semibold text-xl'>Sign Up</Text>
                    </LargeButton>
                    <Text className='text-gray text-lg'>Already have an account? <Link className='text-aqua' href="/login">Sign In</Link></Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}