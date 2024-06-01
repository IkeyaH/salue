import { Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Aura!</Text>
      <StatusBar style="auto" />
      <Link href='/profile'>Go to Profile</Link>
    </View>
  )
}

export default RootLayout
