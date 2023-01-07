import React from "react";
import { Text, StyleSheet,View,Button,TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
  <View>
    <Text style={styles.text}>Hi There</Text>
    <Button 
        onPress={() => navigation.navigate("Components")} 
        title="Go to Components Demo" 
     />
     <Button 
      title="Go to List Demo"
      onPress={() => navigation.navigate("List")}
     />
     <Button 
      title="Go to image screen"
      onPress={() => navigation.navigate("Image")}
     />
     <Button 
      title="Go to Counter screen"
      onPress={() => navigation.navigate("Counter")}
     />
     <Button 
      title="Go to Color screen"
      onPress={() => navigation.navigate("Color")}
     />
     <Button 
      title="Go to Color Change screen"
      onPress={() => navigation.navigate("ChangeColor")}
     />
     <Button 
      title="Go to Square screen"
      onPress={() => navigation.navigate("Square")}
     />
     <Button 
      title="Go to text demo"
      onPress={() => navigation.navigate("Text")}
     />
     <Button 
      title="Go to Box demo"
      onPress={() => navigation.navigate("Box")}
     />
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
