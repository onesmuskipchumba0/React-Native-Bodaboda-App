import { View, Text, Image } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { ACTIVE, GROUP_ACTIVE, PARENT_ACTIVE } from 'nativewind/dist/utils/selector'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:'#FFD700',
      tabBarInactiveTintColor:'white',
      tabBarStyle:{backgroundColor:'#27408B',paddingBottom:10,paddingTop:9}
    }}>
      <Tabs.Screen name='home' options={{
        title:'Home',
        tabBarIcon:({focused})=>{return(
          <Image 
          ClassName='w-6 h-6'
          style={{
            tintColor:focused ?'#FFD700':'white',
            width:focused ? 24:20,
            height:focused ? 24:20
          }}
          source={require('../../assets/images/icons/icons8-home-50.png')}/>
        )
        }
      }}/>
      <Tabs.Screen name='explore' options={{
        title:'Explore',
        tabBarIcon:({focused})=>{return(
          <Image 
          className='w-6 h-6' 
          style={{
            tintColor:focused ?'#FFD700':'white',
            width:focused ? 24:20,
            height:focused ? 24:20

          }}
          source={require('../../assets/images/icons/icons8-search-50.png')}/>
        )
        }
      }}/>
      <Tabs.Screen name='bookRide' options={{
        title:"",
        tabBarIcon:({focused})=>{return(
          <Image 
          className='w-8 h-8' 
          style={{
            tintColor:focused ?'#FFD700':'white',
            width:focused ? 34:32,
            height:focused ? 34:32

          }}
          source={require('../../assets/images/icons/icons8-plus-50 (1).png')}/>
        )
        }        
      }}/>
      <Tabs.Screen name='myRides' options={{
        title:'My Rides',
        tabBarIcon:({focused})=>{return(
          <Image 
          className='w-6 h-6' 
          style={{
            tintColor:focused ?'#FFD700':'white',
            width:focused ? 24:20,
            height:focused ? 24:20
          }}
          source={require('../../assets/images/icons/icons8-motorcycle-50.png')}/>
        )
        } 
      }}/>
      <Tabs.Screen name='profile' options={{
        title:'Profile',
        tabBarIcon:({focused})=>{return(
          <Image 
          className='w-6 h-6' 
          style={{
            tintColor:focused ?'#FFD700':'white',
            width:focused ? 24:20,
            height:focused ? 24:20

          }}
          source={require('../../assets/images/icons/icons8-person-64.png')}/>
        )
        } 
      }}/>
    </Tabs>
  )
}

export default TabsLayout