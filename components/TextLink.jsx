import { View, Text } from 'react-native'
import React from 'react'

const TextLink = ({ text1, text2, sp }) => {
  return (
    <View className={`mt-5 flex-row items-center justify-center space-x-32 `}>
      <Text className='text-bold text-[12px]' style={{ fontFamily: 'PoppinsBold' }}>{text1}</Text>
      <Text className='text-[12px] text-[#27408B]' style={{ fontFamily: 'PoppinsBold' }}>{text2}</Text>
    </View>
  )
}

export default TextLink
