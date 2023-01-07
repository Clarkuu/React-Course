import React, { useState } from "react";
import {View,Text,StyleSheet} from 'react-native';
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {

    const [red,setRed] = useState(0);
    const [green,setGreen] = useState(0);
    const [blue,setBlue] = useState(0);
    const step = 10;

    const setColor = (color,change) => {
        switch(color){
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            default:
                return;
        }
    }

    return <View>
        <ColorCounter 
            onIncrease={() => setColor('red', step)}  
            onDecrease={() => setColor('red', -1 * step)}
            color="Red" />
        <ColorCounter 
            color="Green"
            onIncrease={() => setColor('green', step)} 
            onDecrease={() => setColor('green', -1 * step)} />
        <ColorCounter 
            color="Blue" 
            onIncrease={() => setColor('blue', + step)} 
            onDecrease={() => setColor('blue', -1 * step)} />
        <View style={{height:150, width:150,backgroundColor:`rgb(${red},${green},${blue})`}}></View>    
    </View>
}

const styles = StyleSheet.create({});

export default SquareScreen;