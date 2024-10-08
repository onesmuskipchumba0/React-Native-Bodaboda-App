import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { ForYourCards } from '../app/data'

const ForYouCard = () => {
  return (
    <View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal className='space-x-3'>
        {ForYourCards.map((e,index)=>{
            return(
                <View key={index} className='rounded-xl mb-4 ml-3 mr-3  shadow-lg shadow-slate-700'>
                    <Image source={e.image} resizeMode='cover' className='rounded-xl w-[150px] h-[120px]'></Image>
                </View>
            )
        })}
      </ScrollView>
    </View>
  )
}

export default ForYouCard