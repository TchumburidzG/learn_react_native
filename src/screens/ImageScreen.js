import { Text, View, StyleSheet } from 'react-native';
import ImageDetails from '../components/ImageDetails';

const ImageScreen = () => {
  return (
    <View>
      <Text>All Images Are Here</Text>
      <ImageDetails title="ბესიკა" score={5} imageSource={require("../../assets/images/beso.jpeg")}/>
      <ImageDetails title="დათო მეფე" score={12} imageSource={require("../../assets/images/bondo.jpg")} />
      <ImageDetails title="დათო მეფე" score={7} imageSource={require("../../assets/images/dato.jpg")} />
    </View>
  )
}

const styles = StyleSheet.create({});

export default ImageScreen;
