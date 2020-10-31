import Timeline from 'react-native-timeline-flatlist'
import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const Time = () => {

    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [img, setImg] = useState(null);
    const [list, setList] = useState([]);
    const  id = firebase.auth().currentUser.uid;
    
    const retrieve = async() => {
        let tmp = [];
        await firebase.firestore().collection(id).get()
            .then((snap) => {
                snap.docs.map(doc => {
                    tmp.push(doc.data());
                })
            })
        setList(tmp);
    }
      
    useEffect(() => {
        retrieve();
    },[])

    
    const renderDetail = (rowData, sectionID, rowID) => {
        let title = <Text style={[styles.title]}>{rowData.title}</Text>
        var desc = null
        if(rowData.description && rowData.imageUrl)
          desc = (
            <View style={styles.descriptionContainer}>
              <Image source={{uri: rowData.imageUrl.localUri}} style={styles.image}/>
              <Text style={[styles.textDescription]}>{rowData.description}</Text>
            </View>
          )
     
        return (
          <View >
            {title}
            {desc}
          </View>
        )
      }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Leaderboard</Text>
            <View style={styles.bd}>
            <MaterialCommunityIcons name="ghost" size={30} color="white" /> 
              <Text style={styles.text}>Spooky</Text>
              <Text style={styles.text}>125</Text>
            </View>

            <View style={styles.bd}>
            <MaterialCommunityIcons name="ghost" size={30} color="white" />
              <Text style={styles.text}>Frank</Text>
              <Text style={styles.text}>105</Text>
            </View>
        </View>
    )
}

export default Time;
