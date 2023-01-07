import React, {useState,useReducer} from "react";
import { View,Text,StyleSheet,Button } from "react-native";

const amountToChange = 1;

const CounterScreen = () => { 

    const reducer = (state,action) => {
        switch (action.type){
            case 'increase':   
                return {...state,counter:state.counter + action.payload};
            case 'decrease':
                return {...state,counter:state.counter - action.payload};
            default:
                return;
        }
    }

    
    const [state,dispatch] = useReducer(reducer,{counter:0});
    const {counter} = state;

    
    
    return (
        <View>
            <Button 
                title="Increase"
                onPress={() => {
                    dispatch({type:'increase',payload:amountToChange})
                }}
            />
            <Button 
                title="Decrease"
                onPress={() => {
                    dispatch({type:'decrease',payload:amountToChange})
                }}
            />

            <Text>Current Count: {state.counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default CounterScreen;