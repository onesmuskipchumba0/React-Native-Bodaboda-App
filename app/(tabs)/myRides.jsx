import { View, Text } from 'react-native'
import React from 'react'
import Banner from '../../components/Banner'
import TextLink from '../../components/TextLink'
import MapComponent from '../../components/MapComponent'
import RiderCard from '../../components/RiderCard'
import RiderCardOne from '../../components/RiderCardOne'
import EstimatedTime from '../../components/EstimatedTime'

const MyRides = () => {
  return (
    <View className= 'flex-1'>
     <Banner username={'onesmus509'}/> 
      <TextLink text1={'#Scheduled Rides'} text2={'View All'} sp={'40%'}></TextLink>
      <MapComponent>
      </MapComponent>
      <RiderCardOne></RiderCardOne>
      <EstimatedTime></EstimatedTime>
    </View>
  )
}

export default MyRides