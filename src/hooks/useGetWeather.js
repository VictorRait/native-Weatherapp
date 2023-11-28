
import { ActivityIndicator } from 'react-native'
import { useEffect,  useState } from 'react'

import * as Location from 'expo-location'
import { API_KEY } from '@env'
export const useGetWeather = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [weather, setWeather] = useState(null)
    const [lat, setLat] = useState([])
    const [long, setLong] = useState([])
    const [permission, setPermission] = useState(false)
    const fetchWeatherData = async () => {
        try {
            setLoading(true)
          
            const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)
            const data = await res.json()
         
            setWeather(data)
       
        } catch (error) {
         
            setError('Could not get the weather data')
        
        } finally {
            setLoading(false)
      
        }
    };
    useEffect(() => {
        // prettier-ignore
        ;(async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            
          if (status !== 'granted') {
              setError('Permission was denied!')
              setPermission(true)
            return
          }
          let locationAsync = await Location.getCurrentPositionAsync({})
          setLat(locationAsync.coords.latitude)
          setLong(locationAsync.coords.longitude)
          await fetchWeatherData()
      
        })()
    }, [lat,long, permission])
    return [loading, weather, error ]
}