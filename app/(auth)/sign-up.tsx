import { Text, ScrollView, View, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center min-h-[60vh] px-4 my-6'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[115px] h-[35px]'
          />
          <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>
            Sign up to Aora
          </Text>
          <FormField 
            title='Username'
            value={form.username}
            handleChangeText={(e: any) => setForm({ ...form, username: e })}
            otherStyles='mt-7'
            placeholder={''}
          />
          <FormField 
            title='Email'
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            otherStyles='mt-7'
            keyboradType='email-address'
            placeholder={''}
          />
          <FormField 
            title='Password'
            value={form.password}
            handleChangeText={(e: any) => setForm({ ...form, password: e })}
            otherStyles='mt-1'
            keyboradType='password' 
            placeholder={''} 
          />
          <CustomButton 
            title='Sign Up'
            handlePress={submit}
            containerStyles='mt-6'
            isLoading={isSubmitting}
          />
          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Have an account already?
            </Text>
            <Link href={"/sign-in"} className='text-secondary text-lg font-psemibold'>Sign in</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp