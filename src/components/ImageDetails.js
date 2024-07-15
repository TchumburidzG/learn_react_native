import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetails = (props) => {

  return (
    <View >
      
      <Image source={props.imageSource} style={{width: 300, height: 150}}/>
      <Text>{props.title}</Text>
      <Text> ქულა - {props.score}</Text>
    </View>
  )
}

const styles = StyleSheet.create({});

export default ImageDetails;
