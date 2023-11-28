import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ImageBackground
} from 'react-native'

import ListItem from '../components/ListItem'


const UpcomingWeather = ({ weatherData }) => {

  const renderItem = ({item}) => {
     
    return <ListItem 
    key={item.dt}
    condition={item.weather[0].main}
    dt_txt={item.dt_txt}
    min={item.main.temp_min}
    max={item.main.temp_max}
  />
  }

  
  const { container, image } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/thunderstorm.jpg')}
        style={image}
      >
   
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_text}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'royalblue'
  },

  image: {
    flex: 1
  }
})
export default UpcomingWeather
