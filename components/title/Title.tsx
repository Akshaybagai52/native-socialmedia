import { View, Text } from 'react-native'
import React from 'react'
import style from './style';

interface PropTypes {
    title: string;

}

const Title = (props:PropTypes) => {
  return (
    <View>
      <Text style={[style.title]}>{props.title}</Text>
    </View>
  )
}

export default Title