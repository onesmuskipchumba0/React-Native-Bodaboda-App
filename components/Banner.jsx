import { View, Text, Image,StatusBar } from 'react-native'
import React from 'react'

const Banner = ({username,profilePic}) => {
  return (
    <View className='justify-center items-start bg-[#4169E1] h-[120px]' style={{elevation:5,shadowColor:'black',shadowOpacity:0.8,shadowRadius:2,paddingTop:StatusBar.currentHeight}}>
        <View className='flex-row items-center'>
          <Image className='h-[50px] w-[50px] rounded-[99px] ml-6' source={require('../assets/images/riders/testimonials-1.jpg')}/> 
            <View  className='ml-5 items-start text-center'>
                <Text className='text-white text-[14px]'>Welcome, </Text>
                <Text className='text-white text-[18px]' style={{fontFamily:"PoppinsBold"}}>{username}</Text>
            </View>
            <View className='ml-8'>
                <Image 
                resizeMode='cover'
                className='w-[120px] h-[60px] rounded-l-[30px]'
                source={require('../assets/images/icons/OIG3.jpg')}></Image>
            </View>
        </View>
    </View>
  )
}

export default Banner