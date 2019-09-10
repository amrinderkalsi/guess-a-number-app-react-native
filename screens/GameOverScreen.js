import React from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/Colors';
import MainButton from '../components/MainButton';

const GameOverScreen = ({ noOfRounds, onRestart, number }) => {
    return(
        <View style={styles.screen}>
            <TitleText>Game Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image 
                    fadeDuration={500}
                    style={styles.image} 
                   // source={require('../assets/success.png')}
                    source={{uri: 'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg'}}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    The game needed 
                    <Text style={styles.textHighlight}> {noOfRounds} </Text>
                    rounds to guess the number
                    <Text style={styles.textHighlight}> {number} </Text>
                </BodyText>
            </View>
                    
            <MainButton onPress={onRestart}>NEW GAME</MainButton>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 20
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    },
    image: {
        width: '100%',
        height: '100%'
    },
    textHighlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    }
});

export default GameOverScreen;