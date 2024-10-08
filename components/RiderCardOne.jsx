import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const RiderCardOne = () => {
  return (
    <View className='flex-row items-center space-x-5'>
        <View className = 'shadow-sm mb-4 mt-2 ml-2 shadow-black h-[100px] w-[190px] space-x-4 bg-amber-200 items-center flex-row rounded-xl'>
                <Image source={require('../assets/images/riders/testimonials-1.jpg')} resizeMode='cover' className='ml-3 w-[50px] h-[50px] rounded-[99px]'></Image>
                <View className='items-center text-center'>
                  <Text className='font-[PoppinsBold]'>John Doe</Text>
                  <View className='flex-row items-center'>
                    <Ionicons name='star'></Ionicons>
                    <Text >7.5k</Text>
                  </View>
                </View>
        </View>
        <TouchableOpacity className='bg-green-500 w-[15%] h-12 items-center justify-center rounded-md'>
            <Text className='text-white'>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity className='bg-red-500 w-[15%] h-12 items-center justify-center rounded-md'>
            <Ionicons name="close-circle-outline" size={32} color={'white'}></Ionicons>
        </TouchableOpacity>
    </View>
  )
}

export default RiderCardOne