import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function Level(props) {

    const [title, setTitle] = useState("");
    const [cplus, setCplus] = useState(true);
    const id = firebase.auth().currentUser.uid;


    const handleCPress = () => {
        setCplus(!cplus);
    }

    const handleNext = () => {
      props.navigation.navigate("Nav")
    }

    return (
            <KeyboardAwareScrollView
               style={styles.container}
            >

            <Text style={styles.title}>Choose your level</Text>

            <Text style={styles.subt}>You can always change it later in the settings</Text>
            
            <TouchableOpacity style={ cplus?styles.fbox:styles.lbox} onPress={() => handleCPress()}>
                {!cplus?<MaterialCommunityIcons name="checkbox-blank-circle" size={30} color="white" /> :<MaterialCommunityIcons name="checkbox-marked-circle" size={30} color="black" />}
                <Text style={styles.ltext}>Easy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ cplus?styles.fbox:styles.lbox}>
                  {!cplus?<MaterialCommunityIcons name="checkbox-blank-circle" size={30} color="white" /> :<MaterialCommunityIcons name="checkbox-marked-circle" size={30} color="black" />}
                <Text style={styles.ltext}>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ cplus?styles.fbox:styles.lbox}>
                 {!cplus?<MaterialCommunityIcons name="checkbox-blank-circle" size={30} color="white" /> :<MaterialCommunityIcons name="checkbox-marked-circle" size={30} color="black" />}
                <Text style={styles.ltext}>Hard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ cplus?styles.fbox:styles.lbox}>
                {!cplus?<MaterialCommunityIcons name="checkbox-blank-circle" size={30} color="white" /> :<MaterialCommunityIcons name="checkbox-marked-circle" size={30} color="black" />}
                <Text style={styles.ltext}>Legendary</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.btn} onPress={handleNext}>
                <Text style={styles.txt}>Next</Text>
            </TouchableOpacity>
                

        </KeyboardAwareScrollView>
        
    )
}

