import { Text, View } from 'react-native'

function RowText(props) {
  const {
    containerStyles,
    messageOneStyles,
    messageTwoStyles,
    messageOne,
    messageTwo
  } = props
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne} </Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  )
}

export default RowText
