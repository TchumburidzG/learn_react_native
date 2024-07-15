import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import { useState } from 'react'

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  const getRandomColor = () => {
    const hexChars = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexChars[Math.floor(Math.random() * 16)];
    }
    return color
  }

  return (
    <View >
      <Button title="create random color" onPress={ () =>  setColors([...colors, getRandomColor()])} />
      <FlatList
        keyExtarctor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ backgroundColor: item, width: 80, height: 80 }}>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({});

export default ColorScreen;
