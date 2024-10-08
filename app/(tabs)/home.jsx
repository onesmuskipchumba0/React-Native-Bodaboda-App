import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import TextLink from '../../components/TextLink'
import RiderCard from '../../components/RiderCard'
import Banner from '../../components/Banner'
import ForYouCard from '../../components/forYouCard'
import MapComponent from '../../components/MapComponent'

const Home = () => {
  return (
    <View className='flex-1'>
      <Banner username='onesmus509' profilePic='../assets/images/icons/OIG3.jpg'/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <TextLink text1='#For you' text2='View all' sp={'40%'}/>
      <ForYouCard/>
      <TextLink text1='#Available' text2='View all' sp={'40%'}/>
      <MapComponent/>
      <TextLink text1='#Top Rated in Your Area' text2='View all' sp={'40%'}/>
      <RiderCard name='John Doe' stars={4.3}/>
      </ScrollView>
    </View>
  )
}

export default Home