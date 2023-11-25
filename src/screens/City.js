import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import IconText from '../components/IconText'
function City() {
  const {
    container,
    imageLayout,
    cityName,
    countryName,
    cityText,
    populationWrapper,
    riseSetWrapper,
    riseSetText,
    rowLayout
  } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={imageLayout}
        source={require('../../assets/city.jpg')}
      >
        <View style={styles.overlayView} />
        <Text style={(cityName, cityText)}>London</Text>
        <Text style={(countryName, cityText)}>UK</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'red'}
            bodyText={'8000'}
            bodyTextStyles={styles.populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={'10:46:58am'}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={'17:28:15pm'}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageLayout: {
    flex: 1
  },
  overlayView: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red'
  },
  riseSetWrapper: {
    display: 'flex',

    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: 'white'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
export default City
