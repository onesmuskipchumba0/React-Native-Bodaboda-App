import { View, Text } from 'react-native'
import React from 'react'
import bg_blue from '../constants/Colors'
import TextLink from './TextLink'
const EstimatedTime = () => {
  return (
    <View className = {`w-[90%] ml-5 h-[20%] bg-[#4169E1] rounded-lg justify-center items-center`}>
      <Text className='text-white font-[PoppinsBold]'>EstimatedTime : 
        <Text className='text-[#FFD700]'> 1 hr 30 mins</Text>
      </Text>
      <Text className='text-white font-[PoppinsBold]'>Pick Up : 
        <Text className='text-[#FFD700]'> Kesses</Text>
      </Text>
      <Text className='text-white font-[PoppinsBold]'>Driver : 
        <Text className='text-[#FFD700]'>John Doe</Text>
      </Text>
    </View>
  )
}

export default EstimatedTime