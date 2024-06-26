import { View, Text, TextInput, Image } from 'react-native'
import React, { useState, JSX } from 'react'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler'

import { icons } from '@/constants'

const FormField = ({
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
      <View className={`space-y-2 ${otherStyles}`}>
        <Text className='text-base text-gray-100 font-pmidium'>
          {title}
        </Text>
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
        '>
          <TextInput 
            className="flex-1 text-white font-psemibold text-base"
            value={value}
            placeholder={placeholder}
            placeholderTextColor={"#7b7b8b"}
            onChangeText={handleChangeText}
            secureTextEntry={title === 'Password' && !showPassword}
          />

          {title === 'Password' && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image 
                source={!showPassword ? icons.eye : icons.eyeHide}
                className='w-6 h-6'
                resizeMode='contain'
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </GestureHandlerRootView>
  )
}

export default FormField