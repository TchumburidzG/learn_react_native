import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('List')}
        title="list view"
      />
      <TouchableOpacity onPress={() => navigation.navigate('Components')}>
        <Text
          style={{
            backgroundColor: "green",
            height: 40,
            justifyContent: "center",
            width: "100%",
            textAlign: "center"
          }}>
          list opacity view
        </Text>
      </TouchableOpacity>
      <Button
        onPress={() => navigation.navigate('Images')}
        title="Images View"
      />
      <Button
        onPress={() => navigation.navigate('Calculator')}
        title="Calculator"
      />
      <Button
        onPress={() => navigation.navigate('Colors')}
        title="Colors"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
