import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Banner from '../../components/Banner'
import CustomTextInput from '../../components/CustomTextInput'
import TextLink from '../../components/TextLink'
import RiderCard from '../../components/RiderCard'
import MapComponent from '../../components/MapComponent'

const Explore = () => {
  return (
    <View className='flex-1'>
      <Banner username={"onesmus509"}></Banner>
      {/* Search bar */}
      <CustomTextInput placeHolder={"Search..."} isTouchable={true}/>
      {/* Filter search functionality, top rated should be replaced by search results */}
      <ScrollView>
        <TextLink text1={"#Top Rated in Your Area"} text2={"View All"} sp={'40%'}/>
        <RiderCard/>
        <TextLink text1={"#Available Rides"} text2={"View All"} sp={'40%'}/>
        <MapComponent/>
      </ScrollView>
    </View>
  )
}

export default Explore