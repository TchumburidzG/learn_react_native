import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const ComponentsScreen = () => {
    return (
        <View>
            <Text style={besosStyle.textStyle}> this is text </Text>
            <Text style={besosStyle.subTitleStyle}> i am subtitle </Text>
        </View>
    );
}

const besosStyle = StyleSheet.create({
    textStyle: {
        fontSize: 50
    },
    subTitleStyle: {
        fontSize: 23
    }
});

export default ComponentsScreen;