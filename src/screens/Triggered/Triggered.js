import React from 'react'
import { Button, TouchableOpacity } from 'react-native';
import { View, Text, Image } from 'react-native'
import Ghost from './images/ghost.png'
import styles from './styles';

export default function Triggered() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={Ghost} />
            <Text style={styles.title}>Code or Text</Text>
            <Text style={styles.txt}>Take the challenge to stop music</Text>


            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txt}>Code</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txt}>Busy</Text>
            </TouchableOpacity>

        </View>
    )
}
