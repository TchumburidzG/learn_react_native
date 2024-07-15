import { View, Text, StyleSheet, FlatList } from "react-native";


const ListScreen = () => {
  const friends = [
    { name: "ბესიკა", age: 25 },
    { name: "ბონდო", age: 30 },
    { name: "ვიტალა", age: 28 },
    { name: "ტანია", age: 22 },
    { name: "ალეხანდრა", age: 27 },
    { name: "ბონდოia", age: 33 },
    { name: "ვიტალაia", age: 26 },
    { name: "ტანია1", age: 24 },
    { name: "ალეხანდრა2", age: 29 },
    { name: "ბონდო3", age: 31 },
    { name: "ვიტალა3", age: 25 },
    { name: "ტანია3", age: 23 },
    { name: "ალეხანდრა3", age: 28 }
  ];

  return (
    <FlatList
      // horizontal ეს დაგვილაგებს ლისტის ელემენტებს ჰორიზონტალურად. ერთ ხაზზე.
      // showHorizontalScrollIndicator={false}
      keyExtractor={(besika) => besika.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text
          style={[bondoStyle.secondStyle, bondoStyle.firstStyle]}>
          `{item.name} - ასაკი {item.age}`
        </Text>;
      }}
    />
  )
}

const bondoStyle = StyleSheet.create({
  firstStyle: {
    fontSize: 20,

  },
  secondStyle: {
    color: 'blue',
    backgroundColor: 'skyblue',
    marginVertical: 10
  }
})

export default ListScreen;