import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import CustomButton from '../components/CustomButton'

const Index = () => {
  return (
    <View className='justify-start items-center h-full' style={{backgroundColor:'#4169E1'}}>
        <Image source={require('../assets/images/icons/OIG3.jpg')} className='w-[136px] h-[136px] mt-[80px] rounded-[99px]'/>
        <Text className='text-white  text-[36px] mt-[40px]' style={{fontFamily:'PoppinsBold'}}>Bodaboda</Text>
        <ImageBackground 
        imageStyle={{opacity:0.36}}
        source={require('../assets/images/icons/OIG3__1_-removebg.png')} 
        className=' w-[323px] h-[248px] justify-start items-center' 
        resizeMode='contain'>
        <Text className='text-[#FFD700] text-[14px] mt-4' style={{fontFamily:'PoppinsRegular'}}>Ride Fast, Ride Safe with Bodaboda!</Text>
        <CustomButton href={'/login'}/>
        </ImageBackground>
    </View>
  )
}

export default Index