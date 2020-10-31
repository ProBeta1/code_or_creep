import { getPathFromState } from "@react-navigation/native";
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
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";
import ghost from "./images/ghost.png";

export default function Tips() {
  let codeText = '<p id="demo">This is a demonstration.</p>';

  const [cplus, setCplus] = useState(true);

  const handleCPress = () => {
    setCplus(!cplus);
  };

  let choiceOne = 'document.getElement("p").innerHTML = "Hello World!";';
  let choiceTwo = 'document.getElementByName(“p”).innerHTML = "Hello World!"; ';
  let choiceThree =
    'document.getElementById(“demo”).innerHTML = "Hello World!"; ';
  let choiceFour = "#demo.innerHTML = “Hello World!”;";

  return (
    <View style={styles.container}>
      <Image source={ghost} style={styles.ghost}></Image>
      <Text style={styles.text}>
        What is the correct JavaScript syntax to change the content of the HTML
        element below?
      </Text>
      <Text style={styles.text}>{codeText}</Text>

      <TouchableOpacity
        style={cplus ? styles.fbox : styles.lbox}
        onPress={() => handleCPress()}
      >
        {!cplus ? (
          <MaterialCommunityIcons
            name="checkbox-blank-circle"
            size={30}
            color="white"
          />
        ) : (
          <MaterialCommunityIcons
            name="checkbox-marked-circle"
            size={30}
            color="black"
          />
        )}
        <Text style={styles.ltext}>{choiceOne}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={cplus ? styles.fbox : styles.lbox}>
        {!cplus ? (
          <MaterialCommunityIcons
            name="checkbox-blank-circle"
            size={30}
            color="white"
          />
        ) : (
          <MaterialCommunityIcons
            name="checkbox-marked-circle"
            size={30}
            color="black"
          />
        )}
        <Text style={styles.ltext}>{choiceTwo}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={cplus ? styles.fbox : styles.lbox}>
        {!cplus ? (
          <MaterialCommunityIcons
            name="checkbox-blank-circle"
            size={30}
            color="white"
          />
        ) : (
          <MaterialCommunityIcons
            name="checkbox-marked-circle"
            size={30}
            color="black"
          />
        )}
        <Text style={styles.ltext}>{choiceThree}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={cplus ? styles.fbox : styles.lbox}>
        {!cplus ? (
          <MaterialCommunityIcons
            name="checkbox-blank-circle"
            size={30}
            color="white"
          />
        ) : (
          <MaterialCommunityIcons
            name="checkbox-marked-circle"
            size={30}
            color="black"
          />
        )}
        <Text style={styles.ltext}>{choiceFour}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txt}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txt}>Tips</Text>
      </TouchableOpacity>
    </View>
  );
}

/*
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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default function Level(props) {
  const [title, setTitle] = useState("");
  const [cplus, setCplus] = useState(true);
  const id = firebase.auth().currentUser.uid;

  const handleCPress = () => {
    setCplus(!cplus);
  };

  const handleNext = () => {
    props.navigation.navigate("Nav");
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Text style={styles.title}>Choose your level</Text>

      <Text style={styles.subt}>
        You can always change it later in the settings
      </Text>

      <TouchableOpacity
        style={cplus ? styles.fbox : styles.lbox}
        onPress={() => handleCPress()}
      >
        {!cplus ? (
          <MaterialCommunityIcons
            name="checkbox-blank-circle"
            size={30}
            color="white"
          />
        ) : (
          <MaterialCommunityIcons
            name="checkbox-marked-circle"
            size={30}
            color="black"
          />
        )}
        <Text style={styles.ltext}>Easy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={cplus ? styles.fbox : styles.lbox}>
        {!cplus ? (
          <MaterialCommunityIcons
            name="checkbox-blank-circle"
            size={30}
            color="white"
          />
        ) : (
          <MaterialCommunityIcons
            name="checkbox-marked-circle"
            size={30}
            color="black"
          />
        )}
        <Text style={styles.ltext}>Medium</Text>
      </TouchableOpacity>
      <TouchableOpacity style={cplus ? styles.fbox : styles.lbox}>
        {!cplus ? (
          <MaterialCommunityIcons
            name="checkbox-blank-circle"
            size={30}
            color="white"
          />
        ) : (
          <MaterialCommunityIcons
            name="checkbox-marked-circle"
            size={30}
            color="black"
          />
        )}
        <Text style={styles.ltext}>Hard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={cplus ? styles.fbox : styles.lbox}>
        {!cplus ? (
          <MaterialCommunityIcons
            name="checkbox-blank-circle"
            size={30}
            color="white"
          />
        ) : (
          <MaterialCommunityIcons
            name="checkbox-marked-circle"
            size={30}
            color="black"
          />
        )}
        <Text style={styles.ltext}>Legendary</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={handleNext}>
        <Text style={styles.txt}>Next</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
}
*/
