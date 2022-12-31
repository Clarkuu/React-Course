import React from "react";
import { View,Text,StyleSheet } from "react-native"
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return <View>
        <ImageDetail 
            image={require('../../assets/beach.jpg')} 
            title="Forest"
            score={6}
        />
        <ImageDetail 
            image={require('../../assets/forest.jpg')} 
            title="Mountain"
            score={7}
        />
        <ImageDetail 
            image={require('../../assets/mountain.jpg')} 
            title="Mountain"
            score={9}
        />
    </View>;
}

const styles = StyleSheet.create({});

export default ImageScreen;