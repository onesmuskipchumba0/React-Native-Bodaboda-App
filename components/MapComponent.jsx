import { View, Text, Image } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
const MapComponent = () => {
    const latt = 0.5158854876415819
    const long = 35.272075354670534
    const markers = [
      {
        id: 1,
        title: 'Marker 1',
        description: 'This is marker 1',
        coordinates: { latitude: 0.5168854876415819, longitude: 35.273075354670534 },
      }
      // Add more markers here
    ];
  return (
    <View>
      <MapView className='w-[full] h-[200px]' region={
        {
            latitude:latt,
            longitude:long,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
    }
      }
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinates}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    </View>
  )
}

export default MapComponent