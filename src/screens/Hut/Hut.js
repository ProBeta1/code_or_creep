import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import ghost from "../../pics/ghost.gif";

const Hut = () => {
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [img, setImg] = useState(null);
    const [time, setTime] = useState("");
    const [list, setList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const id = firebase.auth().currentUser.uid;
    let user = firebase.auth().currentUser;

    
    // const retrieve = async() => {
    //     await firebase.firestore().collection(id).get()
    //         .then((snap) => {
    //             snap.docs.map(doc => {
    //                 console.log(doc.data());
    //                 list.push(doc.data());
    //             })
    //         })
       
    // }

    useEffect(() => {
        //retrieve();
    },[])
    return(
        <View style={styles.container}>
            <View style={styles.backg}>
               <Text style={styles.boldT}>Horror Points:125</Text>
            </View>

            <Text style={styles.mem}>Watch out for our next surprise </Text>
            <Image source={ghost} style={styles.ghost} />
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txt}>Connect Echo Dot</Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default Hut;