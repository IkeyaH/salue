import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState, JSX } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { icons } from '@/constants'

const  SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyboradType
}: {
  title: string,
  value: string,
  placeholder: string,
  handleChangeText: (e: any) => void,
  otherStyles?: string,
  keyboradType?: string
}): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <GestureHandlerRootView className='flex-1'>
      <View className='
        border-2
        border-black-200 
        w-full
        h-12
        px-4
        bg-black-100 
        rounded-2xl
        focus:border-secondary 
        items-center
        flex-row
        space-x-4
      '>
        <TextInput 
          className="text-base mt-0.5 text-white flex-1 font-pregular"
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#7b7b8b"}
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
        />

        <TouchableOpacity>
          <Image
            source={icons.search}
            className="w-5 h-5"
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  )
}

export default SearchInput