import React, { useState } from "react";
import { View,Text,StyleSheet,Button } from "react-native";

const ColorChangeScreen = () => {

    const [rgbColor,setrgColor] = useState([0,0,0])

    return <View>
        <Text>Red</Text>
        <Button title="More Red" />
        <Button title="Less Red" />
        <Text>Green</Text>
        <Button title="More Green" />
        <Button title="Less Green" />
        <Text>Blue</Text>
        <Button title="More Blue" />
        <Button title="Less Blue" />
        <View style={{height:100,width:100,backgroundColor:`rgb(${rgbColor[0,1,2]})`}}></View>
    </View>
}



const styles = StyleSheet.create({});

export default ColorChangeScreen;