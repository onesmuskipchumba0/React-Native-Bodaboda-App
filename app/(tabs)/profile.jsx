import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Banner from '../../components/Banner'
import { Ionicons } from '@expo/vector-icons'

const Profile = () => {
  return (
    <View>
      <Banner username={"onesmus509"}/>
      <View className='items-center justify-center'>
        <Text className='text-center font-[PoppinsBold] text-lg mt-2'>Your Profile</Text>
        {/*User pic*/}
        <Image
        source={require('../../assets/images/riders/testimonials-1.jpg')}
        className='rounded-full w-[100] h-[100]'
        ></Image>
        <Text className='font-[PoppinsBlack] text-[#27408B]'>@onesmus509
          {/* Button for editing username */}
          <TouchableOpacity>
            <Ionicons name = 'build-outline' size={24}></Ionicons>
          </TouchableOpacity>
        </Text>
        {/* Status of the user */}
        <Text className='font-[PoppinsBlack] text-[#27408B]'>Status: 
          <Text className='text-[#4169E1]'> Rider</Text>
        </Text>
        {/* Additional info page */}
        <View className='w-[95%] h-[60%] bg-amber-200 rounded-r-2xl rounded-l-2xl items-start pt-4 pl-4'>
          <Text className='font-[PoppinsSemiBold] self-center'>Additional Information</Text>
          <Text className='font-[PoppinsBlack] text-[#27408B]'>Phone:
            <Text className='font-[PoppinsBold] text-[#4169E1]'> +254792400709</Text>
          </Text>
          <Text className='font-[PoppinsBlack] text-[#27408B]'>Email:
            <Text className='font-[PoppinsBold] text-[#4169E1]'> onesmuskipchumba5@gmail.com</Text>
          </Text>
          {/* Quick settings Buttons */}
          <View className='justify-center items-center w-full mt-2 space-y-3'>
            <TouchableOpacity className='bg-amber-500 w-[70%] rounded-lg mt-2 h-10 items-center justify-center'>
              <Text className='text-white font-[PoppinsRegular]'>Ride History</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-indigo-500 w-[70%] rounded-lg mt-2 h-10 items-center justify-center'>
              <Text className='text-white font-[PoppinsRegular]'>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-red-500 w-[70%] rounded-lg mt-2 h-10 items-center justify-center'>
              <Text className='text-white font-[PoppinsRegular]'>Log out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Profile