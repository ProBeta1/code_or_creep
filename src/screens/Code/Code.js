import React from "react";
import { TextInput, TouchableOpacity, Image } from "react-native";
import { View, Text } from "react-native";
import styles from "./styles";
import ghost from "./images/ghost.png";

export default function Code() {
  let codeText = '<p id="demo">This is a demonstration.</p>';

  const [textTypeIn, onChangeText] = React.useState("Type Here");

  return (
    <View style={styles.container}>
      <Image source={ghost} style={styles.ghost} />
      <Text style={styles.text}>
        What is the correct JavaScript syntax to change the content of the HTML
        element below?
      </Text>
      <Text style={styles.text}> {codeText} </Text>
      <View
        style={{
          backgroundColor: "#C4C4C4",
          borderBottomColor: "#000000",
          borderBottomWidth: 1,
          width: 237,
          height: 108,
        }}
      >
        <TextInput
          multiline
          numberOfLines={3}
          //placeholder=""
          onChangeText={(x) => onChangeText(x)}
          defaultValue={textTypeIn}
        />
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txt}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txt}>Tips</Text>
      </TouchableOpacity>
    </View>
  );
}
