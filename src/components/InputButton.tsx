import { TextInput, Pressable } from 'react-native'
import { useRef } from 'react'

export default function InputButton({ children, placeholder, secure }: { children?: React.ReactNode, placeholder: string, secure: boolean }) {
  const inputRef = useRef<TextInput>(null);

  return (
    <Pressable
      className='w-full h-[66px] bg-brandBlack rounded-full px-6 flex-row items-center'
      onPress={() => inputRef.current?.focus()}
    >
      {children}
      <TextInput
        secureTextEntry={secure}
        ref={inputRef}
        className='flex-1 text-white ml-4'
        placeholder={placeholder}
        placeholderTextColor='#888'
      />
    </Pressable>
  )
}