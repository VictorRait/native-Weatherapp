import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { ActivityIndicator } from 'react-native'
import { useEffect, useState } from 'react'
import { View, StyleSheet,Text} from 'react-native'
import * as Location from 'expo-location'
import { API_KEY } from '@env'
import { useGetWeather } from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'
const App = () => {
  const [loading, weather, error] =  useGetWeather()

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }
  
  
    return (
      <View style={styles.container}>
      {error ? <ErrorItem/> : <ActivityIndicator size={'large'} color={'blue'} />}
      </View>
    )
  

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
export default App
