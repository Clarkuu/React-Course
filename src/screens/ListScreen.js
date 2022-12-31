import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {

    const friends = [
        {name: 'Friend #1', age:21},
        {name: 'Friend #2', age:16},
        {name: 'Friend #3', age:17},
        {name: 'Friend #4', age:18},
        {name: 'Friend #5', age:22},
        {name: 'Friend #6', age:20},
        {name: 'Friend #7', age:18},
    ];

    return (
        <FlatList 
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={( {item }) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
            }}
        />
    )
}

const styles = StyleSheet.create({
    textStyle:{
        marginVertical:50
    }
});

export default ListScreen;