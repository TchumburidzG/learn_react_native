import { Text, StyleSheet, View, Button } from "react-native";
import {useState} from 'react'

const Calculator = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text style={styles.text}>Calculatot</Text>
      <Button
        onPress={() => {setCounter(counter + 1)}}
        title="+ Increase"
      />
      <Button
        onPress={() => {setCounter(counter - 1)}}
        title="- Decrease"
      />
      <Text>{counter}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default Calculator;
