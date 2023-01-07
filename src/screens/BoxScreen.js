import React from "react";
import { View,Text,StyleSheet } from "react-native";

const BoxScreen = () => {
    return (
    <View style={styles.viewStyle}>
            <View style={styles.textOneStyle}></View>
            <View style={styles.textTwoStyle}></View>
            <View style={styles.textThreeStyle}></View>
            
    </View>
    )
}

const styles = StyleSheet.create({
    viewStyle:{

        flexDirection:'row',
        height:100,
    },
    textOneStyle:{
        borderWidth:3,
        borderColor:'red',
        flex:1,
        height:100,
        backgroundColor:'red'
    },
    textTwoStyle:{
        borderWidth:3,
        borderColor:'green',
        height:100,
        flex:1,
        marginLeft:20,
        marginRight:20,
        top:100,
        backgroundColor:'green'
    },
    textThreeStyle:{
        borderWidth:3,
        borderColor:'purple',
        height:100,
        flex:1,
        backgroundColor:'purple'
    }
});

export default BoxScreen;