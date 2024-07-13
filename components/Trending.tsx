import { View, Text, FlatList, TouchableOpacity, ImageBackground, Image, ViewToken } from 'react-native'
import React, { useRef, useState } from 'react'
import * as Animatable from 'react-native-animatable'
import { Models } from 'react-native-appwrite'
import { icons } from '@/constants'
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av'

const zoomIn = {
  0: {
    opacity: 1,
    scale: 0.9
  },
  1: {
    opacity: 1,
    scale: 1.0
  }
}

const zoomOut = {
  0: {
    opacity: 1,
    scale: 1.0
  },
  1: {
    opacity: 1,
    scale: 0.9
  }
}

export type TrendingItemProps = {
  activeItem: Models.Document
  item: Models.Document
}

const TrendingItem = ({ activeItem, item }: TrendingItemProps) => {
  const [play, setPlay] = useState(false);
  
  return (
    <Animatable.View
      className='mr-5'
      animation={activeItem.$id === item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
         <Video 
          source={{ uri: item.video }}
          className='w-52 h-72 rounded-md mt-3 bg-white/10'
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status: AVPlaybackStatus) => {
            if ('didJustFinish' in status && status.didJustFinish) {
              setPlay(false)
            }
          }}
         />
      ) : (
        <TouchableOpacity
          className='relative justify-center items-center'
          activeOpacity={0.7}
          onPress={() => {setPlay(true)}}
        >
          <ImageBackground 
            source={{
              uri: item.thumbnail
            }}
            className='w-52 h-72 rounded-md my-5 overflow-hidden shadow-black/40'
            resizeMode='cover'
          />

          <Image 
            source={icons.play}
            className='w-12 h-12 absolute'
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  )
}

type TrendingProps = {
  posts: Models.Document[]
}

const Trending = ({ posts }: TrendingProps) => {
  const [activeItem, setActiveItem] = useState(posts[0]);
  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        itemVisiblePercentThreshold: 50
      },
      onViewableItemsChanged: ({ viewableItems }: { viewableItems: ViewToken[] }) => {
        if (viewableItems.length > 0) {
          setActiveItem(viewableItems[0].item as Models.Document);
        }
      }
    }
  ]);

  return (
    <FlatList 
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      horizontal
      contentOffset={{ x: 170, y: 0 }}
    />
  )
}

export default Trending
