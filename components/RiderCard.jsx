import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { Riders } from '../app/data'
import { Ionicons } from '@expo/vector-icons'


const RiderCard = () => {
  return(
  <View>
    <ScrollView showsHorizontalScrollIndicator={false} horizontal className='space-x-4 mr-3 ml-3 mb-3'>
      {Riders.map((rider, index)=>{
        return(
          <View key={index} className = 'shadow-sm mb-4 shadow-black h-[120px] w-[300px] space-x-4 bg-amber-200 items-center flex-row rounded-xl'>
            <Image source={rider.profile} resizeMode='cover' className='ml-3 w-[100px] h-[100px] rounded-[99px]'></Image>
            <View className='items-center text-center'>
              <Text className='font-[PoppinsBold]'>{rider.name} </Text>
              <View className='flex-row items-center'>
                <Ionicons name='star'></Ionicons>
                <Text >{rider.ratings}k </Text>
              </View>
            </View>
          </View>
        )
      })}
    </ScrollView>
  </View>
  )
}

export default RiderCard