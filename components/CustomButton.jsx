import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const CustomButton = ({href}) => {
  return (
    <View>
        <TouchableOpacity className='w-[254px] h-[43px] items-center justify-center rounded-[9px] mt-[140px]' style={{backgroundColor:'#FAFAD2'}}>
            <Link href={href}>
                <Text className='text-[#27408B]' style={{fontFamily:'PoppinsBold'}}>Hop On, Let's Go!</Text>
            </Link>
        </TouchableOpacity>
    </View>
  )
}

export default CustomButton