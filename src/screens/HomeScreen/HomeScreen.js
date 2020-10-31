import React, { useEffect, useState } from "react";
import {
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import styles from "./styles";
import { firebase } from "../../firebase/config";
import upload from "../../pics/upload.png";
import plus from "../../pics/plus.png";
import * as ImagePicker from "expo-image-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default function HomeScreen(props) {
  const [title, setTitle] = useState("");
  const [cplus, setCplus] = useState(true);
  const id = firebase.auth().currentUser.uid;

  const handleCPress = () => {
    setCplus(!cplus);
  };

  const handleNext = () => {
    props.navigation.navigate("Level");
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Text style={styles.title}>Choose your programming language</Text>

      <Text style={styles.subt}>You can choose more than one for sure </Text>

      <TouchableOpacity
        style={cplus ? styles.fbox : styles.lbox}
        onPress={() => handleCPress()}
      >
        {!cplus ? (
          <MaterialCommunityIcons
            name="checkbox-blank"
            size={30}
            color="white"
          />
        ) : (
          <MaterialCommunityIcons
            name="checkbox-marked"
            size={30}
            color="black"
          />
        )}
        <Text style={styles.ltext}>C++</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.lbox}>
        <MaterialCommunityIcons name="checkbox-blank" size={30} color="white" />
        <Text style={styles.ltext}>Javascript</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.lbox}>
        <MaterialCommunityIcons name="checkbox-blank" size={30} color="white" />
        <Text style={styles.ltext}>Python</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.lbox}>
        <MaterialCommunityIcons name="checkbox-blank" size={30} color="white" />
        <Text style={styles.ltext}>C#</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.lbox}>
        <MaterialCommunityIcons name="checkbox-blank" size={30} color="white" />
        <Text style={styles.ltext}>Golang</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.lbox}>
        <MaterialCommunityIcons name="checkbox-blank" size={30} color="white" />
        <Text style={styles.ltext}>Java</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={handleNext}>
        <Text style={styles.txt}>Next</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
}

console.disableYellowBox = true;
