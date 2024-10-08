import { View, Text,TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const CustomTextInput = ({placeHolder,isTouchable,value,onChangeText}) => {
  return (
    <View className='w-[90%] h-[40px] flex-row ml-5 items-center rounded-[10px] mt-3 bg-[#FAFAD2] justify-center'>
      {isTouchable? <TouchableOpacity><Ionicons name='search' className="self-start" size={24}/></TouchableOpacity>:null}
        <TextInput placeholder={placeHolder} value={value} onChangeText={onChangeText} className='ml-3 w-[80%] self-center justify-center'></TextInput>
    </View>
  )
}

export default CustomTextInput