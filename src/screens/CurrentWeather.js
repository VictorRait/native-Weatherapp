import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/WeatherType'
const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temp,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message
  } = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />

        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText
          messageOne={'High: 8'}
          messageTwo={'Low:6'}
          containerStyle={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={'Its sunny'}
        messageTwo={'Its perfect t-shirt weather'}
        containerStyle={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
    padding: 5
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})
export default CurrentWeather
